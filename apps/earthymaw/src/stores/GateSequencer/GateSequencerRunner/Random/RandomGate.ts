import BaseParameter from "stores/Parameter/Base";
import { IGateTriggerParameters } from "../../GateSequencerLoader/GateTrigger";
import SequencerGate from "../SequencerGate";
/*
 * Play Every X is used to calculate whether or not a trigger should occur, usually
 * playing every x notes.
 */
export default class RandomGateTrigger implements ISequencerRunner {
  rhythm_length: number;

  generateRandom(min: number, max: number) {
    // find diff
    let difference = max - min;

    // generate random number
    let rand = Math.random();

    // multiply with difference
    rand = Math.floor(rand * difference);

    // add with min value
    rand = rand + min;

    return rand;
  }

  getRandomFloat(min: number, max: number, decimals: number): number {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
  }

  randomInterval(
    beatsSinceLastNote: number,
    resetBeatsSinceLastNote: Function,
    minInterval: number,
    maxInterval: number
  ): SequencerGate {
    if (beatsSinceLastNote > this.generateRandom(minInterval, maxInterval)) {
      resetBeatsSinceLastNote();

      return new SequencerGate(true);
    }
    return new SequencerGate(false);
  }

  duration(userParameters: Map<string, BaseParameter>): number {
    let minGate = userParameters.get("min_gate")?.val() || { val: 0.1 };
    let maxGate = userParameters.get("max_gate")?.val() || { val: 10 };
    return this.getRandomFloat(minGate, maxGate, 2);
  }

  isGateTriggered(
    beatsSinceLastNote: number,
    resetBeatsSinceLastNote: Function,
    parameters: IGateTriggerParameters,
    sequencerParameters: Map<string, BaseParameter>
  ): SequencerGate {
    let minInterval = sequencerParameters.get("min_interval") || { val: 5 };
    let maxInterval = sequencerParameters.get("max_interval") || { val: 10 };

    switch (parameters.triggerType) {
      case "random":
        return this.randomInterval(
          beatsSinceLastNote,
          resetBeatsSinceLastNote,
          minInterval!.val,
          maxInterval!.val
        );
    }
    return new SequencerGate(false);
  }

  constructor(rhythm_length: number) {
    this.rhythm_length = rhythm_length;
    this.rhythm_length = 0;
  }
}
