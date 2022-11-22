import { IMusicChord, IMusicKey, IMusicScale } from "@earthytonez/earthytypez";
import IMusicProgression from "./IMusicProgression";
import TrackOctaves from "../stores/Track/TrackOctaves";

import { debug } from "../Util/logger";

import { Scale } from "@tonaljs/tonal";

export default class ToneFeatures {
  constructor(
    private _key: IMusicKey,
    private _scale: IMusicScale,
    private _chord: IMusicChord,
    private _progression: IMusicProgression,
    private _octaves: Octaves
  ) {}

  get scaleName() {
    return `${this._key} ${this._scale.name}`;
  }

  get scaleNotes() {
    debug("NOTE_TO_PLAY", `Getting notes from ${this.scaleName} scale.`);
    return Scale.get(this.scaleName).notes;
  }

  getOctave() {
    let octaveToPlay = 4;
    if (this.octaves[0]) {
      octaveToPlay = this.octaves[0];
    }
    return octaveToPlay;
  }

  get key() {
    return this._key;
  }
  get scale() {
    return this._scale;
  }
  get chord() {
    return this._chord;
  }
  get progression() {
    return this._progression;
  }
  get octaves() {
    console.log(this._octaves);
    return this._octaves.val();
  }
}
