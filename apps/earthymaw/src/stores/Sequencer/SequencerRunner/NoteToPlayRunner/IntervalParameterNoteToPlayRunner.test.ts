import { Scale } from "@tonaljs/tonal";
import NumericArrayParameter from "stores/Parameter/NumericArrayParameter";
import NumericParameter from "stores/Parameter/NumericParameter";
import StringEnumArrayParameter from "stores/Parameter/StringEnumArrayParameter";
import { IMusicChord, IMusicKey, IMusicScale } from "Types";
import IntervalToPlayDefinition from "../../SequencerLoader/IntervalToPlayDefinition";
import IntervalToPlay from "../../SequencerRunner/IntervalToPlay";
import { ChordType } from "@tonaljs/tonal";
import UserParameterStore from "stores/UserParameter.store";

import ToneFeatures from "Types/ToneFeatures";

import * as Tone from "tone";
import IntervalParameterNoteToPlayRunner from "./IntervalParameterNoteToPlayRunner";
import TrackOctaves from "stores/Track/TrackOctaves";

let key: IMusicKey;
let chord: IMusicChord;
let octaves: TrackOctaves;
let scale: IMusicScale;
let intervalToPlayDefinition: IntervalToPlayDefinition = new IntervalToPlayDefinition();
let intervalToPlay: IntervalToPlay;
let parameters = new Map();
const userParameterStore = new UserParameterStore();
let toneFeatures: ToneFeatures;
let stepInterval: any;
let stepPitchShift: any;
let stepPitchShiftDirection: any;

beforeEach(() => {
  intervalToPlayDefinition.parse({
    interval_type: "arpeggiator",
    list: [],
    type_list: [],
  });
  intervalToPlay = new IntervalToPlay(intervalToPlayDefinition);

  key = "C" as IMusicKey;
  chord = ChordType.get("major") as IMusicChord;
  let mockTrack = {
    id: "test",
    sequencer: {
      sequencerLoader: {
        type: "step",
      },
    },
  };
  octaves = new TrackOctaves(userParameterStore, mockTrack);
  scale = Scale.get("major") as IMusicScale;

  toneFeatures = new ToneFeatures(key, scale, chord, "progression", octaves);

  stepInterval = new NumericParameter({
    userParameterStore,
    name: "Step Interval",
    key: "track.1.sequencer.step_interval",
    default: 1,
    description: "description",
    min: 0,
    max: 100,
  });
  stepPitchShift = new NumericArrayParameter({
    userParameterStore,
    name: "Waveform",
    key: "track.1.synthesizer.step_pitch_shift",
    default: [1, 1, 1, 1, 1, 1, 1, 1],
    min: 0,
    max: 36,
    description: "description",
  });
  stepPitchShiftDirection = new StringEnumArrayParameter({
    userParameterStore,
    name: "Waveform",
    key: "track.1.synthesizer.step_pitch_shift_direction",
    options: ["up", "down", "either", "none"],
    default: ["up", "up", "up", "up", "up", "up", "up", "up"],
    description: "description",
  });
});

test("getIntervalParameterNote for First Note", () => {
  let measureBeat = 1;

  parameters.set("step_interval", stepInterval);
  parameters.set("step_pitch_shift_direction", stepPitchShiftDirection);
  parameters.set("step_pitch_shift", stepPitchShift);

  let intervalParameterNoteToPlayRunner = new IntervalParameterNoteToPlayRunner(
    toneFeatures,
    intervalToPlay,
    parameters,
    4
  );

  let retrievedNote = intervalParameterNoteToPlayRunner.getNote({
    measureBeat: measureBeat,
    lastParams: undefined,
  });

  expect(retrievedNote!.toNote()).toEqual("D4");
});

