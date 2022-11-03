import DoubleLengthArp from "./DoubleLengthArp.js";

export default class BottomLineUpArp extends DoubleLengthArp {
  note(step: number) {
    // length = length * 2 - 2;
    // step = (params.measureBeat / stepInterval) % length;
    let chordNotes: string[] = [];
    this._chordNotes.forEach((_chordNote: string, i: number) => {
      if (i > 0) {
        if (this._chordNotes[0] && this._chordNotes[i]) {
          chordNotes.push(this._chordNotes[0]!);
          chordNotes.push(this._chordNotes[i]!);
        }
      }
    });

    let note = chordNotes[step];
    if (note === undefined) {
      throw "Note bottomLineUpArpeggiator undefined";
    }

    return note;
  }
}
