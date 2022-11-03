import * as Tone from "tone";
import DoubleLengthArp from "./DoubleLengthArp.js";

import { IArpeggiatorParams } from "./BaseArp.js";

export default class DownUpIncArp extends DoubleLengthArp {
  note: any;

  _chordNotes: string[];

  constructor(params: IArpeggiatorParams, chordNotes: string[]) {
    super(params, chordNotes);

    this._chordNotes = chordNotes;
  }

  chordNotes(): string[] {
    return [...this._chordNotes].reverse().concat(this._chordNotes);
  }

  getNote(step: number) {
    let note = this.chordNotes()[this.step];
    if (note === undefined) {
      throw "Note upDownArpeggiator is undefined";
    }
    return Tone.Frequency(`${note}${this.octave(step)}`);
  }
}
