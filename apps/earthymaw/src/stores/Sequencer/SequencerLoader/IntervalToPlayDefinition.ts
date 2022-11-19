import { IntervalToPlayManifestSection } from "./IParsedSequencerTOML";
/*
 * IntervalToPlay parses an array or a type of an interval to determine what notes to play
 * in a sequence.  You can think of this as a melody, though often it is for something
 * simpler than a lead melody.
 *
 * There are two main types of intervals,
 *
 * list: A simple list of intervals, which can have lenghts associated with them so you don't change every beat.
 * arpeggiator: Take a chord and play it's intervals.
 */

const INTERVAL_TYPES = ["list", "arpeggiator", "scale"];
export default class IntervalToPlay {
  intervalLength: number = 1;
  _intervalType?: "list" | "arpeggiator" | "scale";
  _intervalTypeList?: string[];
  _intervalList?: number[];

  constructor() {}

  get intervalType(): "list" | "arpeggiator" | "scale" {
    if (!this._intervalType) {
      throw new Error("IntervalToPlay::_intervalType Must be defined");
    }
    if (!INTERVAL_TYPES.includes(this._intervalType)) {
      throw new Error(`Invalid this._intervalType: ${this._intervalType}`);
    }
    return this._intervalType;
  }

  get intervalList(): number[] {
    if (this._intervalType != "list") {
      throw new Error("Wrong interval type for list");
    }

    if (!this._intervalList) {
      throw new Error("Interval list must be defined");
    }
    return this._intervalList;
  }

  get intervalTypeList(): string[] {
    if (this._intervalType != "arpeggiator") {
      throw new Error("Wrong interval type for intervalTypeList");
    }

    if (!this._intervalTypeList) {
      throw new Error("Interval type list must be defined");
    }

    return this._intervalTypeList;
  }

  parse(line: IntervalToPlayManifestSection) {
    if (line && line.interval_type === "arpeggiator") {
      this._intervalType = "arpeggiator";
      this._intervalTypeList = line.type_list;
    }

    if (line && line.interval_type === "list") {
      this._intervalType = "list";
      this._intervalList = line.list;
    }
    this._intervalType = "scale";
  }
}
