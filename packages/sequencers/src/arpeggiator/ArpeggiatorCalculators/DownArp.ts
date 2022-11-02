import * as Tone from "tone";

import BaseArp from "./BaseArp";

export default class DownArp extends BaseArp {
  public arpType: string = "down";

  note(step: number) {
    let retVal = this._chordNotes[this._chordNotes.length - step - 1];

    if (retVal == undefined) {
      throw "Note down is undefined";
    }

    return retVal;
  }

  octave(_step: number) {
    return this._octave;
  }

  getNote(step: number) {
    let notePosition = this.stepInLength(step);

    return Tone.Frequency(
      `${this.note(notePosition)}${this.octave(notePosition)}`
    );
  }
}
