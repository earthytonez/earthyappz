import * as Tone from "tone";

export interface ISequencerPlayAttributes {
  volume: number; // +/- 100
  note?: Tone.FrequencyClass;
  notes?: Array<Tone.FrequencyClass>;
  lengthSeconds?: number;
  tailSeconds?: number;
  time: any;
  stop?: boolean;
}

export type NoteInterval = number;
