import { IMusicChord, IMusicKey, IMusicScale } from "@earthytonez/earthytypez";

import * as Tone from "tone";

export interface IArpeggiatorParams {
  measureBeat: number;
  chord: IMusicChord;
  key: IMusicKey;
  scale: IMusicScale;

  // This will determine the Arpeggiator speed.  If there are 16 steps in a sequencer and stepInterval is 4, the arpeggiator will play every 4 beats.
  stepInterval?: number;

  // Usually the Root Note of the Chord
  startNote: string;
  octave: number;
  parameters: any;
}

export default class BaseArp {
  protected _length: number;
  protected _octave: number;
  public arpType: string = "base";

  constructor(params: IArpeggiatorParams, protected _chordNotes: string[]) {
    this._length = params.chord.intervals.length;
    this._octave = params.octave;
  }

  stepInLength(step: number): number {
    if (step >= this._length) {
      return this.stepInLength(step - this._length);
    }
    return step;
  }

  octave(_step: number) {
    return this._octave;
  }

  chordNotes() {
    return this._chordNotes;
  }

  note(step: number): string {
    let retVal = this.chordNotes()[step];

    if (retVal === undefined) {
      console.error(`Note for ${this.arpType} is undefined`);
      return "C4";
    }

    return retVal;
  }

  getNote(step: number): Tone.FrequencyClass {
    return Tone.Frequency(`${this.note(step)}${this.octave(step)}`);
  }
}
