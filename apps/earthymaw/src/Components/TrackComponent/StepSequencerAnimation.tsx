import React from "react";
import GateSequencer from "stores/GateSequencer";
import Sequencer from "stores/Sequencer";
import BaseSynthesizer from "stores/Synthesizer/SynthesizerTypes/Base";

import StepCircle from "../Decorations/StepCircle";

import { observer } from "mobx-react-lite";

import { Note } from "@tonaljs/tonal";

interface StepSequencerAnimationParams {
  gateSequencer?: GateSequencer;
  sequencer?: Sequencer;
  synthesizer?: BaseSynthesizer;
  sectionLength: number;
}

let StepSequencerAnimation = observer(
  ({
    gateSequencer,
    sequencer,
    synthesizer,
    sectionLength,
  }: StepSequencerAnimationParams) => {
    let noteMidi = 0;
    if (sequencer?.lastParams?.note) {
      console.log(
        `StepSequencerAnimation: Note: ${JSON.stringify(
          sequencer?.lastParams?.note._val
        )}`
      );
      console.log(synthesizer?.name);
      noteMidi = Note.midi(sequencer?.lastParams?.note._val) || 0;
    }

    console.log(sequencer?.lastParams?.volume);
    let range = [...Array(sectionLength).keys()];
    return (
      <React.Fragment>
        {range.map((i: number) => {
          return (
            <StepCircle
              key={i}
              triggered={i == gateSequencer?.stepIsTriggered}
              color={(noteMidi! / 127) * 360 || 1}
              volume={100}
            ></StepCircle>
          );
        })}
        {/* {gateSequencer?.stepIsTriggered} */}
      </React.Fragment>
    );
  }
);

export default StepSequencerAnimation;
