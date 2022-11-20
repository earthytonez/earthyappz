import * as Tone from "tone";

import ToneFeatures from "Types/ToneFeatures";

export default class RandomNoteToPlayRunner {
  constructor(private toneFeatures: ToneFeatures) {}

  getNote(_measureBeat: number): Tone.FrequencyClass<number> {
    let octave =
      this.toneFeatures.octaves[
        Math.floor(Math.random() * this.toneFeatures.octaves.length)
      ];
    let note =
      this.toneFeatures.scaleNotes[
        Math.floor(Math.random() * this.toneFeatures.scaleNotes.length)
      ];

    return Tone.Frequency(`${note}${octave}`);
  }
}
