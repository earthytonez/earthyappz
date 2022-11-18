type IOscillatorType =
  | "fmsine1"
  | "sine1"
  | "sine"
  | "square"
  | "triangle"
  | "sawtooth";

export const OSCILLATOR_TYPES: IOscillatorType[] = [
  "sine",
  "square",
  "triangle",
  "sawtooth",
];

export type IFMOscillatorType = "fmsine1";
export default IOscillatorType;
