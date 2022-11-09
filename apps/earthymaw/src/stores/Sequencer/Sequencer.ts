import * as Tone from "tone";
import { Chord } from "@tonaljs/tonal";

import { makeObservable, action, computed } from "mobx";

import IPlayParams from "../../Types/IPlayParams";
import { debug, info } from "../../Util/logger";
import SequencerType from "./SequencerType";

import SequencerDefinition from "./SequencerLoader/SequencerDefinition";
import ISequencerParameters from "./SequencerRunner/ISequencerParameters";

import MusicFeaturesStore from "../MusicFeatures.store";
import { BeatMarker } from "../MusicFeatures/BeatMarker";

import BaseSynthesizer from "../Synthesizer/SynthesizerTypes/Base";
import BaseParameter from "../Parameter/Base";

import { IMusicChord, IMusicKey, IMusicScale, IMusicProgression } from "Types";

import NoteToPlay from "./SequencerLoader/NoteToPlay";
import VolumeToPlay from "./SequencerLoader/VolumeToPlay";
import IntervalToPlay from "./SequencerLoader/IntervalToPlay";
import { IGatePlayParams } from "../GateSequencer/IGatePlayParams";

import { ISequencerPlayParams } from "./ISequencerPlayParams";

interface IIntervalsToPlay {
  interval_length: number;
  list: number[];

  type: string;
  type_list: string[];
}

export default class Sequencer extends SequencerType {
  slug: string;

  /*
   * A parameter set determines when a sequence is triggered.
   * There can be multiple parameter sets for a given sequencer, in order to have
   * selectable variation.  For example, the 3 four can play the second beat
   * on the 2 or the three (1-2-4, 1-3-4).
   */
  chosenTriggerParameterSet: number = 0;
  chosenGateParameterSet: number = 0;

  beatsSinceLastNote: number;

  boundSynthesizer?: BaseSynthesizer = undefined;
  machineType: string = "Sequencer";
  type: string = "";
  x = 0;
  _loading: boolean = true;

  droneLength: number = 9;
  droneTail: number = 6;

  _parameters: Map<string, BaseParameter> = new Map();

  /*
   * These variables are defined on the Track and come in through the constructor
   */
  trackFeatures: any;

  droneSpacingHigh: number = 3;
  droneSpacingLow: number = 2;

  lastParams: any;

  audioContext: Tone.BaseContext;
  musicFeaturesStore: MusicFeaturesStore;

  tags?: string[];
  description?: string = "";
  intervalToPlay: IntervalToPlay = new IntervalToPlay();
  intervalsToPlay?: IIntervalsToPlay;
  noteToPlay: NoteToPlay = new NoteToPlay();
  parameters?: string[];
  volumeToPlay: VolumeToPlay = new VolumeToPlay();
  rhythm_length?: number = undefined;
  totalLength: number;

  /* TODO: Deprecate and remove */
  minInterval: number = 0;
  maxInterval: number = 0;

  constructor(
    sequencerDefinition: SequencerDefinition,
    audioContext: Tone.BaseContext,
    musicFeaturesStore: MusicFeaturesStore,
    trackFeatures: any
  ) {
    super(sequencerDefinition);

    this.beatsSinceLastNote = 0;
    this.name = sequencerDefinition.name!;

    this.audioContext = audioContext;
    this.musicFeaturesStore = musicFeaturesStore;
    this.trackFeatures = trackFeatures;
    this.slug = sequencerDefinition.slug!;
    this.type = sequencerDefinition.type!;

    this.intervalToPlay = sequencerDefinition.intervalToPlay;
    this.noteToPlay = sequencerDefinition.noteToPlay;
    this.volumeToPlay = sequencerDefinition.volumeToPlay;
    this.totalLength = sequencerDefinition.totalLength;

    makeObservable(this, {
      bindSynth: action,
      changeParameter: action.bound,
      editParameters: computed,
      play: action,
      resetBeatsSinceLastNote: action.bound,
      toJSON: action.bound,
    });
  }

  measureBeat(beatMarker: BeatMarker): number {
    if (!this.totalLength) {
      return beatMarker.num;
    }
    return beatMarker.num % this.totalLength;
  }

  setLoading(loading: boolean) {
    this._loading = loading;
  }

  get loading() {
    return this._loading;
  }

  resetBeatsSinceLastNote() {
    this.beatsSinceLastNote = 0;
  }

  toJSON() {
    // let excludedKeys = ["musicFeaturesStore", "trackStore", "boundSynthesizer", "trackFeatures",];
    let includedKeys = ["type"];

    let filteredObject = Object.keys(this)
      .filter((key: string) => !includedKeys.includes(key))
      .reduce((obj: any, key: string) => {
        obj[key] = this[key as keyof this];
        return obj;
      }, {});

    return filteredObject;
  }

  isSynth() {
    return false;
  }

  bindSynth(synth: BaseSynthesizer) {
    this.boundSynthesizer = synth;
    debug("SEQUENCER", `Bound Synthesizer: ${synth}`, this.boundSynthesizer);
  }

  incrementParameter(parameter: string) {
    return parameter;
  }

