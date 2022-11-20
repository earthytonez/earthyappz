import SequencerGate, { ISequencerGate } from "../SequencerGate";

interface IPlayEveryXFillParams {
  beatMarker: number;
  fillStart: number;
  fillEnd: number;
  fillList: number[][];
  selectedFill: number;
}

export default class PlayEveryXFill {
  beatMarker: number;
  fillStart: number;
  fillEnd: number;
  fillList: number[][];
  selectedFill: number;
  fillStep: number = 0;
  constructor(params: IPlayEveryXFillParams) {
    this.beatMarker = params.beatMarker;
    this.fillStart = params.fillStart;
    this.fillEnd = params.fillEnd;
    this.fillList = params.fillList;
    this.selectedFill = params.selectedFill;
  }

  private get fillArray(): number[] {
    return this.fillList[this.selectedFill]!;
  }

  private get triggerFill() {
    return this.fillArray.includes(this.fillStep - this.fillStart);
  }

  fill(): ISequencerGate {
    if (this.fillArray && this.triggerFill) {
      return new SequencerGate(true);
    } else {
      return new SequencerGate(false);
    }
  }

  try(): boolean {
    if (this.fillEnd) {
      this.fillStep = this.beatMarker % this.fillEnd;
    }

    let decision =
      this.fillStep >= this.fillStart && this.fillStep <= this.fillEnd;

    return decision;
  }
}
