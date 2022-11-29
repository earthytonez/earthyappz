import ToneFeatures from "../../Types/ToneFeatures";
import TrackMachines from "../../Types/TrackMachines";

import Sequencer from "../Sequencer";
import GateSequencer from "../GateSequencer";
import BaseSynthesizer from "../Synthesizer/SynthesizerTypes/Base";

import { warn, debug } from "../../Util/logger";

import BeatFeatures from "./BeatFeatures";
import * as Tone from "tone";
import IGateTriggerAttackReleaseParams from "./IGateTriggerAttackReleaseParams";

export default class TrackPipeline {
  private gateSequencer?: GateSequencer;
  private sequencer?: Sequencer;
  private synthesizer?: BaseSynthesizer;

  constructor(
    trackMachines: TrackMachines,
    private beatFeatures: BeatFeatures,
    private toneFeatures: ToneFeatures
  ) {
    this.gateSequencer = trackMachines.gateSequencer;
    this.sequencer = trackMachines.sequencer;
    this.synthesizer = trackMachines.synthesizer;
  }

  async tick() {
    let triggerAttackReleaseParams: IGateTriggerAttackReleaseParams = {
      frequency: Tone.Frequency("C4"),
      duration: Tone.Time("16n"),
      time: Tone.Time("0"),
      velocity: 1,
    };
    if (this.sequencer === undefined) {
      warn("TRACK_TICK", "No Sequencer Set");
      return;
    }

    if (this.gateSequencer === undefined) {
      warn("TRACK_TICK", "No Gate Sequencer Set");
      return false;
    }

    if (this.synthesizer === undefined) {
      warn("TRACK_TICK", "No Synthesizer Set");
      return false;
    }

    /* TODO: Make arrangement work */
    // let arrangementAttributes = this.arranger?.play(beatMarker, time);
    // if (!arrangementAttributes) {
    //   return false;
    // }

    let arrangementAttributes = {
      play: true,
    };
    debug(`TRACK_TICK`, `Arrangement Attributes: `, arrangementAttributes);

    let gateAttributes = await this.gateSequencer?.play(
      arrangementAttributes,
      this.beatFeatures
    );

    /* Return false if gate is not triggered */
    if (!gateAttributes || !gateAttributes.triggered) {
      return false;
    }

    debug(`TRACK_TICK`, `Gate Attributes: `, gateAttributes);

    let playAttributes = await this.sequencer.play(
      gateAttributes,
      this.toneFeatures.key,
      this.toneFeatures.scale,
      this.toneFeatures.chord,
      this.toneFeatures.progression,
      this.beatFeatures
    );

    if (!playAttributes || playAttributes.stop) {
      return false;
    }

    debug(`TRACK_TICK`, `Play Attributes: `, playAttributes);

    // TODO: Implement duration/time logic with gates.
    debug(`TRACK_TICK`, `Duration: `, gateAttributes.duration.value());

    triggerAttackReleaseParams.duration = gateAttributes.duration.value();
    // triggerAttackReleaseParams.duration = Tone.Time("8n");
    triggerAttackReleaseParams.frequency = playAttributes.note!;
    triggerAttackReleaseParams.time = playAttributes.time;
    this.synthesizer?.trigger(triggerAttackReleaseParams);

    return;
  }
}
