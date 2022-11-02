import { NOTE_NUMBERS } from "../../../../../config/constants";
import { IIntervalCalculatorParams } from "../IntervalCalculator";

import * as Tone from "tone";

export default class UpArp {
  _chordNotes: string[];
  _octave: number;

  constructor(params: IIntervalCalculatorParams, chordNotes: string[]) {
    this._octave = params.octave;
    this._chordNotes = chordNotes;
  }

  note(step: number): string {
    let retVal = this._chordNotes[step];

    if (retVal === undefined) {
      throw "Note up is undefined";
    }

    if (retVal == "B#") {
      return "C";
    }
    if (retVal == "E#") {
      return "F";
    }

    return retVal;
  }

  octave(step: number): number {
    let incrOctave = false;
    for (let i = 0; i <= step; i++) {
      if (i == step) {
        continue;
      }
      if (
        NOTE_NUMBERS[this._chordNotes[i]!]! >= NOTE_NUMBERS[this.note(step)!]!
      ) {
        incrOctave = true;
      }
    }

    if (incrOctave) {
      return this._octave + 1;
    }

    return this._octave;
  }

  getTone(step: number) {
    console.log(`${this.note(step)}${this.octave(step)}`);
    return Tone.Frequency(`${this.note(step)}${this.octave(step)}`);
  }
}
