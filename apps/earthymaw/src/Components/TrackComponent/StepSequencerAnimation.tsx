import React from "react";
import GateSequencer from "stores/GateSequencer";
import Sequencer from "stores/Sequencer";
import BaseSynthesizer from "stores/Synthesizer/SynthesizerTypes/Base";

import StepCircle from "../Decorations/StepCircle";

import { observer } from "mobx-react-lite";

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
    console.log(gateSequencer);
    console.log(sequencer);
    console.log(synthesizer);
    console.log(`StepSequencerAnimation: ${gateSequencer?.stepIsTriggered}`);
    let range = [...Array(sectionLength).keys()];
    return (
      <React.Fragment>
        {range.map((i: number) => {
          return (
            <StepCircle
              key={i}
              triggered={i == gateSequencer?.stepIsTriggered}
              color={1}
              volume={1}
            ></StepCircle>
          );
        })}
        {gateSequencer?.stepIsTriggered}
      </React.Fragment>
    );
  }
);

export default StepSequencerAnimation;
