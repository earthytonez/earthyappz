import * as Tone from "tone";

export default interface ITriggerAttackReleaseParams {
  frequency: Tone.FrequencyClass;
  duration: Tone.TimeClass | Tone.TimeClass[];
  time: Tone.TimeClass;
  velocity: number; // Between 0 and 1
}