  decrementParameter(parameter: string) {
    return parameter;
  }

  changeParameter(parameterSlug: string, value: any) {
    console.log(this._parameters);
    debug(
      "SEQUENCER",
      `Changing Parameter ${parameterSlug} to ${value}`,
      this._parameters
    );
    if (!this._parameters) {
      throw new Error("No Parameters");
    }

    let parameter = this._parameters.get(parameterSlug);

    if (!parameter) {
      throw new Error("Invalid Parameter");
    }

    parameter.setValue(value);
  }

  get editParameters(): ISequencerParameters[] {
    return Array.from(this._parameters!.values());
  }

  /* Here we have parameters, how does the data get back to the plugin, or wherever it 
     is supposed to go?  I think you change the userdata and everything pulls from that.
     */
  registerParameter(parameter: BaseParameter) {
    this._parameters?.set(parameter.slug, parameter);
  }

  registerParameters(parameters: BaseParameter[]): Sequencer {
    if (!parameters) {
      return this;
    }
    parameters.forEach((parameter: BaseParameter) => {
      this.registerParameter(parameter);
    });

    return this;
  }

  /* 
    This triggers the volume sequencer.  Some sequencers may have steps with different volume levels.
  */
  volume(beatMarker: BeatMarker): number {
    return 0 * beatMarker.num;
  }

  /* This triggers the note sequencer.*/
  note(
    key: IMusicKey,
    scale: IMusicScale,
    chord: IMusicChord,
    beatMarker: BeatMarker
  ): Tone.FrequencyClass {
    let octaves = this.trackFeatures.octaves.val();
    return this.noteToPlay.get(
      key,
      scale,
      chord,
      octaves,
      this.measureBeat(beatMarker),
      this.intervalToPlay,
      this._parameters,
      this.lastParams
    );
  }

  bounceChord(notes: any, synthFn: any, playDuration: any, tailDuration: any) {
    let playParams = {
      lengthSeconds: Tone.Time(playDuration).toSeconds(),
      tailSeconds: Tone.Time(tailDuration).toSeconds(),
      notes: notes,
    };

    debug("SEQUENCER", "ToneOfflineLength", {
      lengthSeconds: playParams.lengthSeconds,
      tailSeconds: playParams.tailSeconds,
    });

    return Tone.Offline(
      () => synthFn(playParams), /// .bind(this)
      playParams.lengthSeconds + playParams.tailSeconds
    );
  }

  /*
   * TODO: Interesting that here we get Chord with a key.  Should we be doing this earlier?
   */
  getChord(key: IMusicKey, chord: IMusicChord): string[] {
    let chordDef = Chord.getChord(chord.name.toLowerCase(), key);

    return chordDef.notes;
  }

  arpParams(
    key: IMusicKey,
    scale: IMusicScale,
    chord: IMusicChord,
    beatMarker: BeatMarker,
    time: any
  ): IPlayParams {
    return {
      volume: this.volume(beatMarker),
      note: this.note(key, scale, chord, beatMarker),
      time: time,
    };
  }

  droneParams(
    key: IMusicKey,
    scale: IMusicScale,
    chord: IMusicChord,
    beatMarker: BeatMarker,
    time: any
  ): any {
    info("DRONE_SEQUENCER", "Starting Drone");

    let playParams = this.playParams(key, scale, chord, beatMarker, time);
    playParams.lengthSeconds = this.droneLength;
    playParams.tailSeconds = this.droneTail;

    let chordNotes = this.getChord(key, chord);

    let octave = 4;
    if (this.trackFeatures.octaves) {
      octave =
        this.trackFeatures.octaves.val()[
          Math.floor(Math.random() * this.trackFeatures.octaves.val().length)
        ];
    }

    let toneFrequencyChord = chordNotes.map((note: string) => {
      return Tone.Frequency(`${note}${octave}`);
    });

    let toneFrequencyChords = [...toneFrequencyChord].sort(
      () => Math.random() - 0.5
    )[0]; // What is this doing?

    console.log(toneFrequencyChords);
    playParams.notes = toneFrequencyChord;

    debug("Playing Drone Sequencer", "Getting Buffers", playParams);
    return playParams;

    // playParams.notes = [
    //   [
    //     Tone.Frequency("C2"),
    //     Tone.Frequency("E2"),
    //     Tone.Frequency("G2"),
    //     Tone.Frequency("B3"),
    //     Tone.Frequency("D3"),
    //   ],
    //   [
    //     Tone.Frequency("D2"),
    //     Tone.Frequency("F2"),
    //     Tone.Frequency("A3"),
    //     Tone.Frequency("C3"),
    //     Tone.Frequency("E3"),
    //     Tone.Frequency("G3"),
    //   ],
    //   [
    //     Tone.Frequency("E2"),
    //     Tone.Frequency("G2"),
    //     Tone.Frequency("B3"),
    //     Tone.Frequency("D3"),
    //     Tone.Frequency("F3"),
    //   ],
    //   [
    //     Tone.Frequency("F2"),
    //     Tone.Frequency("A2"),
    //     Tone.Frequency("C3"),
    //     Tone.Frequency("E3"),
    //     Tone.Frequency("G3"),
    //     Tone.Frequency("B3"),
    //   ],
    // ].sort(() => Math.random() - 0.5)[0];
    // this.awaitBuffers.then((buffers) => {
    //   debug("DRONE_SEQUENCER", "Getting Buffers", buffers);
    //   let patternCtrl = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
    //   // let patternCtrl = new Tone.Pattern([0, 1, 2, 3], "random");
    //   // let timeCtrl = new Tone.CtrlRandom(6, 18);
    //   let timeCtrl = Math.random() * (18 - 6) + 6;

    //   let randomBufferIndex = patternCtrl[beatMarker % patternCtrl.length];
    //   let selectedBuffer = buffers[randomBufferIndex];

    //   debug("DRONE_SEQUENCER",
    //     `Playing from buffer source ${selectedBuffer}, at ${randomBufferIndex}, now is ${Tone.now()}, time is ${time}`
    //   );

    //   // this.boundSynthesizer.play(Object.assign({ notes: ["C4", "E4", "G4"], lengthSeconds: 3,
    //   //   tailSeconds: 3, time: time})
    //   // );

    //   const toneBufferSource = new Tone.ToneBufferSource(selectedBuffer, () => {
    //     debug("DRONE_SEQUENCER", "Loaded Tone Audio Buffer");
    //   });
    //   toneBufferSource.toDestination();
    //   toneBufferSource.start(time);
    // });
  }

