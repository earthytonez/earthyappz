import { e, PI } from "./constants.js";

export default class IrrationalNumbers {
  num: string;

  constructor(num: string) {
    if (num == "PI") {
      this.num = PI;
    }
    if (num == "e") {
      this.num = e;
    }
    this.num = PI;

    this.num = this.num.replace(".", "");
  }

  note(beatMarker: number): number {
    let index = beatMarker % this.num.length;
    return parseInt(this.num[index - 1] as string);
  }
}
