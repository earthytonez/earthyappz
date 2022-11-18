import { makeObservable, observable, action } from "mobx";
import * as Tone from "tone";

import Arranger from "./Arranger/Arranger";
import Sequencer from "./Sequencer";
import GateSequencer from "./GateSequencer";
import BaseSynthesizer from "./Synthesizer/SynthesizerTypes/Base";

import { getSynthesizer } from "./Synthesizer/SynthesizerFactory";
import { getSequencer } from "./Sequencer/SequencerFactory";
import GateSequencerFactory from "./GateSequencer/GateSequencerFactory";

import { BeatMarker } from "./MusicFeatures/BeatMarker";
import MusicFeaturesStore from "./MusicFeatures.store";
import PluginStore from "./Plugin.store";
import ParameterStore from "./Parameter.store";
import RootStore from "./Root.store";
import UserParameterStore from "./UserParameter.store";

import TrackStore from "./Track.store";
import TrackOctaves from "./Track/TrackOctaves";
import TrackVolume from "./Track/TrackVolume";

import { debug, error, warn } from "../Util/logger";

import { IMachineTypeSlug } from "./Machines/MachineTypes";

interface ITrackFeatures {
  octaves: TrackOctaves;
  volume: TrackVolume;
}

export default class Track {
  arranger?: Arranger;
  sequencer?: Sequencer;
  gateSequencer?: GateSequencer;
  synthesizer?: BaseSynthesizer;

  private musicFeaturesStore: MusicFeaturesStore;
  private userParameterStore: UserParameterStore;
  private parameterStore: ParameterStore;
  private pluginStore: PluginStore;
  private trackStore: TrackStore;

  trackFeatures: ITrackFeatures;

  slug: string;

  generateID(): string {
    let id = Array.from(Array(8), () =>
      Math.floor(Math.random() * 36).toString(36)
    ).join("");

    let tracksIDs = this.trackStore.tracks.map((track: Track) => {
      return track.id;
    });

    if (tracksIDs.includes(id)) {
      return this.generateID();
    }
    return id;
  }

  public id: string;

  constructor(
    public number: number,
    audioContext: Tone.BaseContext,
    rootStore: RootStore,
    trackMachines?: any,
    id?: string
  ) {
    Tone.setContext(audioContext);

    this.loadTrackGateSequencer("fixed_step");

    this.musicFeaturesStore = rootStore.musicFeaturesStore;
    this.userParameterStore = rootStore.userParameterStore;
    this.parameterStore = rootStore.parameterStore;
    this.pluginStore = rootStore.pluginStore;
    this.trackStore = rootStore.trackStore;

    if (id) {
      this.id = id;
    } else {
      this.id = this.generateID();
    }

    if (!this.musicFeaturesStore) {
      throw new Error("musicFeaturesStore must be set");
    }

    this.trackFeatures = {
      octaves: new TrackOctaves(this.userParameterStore, this),
      volume: new TrackVolume(this.userParameterStore, this),
    };

    this.slug = `track-${id}`;
    const toneVolume = new Tone.Volume(0);
    this.trackFeatures.volume.vol = toneVolume.toDestination();

    this.initializeMachines(trackMachines);

    makeObservable(this, {
      arranger: observable,
      gateSequencer: observable,
      id: observable,
      slug: observable,
      sequencer: observable,
      synthesizer: observable,
      trackFeatures: observable,
      setLoading: action.bound,
      assignMachine: action.bound,
    });
  }

  remove = () => {
    this.trackStore.removeTrack(this.number);
  };

