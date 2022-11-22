import ArpeggiatorIntervalCalculator from "./IntervalToPlayRunner/ArpeggiatorIntervalCalculator";
import ListIntervalCalculator from "./IntervalToPlayRunner/ListIntervalCalculator";
import ScaleIntervalCalculator from "./IntervalToPlayRunner/ScaleIntervalCalculator";

import * as Tone from "tone";

import { IMusicChord, IMusicKey, IMusicScale } from "Types";

import IntervalCalculator from "./IntervalToPlayRunner/IntervalCalculator";
import IntervalToPlayDefinition from "../SequencerLoader/IntervalToPlayDefinition";
/*
 * IntervalToPlay parses an array or a type of an interval to determine what notes to play
 * in a sequence.  You can think of this as a melody, though often it is for something
 * simpler than a lead melody.
 *
 * There are two main types of intervals,
 *
 * list: A simple list of intervals, which can have lenghts associated with them so you don't change every beat.
 * arpeggiator: Take a chord and play it's intervals.
 */
export default class IntervalToPlay {
  intervalLength: number = 1;
  intervalCalculator?: IntervalCalculator;

  allOctavesScale(scaleDef: any) {
    return this.intervalCalculator?.allOctavesScale(scaleDef);
  }

  getCurrentIntervalFromScale(
    scale: IMusicScale,
    key: IMusicKey,
    startNote: string,
    lastNote: string
  ): number {
    return this.intervalCalculator?.getCurrentIntervalFromScale(
      scale,
      key,
      startNote,
      lastNote
    )!;
  }

  getScaleInterval(
    scale: IMusicScale,
    key: IMusicKey,
    interval: number,
    octave: number
  ): Tone.FrequencyClass<number> {
    return this.intervalCalculator?.getScaleInterval(
      scale,
      key,
      interval,
      octave
    )!;
  }

  get(
    measureBeat: number,
    chord: IMusicChord,
    key: IMusicKey,
    scale: IMusicScale,
    startNote: string,
    octave: number,
    parameters: any
  ): Tone.FrequencyClass<number> {
    return this.intervalCalculator?.calculate({
      measureBeat,
      chord,
      key,
      scale,
      startNote,
      octave,
      parameters,
    })!;
  }

  get intervalType(): "scale" | "list" | "arpeggiator" | undefined {
    return this.intervalCalculator?.intervalType;
  }

  constructor(intervalToPlayDefinition: IntervalToPlayDefinition) {
    switch (intervalToPlayDefinition.intervalType) {
      case "arpeggiator":
        this.intervalCalculator = new ArpeggiatorIntervalCalculator(
          this.intervalLength,
          intervalToPlayDefinition.intervalTypeList[0]!
        );
        break;
      case "list":
        this.intervalCalculator = new ListIntervalCalculator(
          this.intervalLength,
          intervalToPlayDefinition.intervalList!
        );
        break;
      default:
        this.intervalCalculator = new ScaleIntervalCalculator(
          this.intervalLength
        );
    }
  }
}
