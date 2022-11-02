import DoubleLengthArp from "./DoubleLengthArp";

export default class TopLineDownArp extends DoubleLengthArp {
  note(step: number) {
    let arpSequence: string[] = [];
    this._chordNotes.forEach((_chordNote: string, i: number) => {
      if (i > 0) {
        if (this._chordNotes[0] && this._chordNotes[i]) {
          arpSequence.push(this._chordNotes[this._chordNotes.length - 1]!);
          arpSequence.push(this._chordNotes[this._chordNotes.length - i - 1]!);
        }
      }
    });

    let note = arpSequence[step];

    if (note === undefined) {
      throw "Note downUpArpeggiatoris undefined";
    }

    return note;
  }
}
