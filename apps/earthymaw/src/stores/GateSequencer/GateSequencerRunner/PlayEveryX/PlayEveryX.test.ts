import PlayEveryX from "./PlayEveryXFactory";

import { IGateTriggerParameters } from "../../GateSequencerLoader/GateTrigger";

test("test PlayEveryX stepInterval GateTrigger Type", async () => {
  let rhythmLength = 16;
  let playEveryX = new PlayEveryX(rhythmLength);

  let parameters: IGateTriggerParameters = {
    stepInterval: 4,
    triggerType: "stepInterval",
    on: 0,
  };

  expect(playEveryX.run(0, parameters, new Map()).triggered).toBeTruthy();
  expect(playEveryX.run(1, parameters, new Map()).triggered).toBeFalsy();
  expect(playEveryX.run(4, parameters, new Map()).triggered).toBeTruthy();
  expect(playEveryX.run(5, parameters, new Map()).triggered).toBeFalsy();
  expect(playEveryX.run(8, parameters, new Map()).triggered).toBeTruthy();
  expect(playEveryX.run(9, parameters, new Map()).triggered).toBeFalsy();
  expect(playEveryX.run(12, parameters, new Map()).triggered).toBeTruthy();
  expect(playEveryX.run(13, parameters, new Map()).triggered).toBeFalsy();
});

test("test PlayEveryX stepList GateTrigger Type", async () => {
  let rhythmLength = 16;
  let playEveryX = new PlayEveryX(rhythmLength);

  let parameters: IGateTriggerParameters = {
    gateList: [1, 1, 1, 1, 1],
    stepList: [0, 3, 7, 13, 15],
    triggerType: "stepList",
    on: 0,
  };

  expect(playEveryX.run(0, parameters, new Map()).triggered).toBeTruthy();
  expect(playEveryX.run(1, parameters, new Map()).triggered).toBeFalsy();
  expect(playEveryX.run(3, parameters, new Map()).triggered).toBeTruthy();
  expect(playEveryX.run(5, parameters, new Map()).triggered).toBeFalsy();
  expect(playEveryX.run(7, parameters, new Map()).triggered).toBeTruthy();
  expect(playEveryX.run(10, parameters, new Map()).triggered).toBeFalsy();
  expect(playEveryX.run(13, parameters, new Map()).triggered).toBeTruthy();
  expect(playEveryX.run(14, parameters, new Map()).triggered).toBeFalsy();
});
