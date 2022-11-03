import * as Tone from "tone";

import DoubleLengthArp from "./DoubleLengthArp.js";

export default class TopLineUpArp extends DoubleLengthArp {
  note(step: number) {
    // length = length * 2 - 2;

    let chordNotes: string[] = [];
    this._chordNotes.forEach((_chordNote: string, i: number) => {
      if (i < this._chordNotes.length) {
        if (this._chordNotes[0] && this._chordNotes[i]) {
          chordNotes.push(this._chordNotes[this._chordNotes.length - 1]!);
          chordNotes.push(this._chordNotes[i]!);
        }
      }
    });

    let note = chordNotes[step];

    if (note === undefined) {
      throw "Note downUpArpeggiatoris undefined";
    }

    return note;
  }

  octave(_step: number) {
    return this._octave;
  }

  getNote(step: number) {
    return Tone.Frequency(`${this.note(step)}${this.octave(step)}`);
  }
}
