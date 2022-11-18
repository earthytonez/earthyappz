import * as Tone from "tone";

export default interface IPlayAttributes {
  volume: number; // +/- 100
  note?: Tone.FrequencyClass;
  notes?: Array<Tone.FrequencyClass>;
  lengthSeconds?: number;
  tailSeconds?: number;
  time: any;
}