  playParams(
    key: IMusicKey,
    scale: IMusicScale,
    chord: IMusicChord,
    beatMarker: BeatMarker,
    time: any
  ): ISequencerPlayParams {
    return {
      volume: this.volume(beatMarker),
      note: this.note(key, scale, chord, beatMarker),
      time: time,
    };
  }

  sequencerType(): string {
    return this.type;
  }

  /* This action is triggered externall to possibly play a sequencer */
  async play(
    gateParams: IGatePlayParams,
    key: IMusicKey,
    scale: IMusicScale,
    chord: IMusicChord,
    _progression: IMusicProgression,
    beatMarker: BeatMarker,
    time: any
  ): Promise<ISequencerPlayParams> {
    this.beatsSinceLastNote++;

    let params: ISequencerPlayParams;

    if (!gateParams.triggered) {
      return this.playParams(key, scale, chord, beatMarker, time);
    }

    if (this.sequencerType() === "drone") {
      console.log("sequencerType Drone");
      params = this.droneParams(key, scale, chord, beatMarker, time);
    } else if (this.sequencerType() === "arpeggiator") {
      console.log(`sequencerType Arpeggiator ${beatMarker}`);
      params = this.arpParams(key, scale, chord, beatMarker, time);
    } else {
      params = this.playParams(key, scale, chord, beatMarker, time);
    }

    this.lastParams = params;
    return params;
  }
}

// setAwaitBuffers() {
//   if (this.awaitBuffers !== undefined) {
//     return;
//   }
//   if (this.sequencerType() === "drone") {
//     this.awaitBuffers = Promise.all([
//       this.bounceChord(
//         ["A#6", "F7", "A#7", "D#8", "F8"],
//         (params) => this.boundSynthesizer.play(params),
//         3,
//         3
//       ),
//       this.bounceChord(
//         ["D#5", "A#5", "C6", "G6", "A#6", "C9"],
//         (params) => this.boundSynthesizer.play(params),
//         3,
//         3
//       ),
//       this.bounceChord(
//         ["F6", "C6", "D#7", "A#7", "C8"],
//         (params) => this.boundSynthesizer.play(params),
//         3,
//         3
//       ),
//       this.bounceChord(
//         ["A#5", "D#6", "G6", "C7", "D#7", "G8"],
//         (params) => this.boundSynthesizer.play(params),
//         3,
//         3
//       ),
//     ]);
//   }
// }

// return [
//   {
//     name: "TriggerSet",
//     field: "chosenTriggerParameterSet",
//     fieldType: "arraySelector",
//     fieldOptions: {
//       options: [0, 1, 2, 3, 4],
//       current: this.chosenTriggerParameterSet,
//     },
//   },
//   {
//     name: "Drone Length",
//     field: "droneLength",
//     fieldType: "slider",
//     fieldOptions: {
//       options: [3, 4, 5, 6, 7, 8],
//       current: this.droneLength,
//     },
//   },
//   {
//     name: "Drone Tail",
//     field: "droneTail",
//     fieldType: "slider",
//     fieldOptions: {
//       options: [3, 4, 5, 6, 7, 8],
//       current: this.droneTail,
//     },
//   },
//   {
//     name: "Drone Spacing High",
//     field: "droneSpacingHigh",
//     fieldType: "slider",
//     fieldOptions: {
//       options: [3, 4, 5, 6, 7, 8],
//       current: this.droneTail,
//     },
//   },
//   {
//     name: "Drone Spacing Low",
//     field: "droneSpacingLow",
//     fieldType: "slider",
//     fieldOptions: {
//       options: [3, 4, 5, 6, 7, 8],
//       current: this.droneTail,
//     },
//   }
// ];
