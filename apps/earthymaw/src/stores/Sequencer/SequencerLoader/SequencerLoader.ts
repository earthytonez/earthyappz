import toml from "toml";
import { makeObservable, action, computed, observable } from "mobx";

import { BeatMarker } from "../../MusicFeatures/BeatMarker";

import IToneJSDuration from "../../../Types/IToneJSDuration";
import IParsedSequencerTOML from "./IParsedSequencerTOML";

import SequencerDefinition from "./SequencerDefinition";

export default class SequencerLoader {
  sequencerCode: string = "";
  sequencerHolder: SequencerDefinition = new SequencerDefinition();

  get name() {
    return this.sequencerHolder.name;
  }

  get description() {
    return this.sequencerHolder.description;
  }

  get type() {
    return this.sequencerHolder.type;
  }

  duration(_beatMarker: BeatMarker): IToneJSDuration {
    return "8n";
  }

  get rhythm_length(): number {
    return this.sequencerHolder.rhythm_length!;
  }

  code() {
    return this.sequencerCode;
  }

  lines(): Array<string> {
    if (this.sequencerCode) {
      return this.sequencerCode.split("\n");
    }
    return [];
  }

  functionNameFromLine(line: string) {
    return line.split(" ")[1];
  }

  async load(): Promise<SequencerDefinition> {
    try {
      var data: IParsedSequencerTOML = toml.parse(this.sequencerCode);

      this.sequencerHolder.name = data.name;
      this.sequencerHolder.slug = data.name.replaceAll(" ", "_").toLowerCase();
      this.sequencerHolder.description = data.description;
      // this.sequencerHolder.outputs = data.outputs;
      this.sequencerHolder.rhythm_length = data.rhythm_length;
      this.sequencerHolder.totalLength = data.total_length;
      this.sequencerHolder.tags = data.tags;
      this.sequencerHolder.type = data.type;
      this.sequencerHolder.parameters = data.parameters;
      this.sequencerHolder.noteToPlay.parse(data.NoteToPlay);
      this.sequencerHolder.intervalToPlay.parse(data.IntervalsToPlay);
    } catch (err) {
      console.error(this.sequencerCode);
      console.error(err);
    }

    return this.sequencerHolder;
  }

  constructor(sequencerCode: string) {
    this.sequencerCode = sequencerCode;

    makeObservable(this, {
      sequencerHolder: observable,
      sequencerCode: observable,
      name: computed,
      type: computed,
      load: action,
      // fetch: flow
    });
  }
}
