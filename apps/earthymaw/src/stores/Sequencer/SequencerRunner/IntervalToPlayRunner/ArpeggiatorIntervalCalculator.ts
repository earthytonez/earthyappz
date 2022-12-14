import { debug } from "../../../../Util/logger";

import * as Tone from "tone";

import { Chord } from "@tonaljs/tonal";

import IntervalCalculator, {
  IIntervalCalculatorParams,
} from "./IntervalCalculator";

import { Arpeggiator } from "@earthytonez/sequencers";

export default class ArpeggiatorIntervalCalculator extends IntervalCalculator {
  intervalType: "arpeggiator" = "arpeggiator";

  calculate(params: IIntervalCalculatorParams): Tone.FrequencyClass<number> {
    debug(
      "ARPEGGIATOR_INTERVAL_CALCULATOR",
      `this.intervalType:${params.measureBeat} |${
        this.intervalType
      }|${JSON.stringify(params.chord)}`
    );

    this.intervalArp = params.parameters.get("arpeggiator_type").val;

    let chordDef = Chord.getChord(params.chord.name, params.key);

    let stepInterval = 4;
    if (params.parameters.has("step_interval")) {
      stepInterval = params.parameters.get("step_interval").val;
    }

    let length: number = 0;
    let step: number = 0;

    length = params.chord.intervals.length;
    step = Math.ceil(params.measureBeat / stepInterval);

    debug(
      "INTERVAL_TO_PLAY",
      `Getting interval for intervalType Arpeggiator ${this.intervalArp} ${params.chord} -- ${step} - ${params.measureBeat} - ${length} ${chordDef.notes[step]}`
    );

    let arpeggiator = new Arpeggiator(this.intervalArp, params);
    return arpeggiator.noteForStep(step);
  }

  constructor(intervalLength: number, private intervalArp: string) {
    super(intervalLength);
  }
}
