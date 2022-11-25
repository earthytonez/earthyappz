import { Euclidean } from "@earthytonez/sequencers";
import BaseParameter from "stores/Parameter/Base";
import SequencerGate from "../SequencerGate";
/*
 * Play Every X is used to calculate whether or not a trigger should occur, usually
 * playing every x notes.
 */
export default class EuclideanRunner implements ISequencerRunner {
  rhythm_length: number;

  duration(_userParameters: Map<string, BaseParameter>): number {
    return 0.1;
  }

  isGateTriggered(
    beatMarker: number,
    gateSequencerParameters: Map<string, BaseParameter>
  ): SequencerGate {
    let pulses = gateSequencerParameters.get("pulses")?.val || 1;
    let steps = gateSequencerParameters.get("steps")?.val || 16;
    let offset = gateSequencerParameters.get("beat_offset")?.val || 0;

    let stepCount = beatMarker % steps;
    console.log(`GateSequencer Euclidean: ${beatMarker} ${steps} ${stepCount}`);
    let euclidean = new Euclidean(pulses, steps, offset);
    let isGateTriggered = euclidean.gate(stepCount);

    return new SequencerGate(isGateTriggered);
  }

  constructor(rhythm_length: number) {
    this.rhythm_length = rhythm_length;
    this.rhythm_length = 0;
  }
}