  async tick(beatMarker: BeatMarker, time: number) {
    debug(`TRACK_TICK`, `-------------------- Start --------------------`);

    if (this.sequencer === undefined) {
      warn("TRACK_TICK", "No Sequencer Set");
      return;
    }

    if (this.gateSequencer === undefined) {
      warn("TRACK_TICK", "No Gate Sequencer Set");
      return false;
    }

    if (this.synthesizer === undefined) {
      warn("TRACK_TICK", "No Synthesizer Set");
      return false;
    }

    if (!this.musicFeaturesStore) {
      console.error(`musicFeaturesStore Not Set`);
      return;
    }

    /* Here is what it takes to play a note from gate to synth */
    let key = this.musicFeaturesStore.musicKey.value();
    let scale = this.musicFeaturesStore.musicScale.value();
    let chord = this.musicFeaturesStore.musicChord.value();
    let progression = this.musicFeaturesStore.musicChordProgression.value();

    /* TODO: Make arrangement work */
    // let arrangementAttributes = this.arranger?.play(beatMarker, time);
    // if (!arrangementAttributes) {
    //   return false;
    // }

    let arrangementAttributes = {
      play: true,
    };
    debug(`TRACK_TICK`, `Arrangement Attributes: `, arrangementAttributes);

    let gateAttributes = await this.gateSequencer?.play(
      arrangementAttributes,
      beatMarker,
      time
    );

    if (!gateAttributes || !gateAttributes.triggered) {
      return false;
    }

    debug(`TRACK_TICK`, `Gate Attributes: `, gateAttributes);

    let playAttributes = await this.sequencer.play(
      gateAttributes,
      key,
      scale,
      chord,
      progression,
      beatMarker,
      time
    );

    if (!playAttributes) {
      return false;
    }

    debug(`TRACK_TICK`, `Play Attributes: `, playAttributes);

    this.synthesizer?.play(gateAttributes, playAttributes);

    if (beatMarker.num % 10 === 0) {
      this.trackStore?.saveTracks();
    }
    return;
  }

  audioContext() {
    return Tone.getContext();
  }

  synthFromSlug(synthSlug: string) {
    console.log("TRACK::SYNTH_FROM_SLUG", `Synth Slug: ${synthSlug}`);
    return getSynthesizer(
      this.userParameterStore,
      this.parameterStore,
      this.pluginStore,
      synthSlug,
      this.id
    );
  }

  gateSequencerFromSlug(gateSequencerSlug: string) {
    console.log(
      "TRACK::SEQUENCER_FROM_SLUG",
      `Sequencer Slug: ${gateSequencerSlug}`
    );
    let gateSequencerFactory = new GateSequencerFactory(
      this.parameterStore,
      this.musicFeaturesStore
    );
    return gateSequencerFactory.getGateSequencer(gateSequencerSlug, this.id);
  }

  sequencerFromSlug(sequencerSlug: string) {
    console.log(
      "TRACK::SEQUENCER_FROM_SLUG",
      `Sequencer Slug: ${sequencerSlug}`
    );
    return getSequencer(
      this.userParameterStore,
      this.parameterStore,
      this.musicFeaturesStore,
      this.pluginStore,
      sequencerSlug,
      this.id,
      this.audioContext(),
      this.trackFeatures
    );
  }

  arrangerFromSlug(arrangerSlug: string) {
    return new Arranger(arrangerSlug, Tone.getContext());
  }

  newMachine(machineType: IMachineTypeSlug, machineSlug: string) {
    switch (machineType) {
      case "synthesizer":
        return this.synthFromSlug(machineSlug);
      case "gateSequencer":
        return this.gateSequencerFromSlug(machineSlug);
      case "sequencer":
        return this.sequencerFromSlug(machineSlug);
      case "arranger":
        return this.arrangerFromSlug(machineSlug);
    }
    return;
  }

  async assignMachine(machineType: IMachineTypeSlug, machineSlug: any) {
    console.log(`Assigning Machine ${machineType}`);
    let machine = await this.newMachine(machineType, machineSlug);

    this[machineType as keyof this] = machine;

    console.log(machineType);
    console.log(this[machineType as keyof this]);

    if (machineType === "synthesizer") {
      this.synthesizer?.attachVolume(this.trackFeatures.volume.vol);
    }
  }

  sequencerJSON() {
    if (this.sequencer) {
      return {
        name: this.sequencer.name,
        slug: this.sequencer.slug,
        type: this.sequencer.type,
      };
    }
    return undefined;
  }

