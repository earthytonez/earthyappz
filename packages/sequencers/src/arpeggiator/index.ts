/*
 * Differentiate between gate sequencers and note sequencers.
 */

import * as Tone from "tone";

import { Chord } from "@tonaljs/tonal";

import { IArpeggiatorParams } from "./ArpeggiatorCalculators/BaseArp.js";

import {
  BaseArp,
  UpDownArp,
  DownUpIncArp,
  DownUpArp,
  UpDownIncArp,
  UpArp,
  DownArp,
  RandomArp,
  TopLineUpArp,
  TopLineDownArp,
  BottomLineUpArp,
  BottomLineDownArp,
  // TopLineUpInversedArp,
  // TopLineDownInversedArp,
  // BottomLineUpInversedArp,
  // BottomLineDownInversedArp,
} from "./ArpeggiatorCalculators/index.js";

type ArpeggiatorStyle =
  | "up"
  | "down"
  | "updown"
  | "downup"
  | "updowninc"
  | "downupinc"
  | "random"
  | "top-line-up"
  | "top-line-down"
  | "bottom-line-up"
  | "bottom-line-down"
  | "top-line-up-inversed"
  | "top-line-down-inversed"
  | "bottom-line-up-inversed"
  | "bottom-line-down-inversed";

export default class Arpeggiator {
  intervalType: "arpeggiator" = "arpeggiator";
  _arpCalculator?: BaseArp;
  _startNote: string;

  constructor(arpStyle: string | ArpeggiatorStyle, params: IArpeggiatorParams) {
    this._startNote = params.startNote;
    let chordDef = Chord.getChord(params.chord.name, params.key);

    // let stepInterval = 4;
    // if (params.stepInterval) {
    //   stepInterval = params.stepInterval;
    // }

    // let length: number = 0;

    // length = params.chord.intervals.length;

    // step = Math.ceil((params.measureBeat / stepInterval) % length);

    // logger.debug(
    //   "INTERVAL_TO_PLAY",
    //   `Getting interval for intervalType Arpeggiator ${params.chord} -- ${step} - ${params.measureBeat} - ${length} ${chordDef.notes[step]}`
    // );

    switch (arpStyle) {
      case "up":
        this._arpCalculator = new UpArp(params, chordDef.notes);
        break;
      case "down":
        this._arpCalculator = new DownArp(params, chordDef.notes);
        break;
      case "updown":
        this._arpCalculator = new UpDownArp(params, chordDef.notes);
        break;
      case "downup":
        this._arpCalculator = new DownUpArp(params, chordDef.notes);
        break;
      case "updowninc":
        this._arpCalculator = new UpDownIncArp(params, chordDef.notes);
        break;
      case "downupinc":
        this._arpCalculator = new DownUpIncArp(params, chordDef.notes);
        break;
      case "random":
        this._arpCalculator = new RandomArp(params, chordDef.notes);
        break;
      case "top-line-up":
        this._arpCalculator = new TopLineUpArp(params, chordDef.notes);
        break;
      case "top-line-down":
        this._arpCalculator = new TopLineDownArp(params, chordDef.notes);
        break;
      case "bottom-line-up":
        this._arpCalculator = new BottomLineUpArp(params, chordDef.notes);
        break;
      case "bottom-line-down":
        this._arpCalculator = new BottomLineDownArp(params, chordDef.notes);
        break;
      // case "top-line-up-inversed":
      //   this._arpCalculator = new TopLineUpInversedArp(params, chordDef.notes);
      //   break;
      // case "top-line-down-inversed":
      //   this._arpCalculator = new TopLineDownInversedArp(
      //     params,
      //     chordDef.notes
      //   );
      //   break;
      // case "bottom-line-up-inversed":
      //   this._arpCalculator = new BottomLineUpInversedArp(
      //     params,
      //     chordDef.notes
      //   );
      //   break;
      // case "bottom-line-down-inversed":
      //   this._arpCalculator = new BottomLineDownInversedArp(
      //     params,
      //     chordDef.notes
      //   );
    }
  }

  /*  
    @stepSequencerStep is the number of steps into the seqeuncer so far traveled.
    @stepInterval is the how often to play the arpeggiated note.
    */
  noteForStepPlusInterval(stepSequencerStep: number, stepInterval: number) {
    return Math.ceil((stepSequencerStep / stepInterval) % length);
  }

  /*
   * Position is the position in the arpeggiated sequencer to play.
   */
  noteForStep(position: number) {
    if (this._arpCalculator) {
      return this._arpCalculator.getNote(position);
    }
    return Tone.Frequency(this._startNote);
  }
}
