import TriggerWhen from "./TriggerWhen";
import GateLengths from "./GateLengths";
import VolumeToPlay from "./VolumeToPlay";

import ISequencerType from "./ISequencerType";

/*
 *  This can probably go away and be assigned directly to the Sequencer
 */
export default class GateSequencerDefinition {
  name?: string;
  slug?: string;
  type?: ISequencerType;
  tags?: string[];
  description?: string = "";
  gateLengths: GateLengths = new GateLengths();
  rhythm_length?: number = undefined;
  totalLength: number = 16;
  triggerWhen: TriggerWhen = new TriggerWhen();
  parameters?: string[];
  volumeToPlay: VolumeToPlay = new VolumeToPlay();

  assign() {}
}
