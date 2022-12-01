import NumericParameter from "../ParameterTypes/NumericParameter";

import { Note } from "@tonaljs/tonal";

import { OSCILLATOR_TYPES } from "../../Synthesizer/IOscillatorType";

import NumericEnumParameter from "../ParameterTypes/NumericEnumParameter";
import StringEnumParameter from "../ParameterTypes/StringEnumParameter";
import StringEnumArrayParameter from "../ParameterTypes/StringEnumArrayParameter";
import NumericArrayParameter from "../ParameterTypes/NumericArrayParameter";
import {
  MIDI_NOTE_RANGE_MAX,
  MIDI_NOTE_RANGE_MIN,
} from "config/constants/parameters";
import UserParameterStore from "stores/UserParameter.store";
import { IHash } from "./Base";

const MIN_STEP_PITCH_SHIFT = 0;
const MAX_STEP_PITCH_SHIFT = 32;

function parameterKey(parameterName: string, trackID: string): string {
  return `track.${trackID}.sequencer.${parameterName}`;
}

let SEQUENCER_PARAMETER_DEFINITIONS: IHash = {
  pitch: (
    trackID: string,
    userParameterStore: UserParameterStore,
    _options: { [key: string]: number | string }
  ) => {
    return new NumericParameter({
      userParameterStore: userParameterStore,
      name: "Pitch",
      key: parameterKey("pitch", trackID),
      default: Note.midi("C2")!,
      min: MIDI_NOTE_RANGE_MIN,
      max: MIDI_NOTE_RANGE_MAX,
      description:
        "The pitch of the sound, often for single pitch instruments (Kick Drum)",
    });
  },
  oscillator_pitch: (
    trackID: string,
    userParameterStore: UserParameterStore,
    _options: { [key: string]: number | string }
  ) => {
    return new NumericParameter({
      userParameterStore: userParameterStore,
      name: "Oscillator Pitch",
      title: "Pitch",
      key: parameterKey("oscillator_pitch", trackID),
      default: 0,
      min: -36,
      max: 36,
      fieldType: "knob",
      description:
        "The pitch of the sound, often for single pitch instruments (Kick Drum)",
    });
  },

  pitch_decay: (
    trackID: string,
    userParameterStore: UserParameterStore,
    _options: { [key: string]: number | string }
  ) => {
    return new NumericParameter({
      userParameterStore: userParameterStore,
      name: "Pitch Decay",
      key: parameterKey("pitch_decay", trackID),
      default: 0,
      min: 0,
      max: 0.5,
      description: "The amount of time the frequency envelope takes",
    });
  },

  // trigger_set: (
  //   trackID: string,
  //   _options: { [key: string]: number | string }
  // ) => {
  //   return new NumericParameter({
  //     userParameterStore: userParameterStore,
  //     name: "GateTrigger Set", //  chosenGateTriggerParameterSet
  //     key: parameterKey("trigger_set", trackID),
  //     default: Note.midi("C2")!,
  //     // fieldOptions: {
  //     //   min: 0,
  //     //   max: this.gateTrigger?.parameterSets.length! - 1,
  //     //   step: 1,
  //     //   current: this.chosenGateParameterSet,
  //     // },
  //   });
  // },
  // gate_set: (
  //   trackID: string,
  //   _options: { [key: string]: number | string }
  // ) => {
  //   return new NumericParameter({
  //     userParameterStore: userParameterStore,
  //     name: "Gate Set", // chosenGateParameterSet
  //     key: parameterKey("gate_set", trackID),
  //     default: Note.midi("C2")!,
  //     // fieldOptions: {
  //     //   min: 0,
  //     //   max: this.gateTrigger?.parameterSets.length! - 1,
  //     //   step: 1,
  //     //   current: this.chosenGateParameterSet,
  //     // },
  //   });
  // },
  min_gate: (
    trackID: string,
    userParameterStore: UserParameterStore,
    _options: { [key: string]: number | string }
  ) => {
    return new NumericParameter({
      userParameterStore: userParameterStore,
      name: "Min Gate", // chosenGateParameterSet
      key: parameterKey("min_gate", trackID),
      default: Note.midi("C2")!,
      min: 0,
      max: 100,
      description:
        "For random sequencers, the minimum 'gate' or length of a note.",
    });
  },
  max_gate: (
    trackID: string,
    userParameterStore: UserParameterStore,
    _options: { [key: string]: number | string }
  ) => {
    return new NumericParameter({
      userParameterStore: userParameterStore,
      name: "Max Gate", // chosenGateParameterSet
      key: parameterKey("max_gate", trackID),
      default: Note.midi("C2")!,
      min: 0,
      max: 100,
      description:
        "For random sequencers, the maximum 'gate' or length of a note.",
    });
  },
  min_interval: (
    trackID: string,
    userParameterStore: UserParameterStore,
    _options: { [key: string]: number | string }
  ) => {
    return new NumericParameter({
      userParameterStore: userParameterStore,
      name: "Minimum Interval", // chosenGateParameterSet
      key: parameterKey("min_interval", trackID),
      default: Note.midi("C2")!,
      min: 0,
      max: 100,
      description:
        "In a random sequencer the minimum amount of time between notes.",
    });
  },
  max_interval: (
    trackID: string,
    userParameterStore: UserParameterStore,
    _options: { [key: string]: number | string }
  ) => {
    return new NumericParameter({
      userParameterStore: userParameterStore,
      name: "Max Interval", // chosenGateParameterSet
      key: parameterKey("max_interval", trackID),
      default: Note.midi("C2")!,
      min: 0,
      max: 100,
      description:
        "In a random sequencer the maximum amount of time between notes.",
    });
  },
  selected_fill: (
    trackID: string,
    userParameterStore: UserParameterStore,
    options: { [key: string]: number | string }
  ) => {
    return new NumericParameter({
      userParameterStore: userParameterStore,
      name: "Selected Fill", // chosenGateParameterSet
      key: parameterKey("selected_fill", trackID),
      default: 0,
      min: options.min as number,
      max: options.max as number,
      description: "Which fill is used by the sequencer.",
    });
  },
  step_interval: (
    trackID: string,
    userParameterStore: UserParameterStore,
    _options: { [key: string]: number | string }
  ) => {
    return new NumericEnumParameter({
      userParameterStore: userParameterStore,
      name: "Step Interval", // chosenGateParameterSet
      key: parameterKey("step_interval", trackID),
      options: [1, 2, 3, 4, 6, 8, 12, 16],
      default: 4,
      description:
        "The relative speed of the step sequencer.  A Step interval of '4' means that a note will play every 4 ticks of the step sequencer",
      // fieldOptions: {
      /* It's a slider. */
      // min: 0,
      // max: fill list length,
      // },
    });
  },
  arpeggiator_type: (
    trackID: string,
    userParameterStore: UserParameterStore,
    _options: { [key: string]: number | string }
  ) => {
    return new StringEnumParameter({
      userParameterStore: userParameterStore,
      name: "Arpeggiator Type", // chosenGateParameterSet
      key: parameterKey("arpeggiator_type", trackID),
      options: ["up", "down", "updown", "downup", "random"],
      default: "up",
      description: "description",
    });
  },
  step_pitch_shift: (
    trackID: string,
    userParameterStore: UserParameterStore,
    options: { [key: string]: number | string }
  ) => {
    return new /* It's a parameter that has an array of numbers. */
    NumericArrayParameter({
      userParameterStore: userParameterStore,
      name: "Step Pitch Shift",
      key: parameterKey("step_pitch_shift", trackID),
      default: [0, 0, 0, 0, 0, 0, 0, 0],
      min: (options.min as number) || MIN_STEP_PITCH_SHIFT,
      max: (options.max as number) || MAX_STEP_PITCH_SHIFT,
      description:
        "The number of steps to move up or down in pitch, for interval step sequencers.",
    });
  },
  step_gate_array: (
    trackID: string,
    userParameterStore: UserParameterStore,
    options: { [key: string]: number | string }
  ) => {
    return new NumericArrayParameter({
      userParameterStore: userParameterStore,
      name: "Step Gate Array",
      key: parameterKey("step_gate_array", trackID),
      default: [0, 0, 0, 0, 0, 0, 0, 0],
      min: options.min as number,
      max: options.max as number,
      description: "The length of a note for fixed-length step sequencers",
    });
  },
  step_pitch_shift_direction: (
    trackID: string,
    userParameterStore: UserParameterStore,
    _options: { [key: string]: number | string }
  ) => {
    return new StringEnumArrayParameter({
      userParameterStore: userParameterStore,
      name: "Step Pitch Shift Direction",
      key: parameterKey("step_pitch_shift_direction", trackID),
      options: ["up", "down", "either", "none", "any"],
      default: [
        "either",
        "either",
        "either",
        "either",
        "either",
        "either",
        "either",
        "either",
      ],
      description:
        "In an interval step sequencer, which direction the current interval should go.",
    });
  },
  oscillator: (
    trackID: string,
    userParameterStore: UserParameterStore,
    _options: { [key: string]: number | string }
  ) => {
    return new StringEnumParameter({
      userParameterStore: userParameterStore,
      name: "Oscillator Waveform", // chosenGateParameterSet
      title: "Osc Wav",
      key: parameterKey("oscillator_type", trackID),
      options: OSCILLATOR_TYPES,
      default: OSCILLATOR_TYPES[0]!,
      description: "description",
    });
  },
  beat_repeat: (
    trackID: string,
    userParameterStore: UserParameterStore,
    _options: { [key: string]: number | string }
  ) => {
    return new NumericParameter({
      userParameterStore: userParameterStore,
      name: "Beat Repeast", // chosenGateParameterSet
      key: parameterKey("beat_repeat", trackID),
      default: 0,
      min: 0,
      max: 3,
      description: "How many times will note be repeated.",
    });
  },
  note_repeat: (
    // For a fixed-length sequencer, each note in the sequencer is repeated X times.
    trackID: string,
    userParameterStore: UserParameterStore,
    _options: { [key: string]: number | string }
  ) => {
    return new NumericParameter({
      userParameterStore: userParameterStore,
      name: "Note Repeat", // chosenGateParameterSet
      key: parameterKey("note_repeat", trackID),
      default: 1,
      min: 0,
      max: 3,
      description:
        "For a fixed-length sequencer, like an arpeggiator, each note in the sequencer is repeated.",
    });
  },
  random_note_repeat_min: (
    trackID: string,
    userParameterStore: UserParameterStore,
    _options: { [key: string]: number | string }
  ) => {
    return new NumericParameter({
      userParameterStore: userParameterStore,
      name: "Rand Note Repeat Min", // chosenGateParameterSet
      key: parameterKey("random_note_repeat_min", trackID),
      default: 1,
      min: 0,
      max: 3,
      description:
        "For a fixed-length sequencer, like an arpeggiator, each note in the sequencer is repeated a random number of times, this is the minimum number of times it is repeated.",
    });
  },
  random_note_repeat_max: (
    trackID: string,
    userParameterStore: UserParameterStore,
    _options: { [key: string]: number | string }
  ) => {
    return new NumericParameter({
      userParameterStore: userParameterStore,
      name: "Rand Note Repeat Max", // chosenGateParameterSet
      key: parameterKey("random_note_repeat_max", trackID),
      default: 1,
      min: 0,
      max: 3,
      description:
        "For a fixed-length sequencer, like an arpeggiator, each note in the sequencer is repeated a random number of times, this is the maximum number of times it is repeated.",
    });
  },
  beat_offset: (
    // Can be reused for Euclidean Sequencer
    trackID: string,
    userParameterStore: UserParameterStore,
    _options: { [key: string]: number | string }
  ) => {
    return new NumericParameter({
      userParameterStore: userParameterStore,
      name: "Beat Offset", // chosenGateParameterSet
      key: parameterKey("beat_offset", trackID),
      default: 1,
      min: 0,
      max: 3,
      description: "When will note be played after downbeat.",
    });
  },
  pulses: (
    trackID: string,
    userParameterStore: UserParameterStore,
    _options: { [key: string]: number | string }
  ) => {
    return new NumericParameter({
      userParameterStore: userParameterStore,
      name: "Pulses", // chosenGateParameterSet
      key: parameterKey("pulses", trackID),
      default: 1,
      min: 0,
      max: 64,
      description: "The numebr of beats to be played in a Euclidean Sequence",
    });
  },
  steps: (
    trackID: string,
    userParameterStore: UserParameterStore,
    _options: { [key: string]: number | string }
  ) => {
    return new NumericParameter({
      userParameterStore: userParameterStore,
      name: "Steps", // chosenGateParameterSet
      key: parameterKey("steps", trackID),
      default: 16,
      min: 0,
      max: 64,
      description: "How many steps in the section.",
    });
  },
};

export default SEQUENCER_PARAMETER_DEFINITIONS;
