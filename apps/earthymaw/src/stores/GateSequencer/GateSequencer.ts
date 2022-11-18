import { makeObservable, action, computed, observable } from "mobx";

// import GateSequencerType from "./GateSequencerType";

import GateSequencerDefinition from "./GateSequencerLoader/GateSequencerDefinition";
import GateSequencerType from "./GateSequencerType";
import PlayEveryX from "./GateSequencerRunner/PlayEveryX";
import RandomTrigger from "./GateSequencerRunner/RandomTrigger";
import Euclidean from "./GateSequencerRunner/Euclidean";

import { BeatMarker } from "../MusicFeatures/BeatMarker";

import { ITriggerParameters } from "./GateSequencerLoader/TriggerWhen";
import TriggerWhen from "./GateSequencerLoader/TriggerWhen";
import GateLengths from "./GateSequencerLoader/GateLengths";
import VolumeToPlay from "./GateSequencerLoader/VolumeToPlay";

import { IArrangementPlayAttributes } from "../Arranger/IArrangementPlayAttributes";
import { IGatePlayAttributes } from "./IGatePlayAttributes";

export default class GateSequencer extends GateSequencerType {
  slug: string;

  euclideanRunner?: Euclidean;
  playEveryXRunner?: PlayEveryX;
  randomTriggerRunner?: RandomTrigger;

  /*
   * A parameter set determines when a sequence is triggered.
   * There can be multiple parameter sets for a given sequencer, in order to have
   * selectable variation.  For example, the 3 four can play the second beat
   * on the 2 or the three (1-2-4, 1-3-4).
   */
  chosenTriggerParameterSet: number = 0;
  chosenGateParameterSet: number = 0;

  beatsSinceLastNote: number;

  machineType: string = "GateSequencer";
  type: string = "";
  x = 0;
  _loading: boolean = true;

  droneLength: number = 9;
  droneTail: number = 6;
  droneSpacingHigh: number = 3;
  droneSpacingLow: number = 2;

  /*
   * These variables are defined on the Track and come in through the constructor
   */

  lastParams: any;

  tags?: string[];
  description?: string = "";
  gateLengths: GateLengths = new GateLengths();
  parameters?: string[];
  volumeToPlay: VolumeToPlay = new VolumeToPlay();
  rhythm_length?: number = undefined;
  totalLength: number;
  triggerWhen: TriggerWhen = new TriggerWhen();

  musicSectionLength: number = 64;

  public stepSequencerGrid: number[] = [];
  public stepIsTriggered: number = -1;
  public _volume: number = -1;

  /* TODO: Deprecate and remove */
  minGate: number = 0;
  maxGate: number = 0;

  constructor(
    gateSequencerDefinition: GateSequencerDefinition,
    musicSectionLength: number
  ) {
    super(gateSequencerDefinition);

    this.musicSectionLength = musicSectionLength;

    this.beatsSinceLastNote = 0;
    this.name = gateSequencerDefinition.name!;

    this.slug = gateSequencerDefinition.slug!;
    this.type = gateSequencerDefinition.type!;

    this.triggerWhen = gateSequencerDefinition.triggerWhen;
    this.gateLengths = gateSequencerDefinition.gateLengths;
    this.volumeToPlay = gateSequencerDefinition.volumeToPlay;
    this.totalLength = gateSequencerDefinition.totalLength;

    this.initializeRunners(gateSequencerDefinition.rhythm_length!);

    makeObservable(this, {
      setStepIsTriggered: action,
      stepSequencerGrid: observable,
      stepIsTriggered: observable,
      changeParameter: action.bound,
      editParameters: computed,
      play: action,
      resetBeatsSinceLastNote: action.bound,
      toJSON: action.bound,
      randomTrigger: action.bound,
    });
  }

  /**
   * Description placeholder
   * @date 11/6/2022 - 8:01:01 PM
   *
   * This should be moved to beatMarker
   *
   * @param {BeatMarker} beatMarker
   * @returns {number}
   */
  measureBeat(beatMarker: BeatMarker): number {
    return beatMarker.measureBeat(this.musicSectionLength);
  }

