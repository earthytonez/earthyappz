import { IrrationalNumbers } from "@earthytonez/sequencers";

import BaseParameter from "stores/Parameter/ParameterTypes/Base";
import { NoteInterval } from "../ISequencerPlayAttributes";

import ISequencerRunner from "./ISequencerRunner";

/*
 * MathNumbers returns a value from an irrational number.
 * It can try and return a value based on either the beatmarker, the sequence length or the rhythym length.
 *
 */
export default class MathNumbers implements ISequencerRunner {
  rhythmLength: number = 0;

  note(
    stepCount: number,
    gateSequencerParameters: Map<string, BaseParameter>
  ): NoteInterval {
    let irrationalNumber =
      gateSequencerParameters.get("irrationalNumber")?.val || 1;

    let irrationalNumbers = new IrrationalNumbers(irrationalNumber);
    let noteInterval = irrationalNumbers.note(stepCount);

    return noteInterval;
  }

  constructor() {}
}