test("getIntervalParameterNote for Second Note", () => {
  const stepInterval = new NumericParameter({
    userParameterStore,
    name: "Step Interval",
    key: "track.1.sequencer.step_interval",
    default: 1,
    description: "Step Interval",
    min: 0,
    max: 1,
  });

  stepPitchShiftDirection = new StringEnumArrayParameter({
    userParameterStore,
    name: "Waveform",
    key: "track.1.synthesizer.step_pitch_shift_direction",
    options: ["up", "down", "either", "none"],
    default: ["up", "up", "up", "up", "down", "down", "down", "down"],
    description: "description",
  });

  parameters.set("step_interval", stepInterval);
  parameters.set("step_pitch_shift_direction", stepPitchShiftDirection);
  parameters.set("step_pitch_shift", stepPitchShift);

  let intervalParameterNoteToPlayRunner = new IntervalParameterNoteToPlayRunner(
    toneFeatures,
    intervalToPlay,
    parameters,
    4
  );

  let measureBeat = 2;

  let lastParams = {
    note: Tone.Frequency("D4"),
  };

  let getIntervalParameterNoteParams = {
    key: key,
    scale: scale,
    octaves: octaves,
    measureBeat: measureBeat,
    intervalToPlay: intervalToPlay,
    parameters: parameters,
    lastParams: lastParams,
  };

  let retrievedNote = intervalParameterNoteToPlayRunner.getNote({
    measureBeat,
    lastParams,
  });

  expect(retrievedNote!.toNote()).toEqual("E4");

  /* Next Interval */
  measureBeat = 3;

  lastParams = {
    note: Tone.Frequency("E4"),
  };

  retrievedNote = intervalParameterNoteToPlayRunner.getNote(
    Object.assign(getIntervalParameterNoteParams, {
      lastParams: lastParams,
      measureBeat: measureBeat,
    })
  );

  expect(retrievedNote!.toNote()).toEqual("F4");

  /* Next Interval */
  measureBeat = 4;

  lastParams = {
    note: Tone.Frequency("F4"),
  };

  retrievedNote = intervalParameterNoteToPlayRunner.getNote(
    Object.assign(getIntervalParameterNoteParams, {
      lastParams: lastParams,
      measureBeat: measureBeat,
    })
  );
  expect(retrievedNote!.toNote()).toEqual("G4");
  /* Next Interval */
  measureBeat = 5;

  lastParams = {
    note: Tone.Frequency("G4"),
  };

  retrievedNote = intervalParameterNoteToPlayRunner.getNote(
    Object.assign(getIntervalParameterNoteParams, {
      lastParams: lastParams,
      measureBeat: measureBeat,
    })
  );
  expect(retrievedNote!.toNote()).toEqual("F4");
  /* Next Interval */
  measureBeat = 6;

  lastParams = {
    note: Tone.Frequency("F4"),
  };

  retrievedNote = intervalParameterNoteToPlayRunner.getNote(
    Object.assign(getIntervalParameterNoteParams, {
      lastParams: lastParams,
      measureBeat: measureBeat,
    })
  );
  expect(retrievedNote!.toNote()).toEqual("E4");
  /* Next Interval */
  measureBeat = 7;

  lastParams = {
    note: Tone.Frequency("E4"),
  };

  retrievedNote = intervalParameterNoteToPlayRunner.getNote(
    Object.assign(getIntervalParameterNoteParams, {
      lastParams: lastParams,
      measureBeat: measureBeat,
    })
  );
  expect(retrievedNote!.toNote()).toEqual("D4");
  /* Next Interval */
  measureBeat = 8;

  lastParams = {
    note: Tone.Frequency("D4"),
  };

  retrievedNote = intervalParameterNoteToPlayRunner.getNote(
    Object.assign(getIntervalParameterNoteParams, {
      lastParams: lastParams,
      measureBeat: measureBeat,
    })
  );
  expect(retrievedNote!.toNote()).toEqual("C4");
});

test("getArrayStep returns right value", () => {
  let parameterMap = new Map();
  parameterMap.set("step_pitch_shift", stepPitchShift);
  parameterMap.set("step_pitch_shift_direction", stepPitchShiftDirection);

  let intervalParameterNoteToPlayRunner = new IntervalParameterNoteToPlayRunner(
    toneFeatures,
    intervalToPlay,
    parameterMap,
    4
  );

  expect(intervalParameterNoteToPlayRunner.getArrayStep(1, 1)).toEqual(0);
  expect(intervalParameterNoteToPlayRunner.getArrayStep(2, 1)).toEqual(1);
  expect(intervalParameterNoteToPlayRunner.getArrayStep(8, 1)).toEqual(7);
  expect(intervalParameterNoteToPlayRunner.getArrayStep(9, 1)).toEqual(0);
  expect(intervalParameterNoteToPlayRunner.getArrayStep(2, 2)).toEqual(0);
  expect(intervalParameterNoteToPlayRunner.getArrayStep(4, 2)).toEqual(1);
  expect(intervalParameterNoteToPlayRunner.getArrayStep(9, 3)).toEqual(2);
});

test("direction none", () => {
  let parameterMap = new Map();

  let stepPitchShiftDirectionDirectionNone = new StringEnumArrayParameter({
    userParameterStore,
    name: "Waveform",
    key: "track.1.synthesizer.step_pitch_shift_direction",
    options: ["up", "down", "either", "none", "any"],
    default: ["none", "none", "none", "none", "none", "none", "none", "none"],
    description: "description",
  });

  parameterMap.set("step_pitch_shift", stepPitchShift);
  parameterMap.set(
    "step_pitch_shift_direction",
    stepPitchShiftDirectionDirectionNone
  );

  let intervalParameterNoteToPlayRunner = new IntervalParameterNoteToPlayRunner(
    toneFeatures,
    intervalToPlay,
    parameterMap,
    4
  );

  let measureBeat = 1;

  let lastParams = {
    note: Tone.Frequency("D4"),
  };

  let getIntervalParameterNoteParams = {
    key: key,
    scale: scale,
    octaves: octaves,
    measureBeat: measureBeat,
    intervalToPlay: intervalToPlay,
    parameters: parameters,
    lastParams: lastParams,
  };

  let retrievedNote = intervalParameterNoteToPlayRunner.getNote(
    Object.assign(getIntervalParameterNoteParams, {
      lastParams: lastParams,
      measureBeat: measureBeat,
    })
  );
  expect(retrievedNote).toBeUndefined();
});
