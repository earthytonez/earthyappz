import { ITriggerParameters } from "../../GateSequencerLoader/TriggerWhen";

import { ISequencerGate } from "../SequencerGate";

import { PlayEveryXStepList, PlayEveryXStepInterval } from ".";

import { Duration } from "../../IGatePlayAttributes";

/* It's a class that is used to determine whether or not a fill should be played. */
/*
 * Play Every X is used to calculate whether or not a trigger should occur, usually
 * playing every x notes.
 *
 * TODO: Refactor and figure out this whole mess next.
 */
export default class PlayEveryXFactory implements ISequencerRunner {
  rhythm_length: number;

  run(
    beatMarker: number,
    triggerParameters: ITriggerParameters,
    userParameters: any
  ): ISequencerGate {
    console.log(userParameters);

    switch (triggerParameters.triggerType) {
      case "stepList":
        const playEveryXStepList = new PlayEveryXStepList(
          this.rhythm_length,
          triggerParameters,
          userParameters
        );
        return playEveryXStepList.gate(beatMarker);
      case "stepInterval":
        const playEveryXStepInterval = new PlayEveryXStepInterval(
          this.rhythm_length,
          triggerParameters,
          userParameters
        );
        return playEveryXStepInterval.gate(beatMarker);
    }
    return {
      stepInterval: userParameters.get("step_interval")?.val(),
      triggered: false,
      duration: new Duration(1),
    };
  }

  constructor(rhythm_length: number) {
    this.rhythm_length = rhythm_length;
  }
}
