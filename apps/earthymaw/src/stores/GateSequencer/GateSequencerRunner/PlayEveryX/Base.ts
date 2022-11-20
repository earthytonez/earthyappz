import { ITriggerParameters } from "../../GateSequencerLoader/TriggerWhen";

const DEFAULT_GATE = 1;

export default class PlayEveryXBase {
  constructor(
    protected rhythm_length: number,
    protected triggerParameters: ITriggerParameters,
    protected userParameters: any
  ) {}

  gateToPlay(stepCount: number) {
    if (!this.triggerParameters.gateList) {
      return DEFAULT_GATE;
    }
    return stepCount % this.triggerParameters.gateList!.length;
  }

  get stepInterval() {
    if (this.userParameters.has("step_interval")) {
      return this.userParameters.get("step_interval").val;
    }
    return this.triggerParameters.stepInterval;
  }

  get stepGateArray() {
    if (this.userParameters.has("step_gate_array")) {
      return this.userParameters.get("step_gate_array").val;
    }
    return this.triggerParameters.gateList;
  }
}
