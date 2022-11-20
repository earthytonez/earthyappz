import SequencerGate, { ISequencerGate } from "../SequencerGate";

import PlayEveryXBase from "./Base";

/*
 * Play Every X Step List works off of a list of gates and a length of rhythm.
 * So if [1, 5, 7] is returned and they rhythm_length is 8, Play Every X Step List
 * Will play every 1st, 5th, and 7th note.
 */
export default class PlayEveryXStepList extends PlayEveryXBase {
  gate(beatMarker: number): ISequencerGate {
    let stepCount = beatMarker % this.rhythm_length;

    return new SequencerGate(
      this.triggerParameters?.stepList?.includes(stepCount),
      this.stepGateArray[this.gateToPlay(stepCount)]! / 10
    );
  }
}
