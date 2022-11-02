import BaseArp, { IArpeggiatorParams } from "./BaseArp";

export default class DoubleLengthArp extends BaseArp {
  measureBeat: number;
  stepInterval: number = 4;
  chordLength: number;

  get length() {
    return this.chordLength * 2;
  }

  get step() {
    return (this.measureBeat / this.stepInterval) % this.length;
  }

  setStepInterval(parameters: any) {
    if (parameters.has("stepinterval")) {
      this.stepInterval = parameters.get("stepinterval").val;
    }
  }

  constructor(params: IArpeggiatorParams, chordNotes: string[]) {
    super(params, chordNotes);

    this.chordLength = params.chord.intervals.length;
    this.measureBeat = params.measureBeat;

    // this.setStepInterval(parameters);
  }
}
