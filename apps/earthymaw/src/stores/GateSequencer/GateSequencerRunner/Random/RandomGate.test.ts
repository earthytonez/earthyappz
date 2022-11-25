import RandomGate from "./RandomGate";

import { IGateTriggerParameters } from "../../GateSequencerLoader/GateTrigger";

test("test RandomGate random GateTrigger Type", async () => {
  let rhythmLength = 16;
  let randomGateTrigger = new RandomGate(rhythmLength);

  let parameters: IGateTriggerParameters = {
    stepInterval: 4,
    triggerType: "random",
    on: 0,
    octaves: 1,
    minSkip: 1,
    maxSkip: 2,
  };

  let resetBeatsSinceLastNote = jest.fn();

  expect(
    randomGateTrigger.isGateTriggered(
      10,
      resetBeatsSinceLastNote,
      parameters,
      new Map()
    ).triggered
  ).toBeTruthy();
});
