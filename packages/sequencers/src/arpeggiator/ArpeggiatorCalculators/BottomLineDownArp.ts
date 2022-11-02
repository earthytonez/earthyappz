import DoubleLengthArp from "./DoubleLengthArp";

export default class BottomLineUpArp extends DoubleLengthArp {
  public arpType: string = "bottom-line-down";

  note(step: number) {
    // length = length * 2 - 2;
    // step = (params.measureBeat / stepInterval) % length;
    let chordNotes: string[] = [];
    this._chordNotes.forEach((_chordNote: string, i: number) => {
      if (i < this._chordNotes.length) {
        if (this._chordNotes[0] && this._chordNotes[i]) {
          chordNotes.push(this._chordNotes[0]!);
          chordNotes.push(this._chordNotes[this._chordNotes.length - i - 1]!);
        }
      }
    });

    let note = chordNotes[step];
    if (note === undefined) {
      throw "Note bottomLineDownArpeggiator undefined";
    }

    return note;
  }
}
