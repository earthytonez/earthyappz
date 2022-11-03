import DoubleLengthArp from "./DoubleLengthArp.js";

export default class DownUpArp extends DoubleLengthArp {
  chordNotes(): string[] {
    return [...this._chordNotes]
      .reverse()
      .slice(0, -1)
      .concat(this._chordNotes);
  }
}
