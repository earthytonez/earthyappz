import { ORDERED_NOTE_NUMBERS } from "@earthytonez/earthyutilz";
import BaseArp from "./BaseArp.js";

import * as Tone from "tone";

export default class UpArp extends BaseArp {
  effectiveStep(step: number): number {
    if (step > this._chordNotes.length - 1) {
      return step - this._chordNotes.length;
    }
    return step;
  }

  note(step: number): string {
    let noteStep = this.effectiveStep(step);
    let note = this._chordNotes[noteStep];

    if (note === undefined) {
      throw `Note up is undefined -- ${noteStep} -- ${this._chordNotes}`;
    }

    if (note == "B#") {
      return "C";
    }
    if (note == "E#") {
      return "F";
    }

    return note;
  }

  octave(step: number): number {
    let incrOctave = false;
    for (let i = 0; i < step; i++) {
      if (
        ORDERED_NOTE_NUMBERS[this._chordNotes[i]!]! >=
        ORDERED_NOTE_NUMBERS[this.note(step)!]!
      ) {
        incrOctave = true;
      }
    }

    if (incrOctave) {
      return this._octave + 1;
    }

    return this._octave;
  }

  // getNote accepts step as it is applicable at runtime.
  getNote(step: number) {
    let notePosition = this.stepInLength(step);

    return Tone.Frequency(
      `${this.note(notePosition)}${this.octave(notePosition)}`
    );
  }
}
