import BaseArp from "./BaseArp";

export default class RandomArp extends BaseArp {
  note(_step: number): string {
    let retVal =
      this._chordNotes[Math.floor(Math.random() * this._chordNotes.length)];

    if (retVal == undefined) {
      return "C";
    }

    return retVal;
  }
}