  gateSequencerJSON() {
    if (this.gateSequencer) {
      return {
        name: this.gateSequencer.name,
        slug: this.gateSequencer.slug,
        type: this.gateSequencer.type,
      };
    }
    return undefined;
  }

  synthesizerJSON() {
    console.log(this.synthesizer);
    if (this.synthesizer) {
      return {
        name: this.synthesizer.name,
        slug: this.synthesizer.name.replaceAll(" ", "_").toLowerCase(),
      };
    }
    return undefined;
  }

  toJSON() {
    let retVal = {
      id: this.id,
      number: this.number,
      slug: this.slug,
      arranger: this.arranger,
      sequencer: this.sequencerJSON(),
      gateSequencer: this.gateSequencerJSON(),
      synthesizer: this.synthesizerJSON(),
    };
    return retVal;
  }

  setLoading(loading: boolean) {
    if (this.sequencer !== undefined) this.sequencer.setLoading(loading);
    if (this.arranger !== undefined) this.arranger.setLoading(loading);
    if (this.synthesizer !== undefined) this.synthesizer.setLoading(loading);
  }

  async loadTrackArranger(arrangerData: any) {
    if (!arrangerData) {
      return (this.arranger = undefined);
    }
    try {
      if (arrangerData) {
        this.arranger = new Arranger(arrangerData, Tone.getContext());
      }
    } catch (err: any) {
      error("TRACK_LOAD_FEATURES_ERROR_ARRANGER", err.stack);
    }
    return undefined;
  }

  async loadTrackSequencer(sequencer: any) {
    if (!sequencer) {
      return (this.sequencer = undefined);
    }

    try {
      this.sequencer = await this.sequencerFromSlug(sequencer.slug);
    } catch (err: any) {
      error("TRACK_LOAD_FEATURES_ERROR_SEQUENCER", err.stack);
    }
    return undefined;
  }

  async loadTrackGateSequencer(gateSequencer: any) {
    if (!gateSequencer || !gateSequencer.slug) {
      return (this.gateSequencer = undefined);
    }

    try {
      this.gateSequencer = await this.gateSequencerFromSlug(gateSequencer.slug);
    } catch (err: any) {
      error("TRACK_LOAD_GATE_SEQUENCER_ERROR_SEQUENCER", err.stack);
    }
    return undefined;
  }

  async loadTrackSynthesizer(synthesizer: BaseSynthesizer) {
    if (!synthesizer || !synthesizer.slug) {
      return (this.synthesizer = undefined);
    }
    try {
      debug("TRACK", "LOAD TRACK SYNTHESIZER", synthesizer);

      this.synthesizer = await getSynthesizer(
        this.userParameterStore,
        this.parameterStore,
        this.pluginStore,
        synthesizer.slug,
        this.id
      );

      this.synthesizer?.attachVolume(this.trackFeatures.volume.vol);
    } catch (err: any) {
      error("TRACK_LOAD_FEATURES_ERROR_SYNTHESIZER", err.stack);
    }
    return undefined;
  }

  async load(trackData: any) {
    debug("TRACK_LOADER", `Loading track from trackdata`, trackData);

    await this.loadTrackArranger(trackData.arranger);
    await this.loadTrackSequencer(trackData.sequencer);
    await this.loadTrackGateSequencer(trackData.gateSequencer);
    await this.loadTrackSynthesizer(trackData.synthesizer);

    this.setLoading(false);
  }

  private initializeMachines(trackMachines: any) {
    if (!trackMachines) {
      return warn(
        "TRACK_LOADER",
        "trackMachines not set when running initializeMachines"
      );
    }
    debug("TRACK_LOADER", `Initializing Machines from trackMachines: `);

    this.arranger = undefined;

    this.loadTrackGateSequencer(trackMachines.gateSequencer);
    this.loadTrackSequencer(trackMachines.sequencer);
    this.loadTrackSynthesizer(trackMachines.synth);

    this.setLoading(false);
  }
}