  setLoading(loading: boolean) {
    this._loading = loading;
  }

  setStepIsTriggered(n: number) {
    console.log(
      `StepSequencerAnimation (GateSequencer): ${this.stepIsTriggered} ${this.totalLength}`
    );
    this.stepIsTriggered = n;
  }

  get loading() {
    return this._loading;
  }

  resetBeatsSinceLastNote() {
    this.beatsSinceLastNote = 0;
  }

  toJSON() {
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

  /**
   * loadRunners prepares
   * @date 11/6/2022 - 8:05:40 PM
   *
   * @private
   * @async
   * @param {number} rhythm_length
   * @returns {*}
   */
  private async initializeRunners(rhythm_length: number) {
    this.playEveryXRunner = new PlayEveryX(rhythm_length);
    this.randomTriggerRunner = new RandomTrigger(rhythm_length);
    this.euclideanRunner = new Euclidean(rhythm_length);
  }

  /*
   * This is a simple step sequencer, that enables you to sequence based on either a list or a mathematical formula.
   * This is only for triggers/gates it does not determine what note to play.
   */
  randomTrigger(
    beatMarker: number,
    parameters: ITriggerParameters
  ): IGatePlayAttributes {
    try {
      return this.randomTriggerRunner!.run(
        beatMarker,
        this.beatsSinceLastNote,
        this.resetBeatsSinceLastNote,
        parameters,
        this._parameters
      );
    } catch (err) {
      console.error(err, parameters);
    }

    return this.noTrigger();
  }

  noTrigger() {
    return {
      triggered: false,
      length: 1,
      stepInterval: this._parameters?.get("step_interval")?.val() || 4,
    };
  }

  /*
   * For a given step, this determines if the the step should trigger the synthesizer.  This will mainly call different
   * kinds of sequencers, such as a step sequencer to determine if it should play.
   *
   * Step Sequencer
   * Euclidean Sequencer
   * Drone Sequencer?
   */
  gateAndNote(beatMarker: BeatMarker, time: number): IGatePlayAttributes {
    if (!this.triggerWhen) {
      return this.noTrigger();
    }

    let parameters =
      this.triggerWhen.parameterSets[this.chosenTriggerParameterSet];
    if (parameters) {
      parameters.gateList =
        this.gateLengths?.parameterSets[this.chosenGateParameterSet]?.gateList;
    }

    if (!parameters) {
      throw new Error(
        `parameters for random sequencer ${this.chosenTriggerParameterSet} must be defined`
      );
    }

    switch (this.triggerWhen.type) {
      case "random":
        return this.randomTrigger(beatMarker.num, parameters);
      case "everyX":
        return this.playEveryXRunner!.run(
          beatMarker.num,
          parameters,
          this._parameters
        );
      default:
        return {
          volume: this.volume(beatMarker),
          time: time,
          triggered: true,
          stepInterval: this._parameters.get("step_interval")?.val(),
        };
    }
  }

  /* 
    This triggers the volume sequencer.  Some sequencers may have steps with different volume levels.
  */
  volume(beatMarker: BeatMarker): number {
    return 0 * beatMarker.num;
  }

  sequencerType(): string {
    return this.type;
  }

  /* This action is triggered externall to possibly play a sequencer */
  async play(
    arrangementAttributes: IArrangementPlayAttributes,
    beatMarker: BeatMarker,
    time: any
  ): Promise<IGatePlayAttributes> {
    console.log(
      `Placeholder for arrangementAttributes: ${arrangementAttributes} ${beatMarker.num}`
    );

    this.beatsSinceLastNote++;

    let gatePlayAttributes = this.gateAndNote(beatMarker, time);
    if (gatePlayAttributes.triggered) {
      this.setStepIsTriggered(this.measureBeat(beatMarker));
    }
    return gatePlayAttributes;
  }
}
