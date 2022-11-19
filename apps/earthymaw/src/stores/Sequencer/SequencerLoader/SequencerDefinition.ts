import TriggerWhen from "./TriggerWhen";
import NoteToPlayDefinition from "./NoteToPlayDefinition";
import VolumeToPlay from "./VolumeToPlay";
import IntervalToPlayDefinition from "./IntervalToPlayDefinition";

import ISequencerType from "./ISequencerType";

interface IIntervalsToPlay {
  interval_length: number;
  list: number[];

  type: string;
  type_list: string[];
}
/*
 *  This can probably go away and be assigned directly to the Sequencer
 */
export default class SequencerDefinition {
  name?: string;
  slug?: string;
  type?: ISequencerType;
  tags?: string[];
  description?: string = "";
  intervalToPlay: IntervalToPlayDefinition = new IntervalToPlayDefinition();
  intervalsToPlay?: IIntervalsToPlay;
  rhythm_length?: number = undefined;
  totalLength: number = 16;
  triggerWhen: TriggerWhen = new TriggerWhen();
  noteToPlay: NoteToPlayDefinition = new NoteToPlayDefinition();
  parameters?: string[];
  volumeToPlay: VolumeToPlay = new VolumeToPlay();

  assign() {}
}
