import { debug } from "../../../../Util/logger";
import SequencerGate, { ISequencerGate } from "../SequencerGate";

import PlayEveryXBase from "./Base";
import PlayEveryXFill from "./PlayEveryXFill";

export default class PlayEveryXStepInterval extends PlayEveryXBase {
  gate(beatMarker: number): ISequencerGate {
    let stepCount = beatMarker % this.stepInterval;
    let arrayStep = Math.floor((beatMarker % 64) / this.stepGateArray.length);

    if (
      this.userParameters.has("selected_fill") &&
      this.userParameters.get("selected_fill") !== 0 &&
      this.triggerParameters.fillStart &&
      this.triggerParameters.fillEnd &&
      this.triggerParameters.fillList
    ) {
      let playEveryXFill = new PlayEveryXFill({
        beatMarker: beatMarker,
        fillStart: this.triggerParameters.fillStart,
        fillEnd: this.triggerParameters.fillEnd,
        fillList: this.triggerParameters.fillList,
        selectedFill: this.userParameters.get("selected_fill").val,
      });

      if (playEveryXFill.try()) {
        let fill = playEveryXFill.fill();
        return fill;
      }
    }

    let duration = this.stepGateArray[arrayStep];
    console.log(this.stepGateArray);
    console.log(arrayStep);
    debug(
      "PlayEveryXStepInterval",
      `beatMarker=${beatMarker} stepInterval=${this.stepInterval} stepGateArray=${this.stepGateArray} arrayStep=${arrayStep} duration=${duration}`
    );
    if (stepCount === this.triggerParameters.on) {
      return new SequencerGate(true, duration);
    }

    return new SequencerGate(false);
  }
}
