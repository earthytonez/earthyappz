import Euclidean from "./index";

import { loadSequencerParametersForTest } from "stores/Parameter/util";

test("test Euclidean Alogrithm up", async () => {
  let euclidean = new Euclidean(5);

  let sequencerParameters = loadSequencerParametersForTest([
    "irrationalNumber",
  ]);

  if (sequencerParameters.get("pulses") !== undefined) {
    sequencerParameters.get("pulses")!.setValue(5);
  }

  if (sequencerParameters.get("steps") !== undefined) {
    sequencerParameters.get("steps")!.setValue(13);
  }

  if (sequencerParameters.get("beat_offset") !== undefined) {
    sequencerParameters.get("beat_offset")!.setValue(0);
  }

  let resultA = euclidean.isGateTriggered(2, sequencerParameters);
  expect(resultA).toBeTruthy;
  let resultB = euclidean.isGateTriggered(3, sequencerParameters);
  expect(resultB).toBeTruthy;
});
