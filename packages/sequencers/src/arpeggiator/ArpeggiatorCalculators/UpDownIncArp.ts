import DoubleLengthArp from "./DoubleLengthArp.js";

export default class UpDownIncArp extends DoubleLengthArp {
  chordNotes(): string[] {
    return this._chordNotes.concat([...this._chordNotes].reverse());
  }
}
