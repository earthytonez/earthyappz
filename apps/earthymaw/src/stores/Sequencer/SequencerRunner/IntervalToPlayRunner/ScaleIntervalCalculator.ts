import * as Tone from "tone";

import IntervalCalculator, {
  IIntervalCalculatorParams,
} from "./IntervalCalculator";

export default class ScaleIntervalCalculator extends IntervalCalculator {
  intervalType: "scale" = "scale";

  calculate(params: IIntervalCalculatorParams): Tone.FrequencyClass<number> {
    console.log(params);
    return Tone.Frequency("C2");
  }

  constructor(intervalLength: number) {
    super(intervalLength);
  }
}
