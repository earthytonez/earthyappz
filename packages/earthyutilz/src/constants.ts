export interface IHash<T> {
  [details: string]: T;
}

export const ORDERED_NOTE_NUMBERS: IHash<number> = {
  Ab: 0,
  A: 1,
  "A#": 2,
  Bb: 10,
  B: 11,
  "B#": 12,
  Cb: 20,
  C: 21,
  "C#": 22,
  Db: 30,
  D: 31,
  "D#": 32,
  Eb: 40,
  E: 41,
  "E#": 42,
  Fb: 50,
  F: 51,
  "F#": 52,
  Gb: 60,
  G: 61,
  "G#": 62,
};
