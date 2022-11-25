import { makeObservable, action, computed, observable } from "mobx";

// import GateSequencerType from "./GateSequencerType";

import GateSequencerDefinition from "./GateSequencerLoader/GateSequencerDefinition";
import GateSequencerType from "./GateSequencerType";
import { PlayEveryXFactory } from "./GateSequencerRunner/PlayEveryX";
import RandomGate from "./GateSequencerRunner/Random/RandomGate";
import EuclideanRunner from "./GateSequencerRunner/Euclidean";

import { BeatMarker } from "../MusicFeatures/BeatMarker";

import GateTrigger, {
  IGateTriggerParameters,
} from "./GateSequencerLoader/GateTrigger";
import GateLengths from "./GateSequencerLoader/GateLengths";
import VolumeToPlay from "./GateSequencerLoader/VolumeToPlay";

import { IArrangementPlayAttributes } from "../Arranger/IArrangementPlayAttributes";
import { IGatePlayAttributes } from "./IGatePlayAttributes";
import BeatFeatures from "stores/Track/BeatFeatures";

import { Duration, DEFAULT_DURATION } from "./IGatePlayAttributes";
import { debug } from "../../Util/logger";

class UndefinedRunnerError extends Error {
  constructor(runnerName: string) {
    super(`Undefined Runner: ${runnerName}`);
  }
}

export default class GateSequencer extends GateSequencerType {
  slug: string;

  euclideanRunner?: EuclideanRunner;
  playEveryXRunner?: PlayEveryXFactory;
  randomGateTriggerRunner?: RandomGate;

  /*
   * A parameter set determines when a sequence is triggered.
   * There can be multiple parameter sets for a given sequencer, in order to have
   * selectable variation.  For example, the 3 four can play the second beat
   * on the 2 or the three (1-2-4, 1-3-4).
   */
  chosenGateTriggerParameterSet: number = 0;
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
  gateLengths: GateLengths = new GateLengths();
  parameters?: string[];
  volumeToPlay: VolumeToPlay = new VolumeToPlay();
  rhythm_length?: number = undefined;
  totalLength: number;
  gateTrigger: GateTrigger = new GateTrigger();

  musicSectionLength: number = 64;

  public stepSequencerGrid: number[] = [];
  public stepIsGateTriggered: number = -1;
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

    this.gateTrigger = gateSequencerDefinition.gateTrigger;
    this.gateLengths = gateSequencerDefinition.gateLengths;
    this.volumeToPlay = gateSequencerDefinition.volumeToPlay;
    this.totalLength = gateSequencerDefinition.totalLength;

    this.initializeRunners(gateSequencerDefinition.rhythm_length!);

    makeObservable(this, {
      setStepIsGateTriggered: action,
      stepSequencerGrid: observable,
      stepIsGateTriggered: observable,
      changeParameter: action.bound,
      editParameters: computed,
      play: action,
      resetBeatsSinceLastNote: action.bound,
      toJSON: action.bound,
      randomGateTrigger: action.bound,
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

  /*
   * This sets the step that is currently triggered for the step visualizer.
   */
  setStepIsGateTriggered(n: number) {
    this.stepIsGateTriggered = n;
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
    this.playEveryXRunner = new PlayEveryXFactory(rhythm_length);
    this.randomGateTriggerRunner = new RandomGate(rhythm_length);
    this.euclideanRunner = new EuclideanRunner(rhythm_length);
  }

  /*
   * This is a simple step sequencer, that enables you to sequence based on either a list or a mathematical formula.
   * This is only for triggers/gates it does not determine what note to play.
   */
  randomGateTrigger(
    triggerParameters: IGateTriggerParameters
  ): IGatePlayAttributes {
    if (!this.randomGateTriggerRunner) {
      throw new UndefinedRunnerError("random trigger");
    }
    try {
      let triggerData = this.randomGateTriggerRunner.isGateTriggered(
        this.beatsSinceLastNote,
        this.resetBeatsSinceLastNote,
        triggerParameters,
        this._parameters
      );

      let duration = this.randomGateTriggerRunner.duration(this._parameters);

      return {
        ...triggerData,
        duration: new Duration(duration),
      };
    } catch (err) {
      console.error(err, triggerParameters);
    }

    return this.noGateTrigger();
  }

  euclideanGateTrigger(
    beatMarker: number,
    triggerParameters: IGateTriggerParameters
  ): IGatePlayAttributes {
    if (!this.euclideanRunner) {
      throw new UndefinedRunnerError("random trigger");
    }

    try {
      let triggerData = this.euclideanRunner.isGateTriggered(
        beatMarker,
        this._parameters
      );

      let duration = this.euclideanRunner.duration(this._parameters);

      debug("GateSequencer", `duration: ${duration}. trigger: `, triggerData);

      return {
        ...triggerData,
        duration: new Duration(duration),
      };
    } catch (err) {
      console.error(err, triggerParameters);
    }

    return this.noGateTrigger();
  }

  noGateTrigger() {
    return {
      triggered: false,
      stepInterval: this._parameters?.get("step_interval")?.val() || 4,
      duration: new Duration(0),
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
    if (!this.gateTrigger) {
      return this.noGateTrigger();
    }

    let parameters =
      this.gateTrigger.parameterSets[this.chosenGateTriggerParameterSet];
    if (parameters) {
      parameters.gateList =
        this.gateLengths?.parameterSets[this.chosenGateParameterSet]?.gateList;
    }

    if (!parameters) {
      throw new Error(
        `parameters for random sequencer ${this.chosenGateTriggerParameterSet} must be defined`
      );
    }

    switch (this.gateTrigger.type) {
      case "random":
        return this.randomGateTrigger(parameters);
      case "euclidean":
        return this.euclideanGateTrigger(beatMarker.num, parameters);
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
          duration: new Duration(DEFAULT_DURATION),
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
    beatFeatures: BeatFeatures
  ): Promise<IGatePlayAttributes> {
    let beatMarker = beatFeatures.beatMarker;
    let time = beatFeatures.time;

    console.log(
      `Placeholder for arrangementAttributes: ${arrangementAttributes} ${beatMarker.num}`
    );

    this.beatsSinceLastNote++;

    let gatePlayAttributes = this.gateAndNote(beatMarker, time);
    if (gatePlayAttributes.triggered) {
      this.setStepIsGateTriggered(this.measureBeat(beatMarker));
    }
    return gatePlayAttributes;
  }
}
