import Arranger from "../stores/Arranger/Arranger";
import Sequencer from "../stores/Sequencer";
import GateSequencer from "../stores/GateSequencer";
import BaseSynthesizer from "../stores/Synthesizer/SynthesizerTypes/Base";

export default class TrackMachines {
  constructor(
    public arranger?: Arranger,
    public gateSequencer?: GateSequencer,
    public sequencer?: Sequencer,
    public synthesizer?: BaseSynthesizer
  ) {}
}
