import * as Tone from "tone";
import DoubleLengthArp from "./DoubleLengthArp";

export default class UpDownArp extends DoubleLengthArp {
  arpType: string = "up-down";

  chordNotes(): string[] {
    return this._chordNotes.concat(
      [...this._chordNotes.slice(0, -1)].reverse()
    );
  }

  getNote(step: number) {
    return Tone.Frequency(`${this.note(step)}${this.octave(step)}`);
  }
}
