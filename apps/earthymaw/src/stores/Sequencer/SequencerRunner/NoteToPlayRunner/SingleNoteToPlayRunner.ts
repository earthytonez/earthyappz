import * as Tone from "tone";

export default class SingleNoteToPlayRunner {
  constructor(private note: Tone.FrequencyClass<number> | undefined) {}

  getNote(_measureBeat: number): Tone.FrequencyClass<number> {
    if (this.note) {
      return Tone.Frequency(this.note);
    }
    return Tone.Frequency("C4");
  }
}
