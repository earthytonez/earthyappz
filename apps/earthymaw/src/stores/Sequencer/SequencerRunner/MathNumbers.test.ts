import MathNumbers from "./MathNumbers";

import { loadSequencerParametersForTest } from "stores/Parameter/util";

// test('test fixed_step Factory ', async() => {
//     let parameterStore = new ParameterStore();
//     let gateSequencer =
//         await getGateSequencer("free_step", parameterStore, "track-id");
// });

// test('test free_step Factory ', async() => {
//     let parameterStore = new ParameterStore();
//     let gateSequencer =
//         await getGateSequencer("fixed_step", parameterStore, "track-id");
// });

// test('test euclidean Factory ', async() => {
//     let parameterStore = new ParameterStore();
//     let gateSequencer =
//         await getGateSequencer("euclidean", parameterStore, "track-id");
// });

test("test parameters", async () => {
  let mathNumbers = new MathNumbers();

  let sequencerParameters = loadSequencerParametersForTest([
    "irrationalNumber",
  ]);

  if (sequencerParameters.get("irrationalNumber") !== undefined) {
    sequencerParameters.get("irrationalNumber")!.setValue("PI");
  }

  let beatMarker = 3;
  expect(mathNumbers.note(beatMarker, sequencerParameters)).toBe(4);
  beatMarker = 1028;
  expect(mathNumbers.note(beatMarker, sequencerParameters)).toBe(4);
});
