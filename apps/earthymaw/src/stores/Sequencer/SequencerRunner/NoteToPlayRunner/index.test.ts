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

import NoteToPlay from ".";

import * as Tone from "tone";
import NoteToPlayDefinition from "stores/Sequencer/SequencerLoader/NoteToPlayDefinition";

let key: IMusicKey;
let chord: IMusicChord;
let octaves: any;
let scale: IMusicScale;
let intervalToPlayDefinition: IntervalToPlayDefinition =
  new IntervalToPlayDefinition();
let intervalToPlay: IntervalToPlay;
let parameters = new Map();
const userParameterStore = new UserParameterStore();
let toneFeatures: ToneFeatures;

beforeEach(() => {
  intervalToPlayDefinition.parse({
    interval_type: "arpeggiator",
    list: [],
    type_list: [],
  });
  intervalToPlay = new IntervalToPlay(intervalToPlayDefinition);

  key = "C" as IMusicKey;
  chord = ChordType.get("major") as IMusicChord;
  octaves = [4];
  scale = Scale.get("major") as IMusicScale;

  toneFeatures = new ToneFeatures(key, scale, chord, "progression", octaves);
});

test("getIntervalParameterNote for First Note", () => {
  let measureBeat = 1;

  const stepInterval = new NumericParameter({
    userParameterStore,
    name: "Step Interval",
    key: "track.1.sequencer.step_interval",
    default: 1,
    description: "description",
    min: 0,
    max: 100,
  });
  const stepPitchShift = new NumericArrayParameter({
    userParameterStore,
    name: "Waveform",
    key: "track.1.synthesizer.step_pitch_shift",
    default: [1, 1, 1, 1, 1, 1, 1, 1],
    min: 0,
    max: 36,
    description: "description",
  });
  const stepPitchShiftDirection = new StringEnumArrayParameter({
    userParameterStore,
    name: "Waveform",
    key: "track.1.synthesizer.step_pitch_shift_direction",
    options: ["up", "down", "either", "none"],
    default: ["up", "up", "up", "up", "up", "up", "up", "up"],
    description: "description",
  });

  parameters.set("step_interval", stepInterval);
  parameters.set("step_pitch_shift_direction", stepPitchShiftDirection);
  parameters.set("step_pitch_shift", stepPitchShift);

  let toneFeatures = new ToneFeatures(
    key,
    scale,
    chord,
    "progression",
    octaves
  );

  let noteToPlayDefinition = new NoteToPlayDefinition();
  noteToPlayDefinition.parse({ note: "IntervalParameter()" });
  let noteToPlay = new NoteToPlay(noteToPlayDefinition, toneFeatures, 4);

  let retrievedNote = noteToPlay.getIntervalParameterNote({
    measureBeat: measureBeat,
    intervalToPlay: intervalToPlay,
    parameters: parameters,
    lastParams: undefined,
  });

  expect(retrievedNote.toNote()).toEqual("D4");
});

test("getArrayStep returns right value", () => {
  let noteToPlayDefinition = new NoteToPlayDefinition();
  noteToPlayDefinition.parse({ note: "IntervalParameter()" });
  let noteToPlay = new NoteToPlay(noteToPlayDefinition, toneFeatures, 4);

  expect(noteToPlay.getArrayStep(1, 1, 8)).toEqual(0);
  expect(noteToPlay.getArrayStep(2, 1, 8)).toEqual(1);
  expect(noteToPlay.getArrayStep(8, 1, 8)).toEqual(7);
  expect(noteToPlay.getArrayStep(9, 1, 8)).toEqual(0);
  expect(noteToPlay.getArrayStep(2, 2, 8)).toEqual(0);
  expect(noteToPlay.getArrayStep(4, 2, 8)).toEqual(1);
  expect(noteToPlay.getArrayStep(9, 3, 8)).toEqual(2);
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

  const stepPitchShift = new NumericArrayParameter({
    userParameterStore,
    name: "Step Pitch Shift",
    key: "track.1.synthesizer.step_pitch_shift",
    default: [1, 1, 1, 1, 1, 1, 1, 1],
    min: 0,
    max: 36,
    description: "Step Pitch Shift",
  });

  const stepPitchShiftDirection = new StringEnumArrayParameter({
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

  let noteToPlayDefinition = new NoteToPlayDefinition();
  noteToPlayDefinition.parse({ note: "IntervalParameter()" });
  let noteToPlay = new NoteToPlay(noteToPlayDefinition, toneFeatures, 4);

  let retrievedNote = noteToPlay.getIntervalParameterNote(
    Object.assign(getIntervalParameterNoteParams, {
      lastParams: lastParams,
      measureBeat: measureBeat,
    })
  );
  expect(retrievedNote.toNote()).toEqual("E4");

  /* Next Interval */
  measureBeat = 3;

  lastParams = {
    note: Tone.Frequency("E4"),
  };

  retrievedNote = noteToPlay.getIntervalParameterNote(
    Object.assign(getIntervalParameterNoteParams, {
      lastParams: lastParams,
      measureBeat: measureBeat,
    })
  );

  expect(retrievedNote.toNote()).toEqual("F4");

  /* Next Interval */
  measureBeat = 4;

  lastParams = {
    note: Tone.Frequency("F4"),
  };

  retrievedNote = noteToPlay.getIntervalParameterNote(
    Object.assign(getIntervalParameterNoteParams, {
      lastParams: lastParams,
      measureBeat: measureBeat,
    })
  );
  expect(retrievedNote.toNote()).toEqual("G4");
  /* Next Interval */
  measureBeat = 5;

  lastParams = {
    note: Tone.Frequency("G4"),
  };

  retrievedNote = noteToPlay.getIntervalParameterNote(
    Object.assign(getIntervalParameterNoteParams, {
      lastParams: lastParams,
      measureBeat: measureBeat,
    })
  );
  expect(retrievedNote.toNote()).toEqual("F4");
  /* Next Interval */
  measureBeat = 6;

  lastParams = {
    note: Tone.Frequency("F4"),
  };

  retrievedNote = noteToPlay.getIntervalParameterNote(
    Object.assign(getIntervalParameterNoteParams, {
      lastParams: lastParams,
      measureBeat: measureBeat,
    })
  );
  expect(retrievedNote.toNote()).toEqual("E4");
  /* Next Interval */
  measureBeat = 7;

  lastParams = {
    note: Tone.Frequency("E4"),
  };

  retrievedNote = noteToPlay.getIntervalParameterNote(
    Object.assign(getIntervalParameterNoteParams, {
      lastParams: lastParams,
      measureBeat: measureBeat,
    })
  );
  expect(retrievedNote.toNote()).toEqual("D4");
  /* Next Interval */
  measureBeat = 8;

  lastParams = {
    note: Tone.Frequency("D4"),
  };

  retrievedNote = noteToPlay.getIntervalParameterNote(
    Object.assign(getIntervalParameterNoteParams, {
      lastParams: lastParams,
      measureBeat: measureBeat,
    })
  );
  expect(retrievedNote.toNote()).toEqual("C4");
});
