import IntervalToPlay from "../IntervalToPlay";
import * as Tone from "tone";

import ToneFeatures from "Types/ToneFeatures";

import { debug } from "../../../../Util/logger";

export default class IntervalNoteToPlayRunner {
  constructor(
    private toneFeatures: ToneFeatures,
    private intervalToPlay: IntervalToPlay,
    private parameters: any
  ) {}

  getNote(measureBeat: number): Tone.FrequencyClass<number> {
    let octaveToPlay = 4;
    console.log("NOTE_TO_PLAY", octaveToPlay, this.toneFeatures.octaves);
    if (this.toneFeatures.octaves[0]) {
      octaveToPlay = this.toneFeatures.octaves[0];
    }

    let startNote = `${this.toneFeatures.key}${octaveToPlay}`;

    debug(
      "NOTE_TO_PLAY",
      `Getting notes from ${measureBeat} ${this.toneFeatures.chord.name} chord.`
    );

    let intervalFrequency = this.intervalToPlay.get(
      measureBeat,
      this.toneFeatures.chord,
      this.toneFeatures.key,
      this.toneFeatures.scale,
      startNote,
      octaveToPlay,
      this.parameters
    );

    debug(
      "NOTE_TO_PLAY",
      `Returning intervalFrequency ${intervalFrequency}`,
      intervalFrequency
    );
    return intervalFrequency;
  }
}
