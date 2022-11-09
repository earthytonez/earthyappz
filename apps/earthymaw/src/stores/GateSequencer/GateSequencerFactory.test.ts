import GateSequencerDefinition from "./GateSequencerLoader/GateSequencerDefinition";
import GateSequencer from "./GateSequencer";

import UserParameterStore from "../UserParameter.store";

import NumericParameter from "../Parameter/NumericParameter";
import { Note } from "@tonaljs/tonal";
import { MUSIC_SECTION_LENGTH_DEFAULT } from "config/constants";

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
  let userParameterStore = new UserParameterStore();
  let gateSequencerDefinition = new GateSequencerDefinition();
  let gateSequencer = new GateSequencer(
    gateSequencerDefinition,
    MUSIC_SECTION_LENGTH_DEFAULT
  );

  let parameter = new NumericParameter({
    userParameterStore: userParameterStore,
    name: "Test Parameter",
    key: "track.track-id.synthesizer.test",
    default: Note.midi("C2")!,
    min: 0,
    max: 100,
    description: "Test Parameter",
  });

  gateSequencer.registerParameter(parameter);

  expect(gateSequencer._parameters?.get("testparameter")?.type).toBe("numeric");
});
