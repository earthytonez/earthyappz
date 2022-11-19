import * as Tone from "tone";

import { debug, info, warn } from "../../../../Util/logger";

import { Note } from "@tonaljs/tonal";
import IntervalToPlay from "../IntervalToPlay";
import ToneFeatures from "../../../../Types/ToneFeatures";
import NoteToPlayDefinition from "../../SequencerLoader/NoteToPlayDefinition";

export interface INoteToPlayDefinition {
  note: string;
}

class NotANumberError extends Error {
  constructor(variableName: string) {
    super(`Not a Number: ${variableName}`);
  }
}

export default class NoteToPlay {
  noteNotInterval: boolean = false;
  note?: Tone.FrequencyClass<number> | undefined;

  noteChooser: "random" | "interval" | "interval_parameter" | "single" =
    "single";

  constructor(
    noteToPlayDefintion: NoteToPlayDefinition,
    private toneFeatures: ToneFeatures,
    private stepInterval: number = 4
  ) {
    this.note = noteToPlayDefintion.note;
    this.noteChooser = noteToPlayDefintion.noteChooser;
  }

  getRandomNote(_measureBeat: number): Tone.FrequencyClass<number> {
    let octave =
      this.toneFeatures.octaves[
        Math.floor(Math.random() * this.toneFeatures.octaves.length)
      ];
    let note =
      this.toneFeatures.scaleNotes[
        Math.floor(Math.random() * this.toneFeatures.scaleNotes.length)
      ];

    return Tone.Frequency(`${note}${octave}`);
  }

  getSingleNote(): Tone.FrequencyClass<number> {
    return Tone.Frequency(this.note);
  }

  getIntervalNote(
    measureBeat: number,
    intervalToPlay: IntervalToPlay,
    parameters: any
  ): Tone.FrequencyClass<number> {
    let octaveToPlay = 4;
    console.log("NOTE_TO_PLAY", octaveToPlay, this.toneFeatures.octaves);
    if (this.toneFeatures.octaves[0]) {
      octaveToPlay = this.toneFeatures.octaves[0];
    }

    let startNote = `${this.toneFeatures.key}${octaveToPlay}`;

    if (this.noteNotInterval) {
      return Tone.Frequency(startNote);
    }

    debug(
      "NOTE_TO_PLAY",
      `Getting notes from ${measureBeat} ${this.toneFeatures.chord.name} chord.`
    );

    let intervalFrequency = intervalToPlay.get(
      measureBeat,
      this.toneFeatures.chord,
      this.toneFeatures.key,
      this.toneFeatures.scale,
      startNote,
      octaveToPlay,
      parameters
    );

    debug(
      "NOTE_TO_PLAY",
      `Returning intervalFrequency ${intervalFrequency}`,
      intervalFrequency
    );
    return intervalFrequency;
  }

  getOctave(octaves: number[]) {
    let octaveToPlay = 4;
    if (octaves[0]) {
      octaveToPlay = octaves[0];
    }
    return octaveToPlay;
  }

  coinToss() {
    return Math.floor(Math.random() * 2) === 0;
  }

  calcInterval(
    interval: number,
    direction: string,
    pitchShift: number
  ): number {
    if (Number.isNaN(interval)) {
      throw new NotANumberError("interval");
    }

    if (Number.isNaN(pitchShift)) {
      throw new NotANumberError("pitchShift");
    }

    switch (direction) {
      case "up":
        return interval + pitchShift;
      case "down":
        return interval - pitchShift;
      case "either":
        if (this.coinToss()) {
          return interval + pitchShift;
        } else {
          return interval - pitchShift;
        }
    }

    return interval + pitchShift;
  }

  /*
   The point of this function is to return the step of the array.  If step interval is 4 and 
   the array is 8 steps and the measureBeat is 5, array step is 1
   */
  getArrayStep(
    measureBeat: number,
    stepInterval: number,
    steps: number
  ): number {
    if (measureBeat === undefined || Number.isNaN(measureBeat)) {
      throw new NotANumberError("measureBeat");
    }

    if (stepInterval === undefined || Number.isNaN(stepInterval)) {
      throw new NotANumberError("measureBeat");
    }

    if (steps === undefined || Number.isNaN(steps)) {
      throw new NotANumberError("steps");
    }

    let measurePosition = measureBeat / stepInterval - 1;
    if (measurePosition < 0) {
      measurePosition = 0;
    }
    let retVal = Math.floor(measurePosition % steps);
    if (retVal < 0) {
      throw new Error(
        `Invalid Array Step retVal=${retVal} measureBeat=${measureBeat} stepInterval=${stepInterval} steps=${steps}`
      );
    }
    return retVal;
  }

  getParameter(parameters: any, parameter: string) {
    if (parameters.has(parameter)) {
      debug(
        "NOTE_TO_PLAY::getIntervalParameterNote:",
        `${parameter}  ${parameters.get(parameter).val}`
      );

      return parameters.get(parameter).val;
    }
  }

  integerParameter(
    parameters: any,
    parameter: string,
    arrayVal: number
  ): number {
    let array = parameters.get(parameter)?.val;
    let retVal = parseInt(array[arrayVal]) as number;
    if (Number.isNaN(retVal)) {
      throw new NotANumberError(parameter);
    }
    return retVal;
  }

  getIntervalParameterNote({
    measureBeat,
    intervalToPlay,
    parameters,
    lastParams,
  }: {
    measureBeat: number;
    intervalToPlay: IntervalToPlay;
    parameters: any;
    lastParams: any;
  }): Tone.FrequencyClass<number> {
    let retVal = Tone.Frequency("C4");

    if (
      parameters.get("step_pitch_shift") === undefined ||
      parameters.get("step_pitch_shift_direction") === undefined
    ) {
      warn(
        "NOTE_TO_PLAY",
        "Can't run interval parameters because parameters are not set"
      );
      return retVal;
    }
    let octaveToPlay = this.getOctave(this.toneFeatures.octaves);

    let sI = this.getParameter(parameters, "step_interval");
    if (sI) {
      this.stepInterval = sI;
    }

    let _arrayStep = this.getArrayStep(
      measureBeat,
      this.stepInterval,
      parameters.get("step_pitch_shift")?.val.length
    );

    let stepPitchShift = this.integerParameter(
      parameters,
      "step_pitch_shift",
      _arrayStep
    );

    let stepPitchShiftDirection = this.getParameter(
      parameters,
      "step_pitch_shift_direction"
    )[_arrayStep] as string;

    let startNote = `${this.toneFeatures.key}${octaveToPlay}`;
    let startNoteMidi = Note.midi(startNote) as number;
    let lastNote = startNote;
    if (_arrayStep !== 0 && lastParams && lastParams.note) {
      lastNote = lastParams.note._val;
    }

    if (lastNote === undefined) {
      lastNote = startNote;
    }

    debug(
      "NOTE_TO_PLAY::getCurrentIntervalFromScale",
      `key=${this.toneFeatures.key},scale_name=${this.toneFeatures.scale.name},startNote=${startNote},lastNote=${lastNote}`
    );

    let interval = intervalToPlay.getCurrentIntervalFromScale(
      this.toneFeatures.scale,
      this.toneFeatures.key,
      startNote,
      lastNote
    );

    info(
      "NOTE_TO_PLAY",
      `interval ${measureBeat} ${this.stepInterval} ${_arrayStep} ${lastParams} lastNote=${lastNote} interval=${interval} ${stepPitchShift} ${stepPitchShiftDirection} ${startNote} ${startNoteMidi}`
    );

    info(
      "NOTE_TO_PLAY::call::getScaleInterval",
      `interval ${this.toneFeatures.scale} ${this.toneFeatures.key} ${interval} ${stepPitchShiftDirection} ${stepPitchShift} ${octaveToPlay}`
    );

    retVal = intervalToPlay.getScaleInterval(
      this.toneFeatures.scale,
      this.toneFeatures.key,
      this.calcInterval(interval, stepPitchShiftDirection, stepPitchShift),
      octaveToPlay
    );

    info("NOTE_TO_PLAY", `retVal: ${retVal}`, retVal);
    return retVal;
  }

  get(
    measureBeat: number,
    intervalToPlay: IntervalToPlay,
    parameters: any,
    lastParams: any
  ): Tone.FrequencyClass {
    if (intervalToPlay.intervalType === "arpeggiator") {
      this.noteChooser = "interval";
    }

    debug(
      "NOTE_TO_PLAY",
      `Note set as ${JSON.stringify(this.note)}, noteChooser: ${
        this.noteChooser
      }, intervalToPlay: ${intervalToPlay}`
    );

    switch (this.noteChooser) {
      case "random":
        return this.getRandomNote(measureBeat);
      case "single":
        return this.getSingleNote();
      case "interval":
        let intervalNote = this.getIntervalNote(
          measureBeat,
          intervalToPlay,
          parameters
        );
        console.log(`NOTE_TO_PLAY GET_INTERVAL_NOTE ${intervalNote}`);
        return intervalNote;
      case "interval_parameter":
        let intervalParameterNote = this.getIntervalParameterNote({
          measureBeat,
          intervalToPlay,
          parameters,
          lastParams,
        });
        console.log(
          `NOTE_TO_PLAY GET_INTERVAL_PARAMETER_NOTE ${intervalParameterNote}`
        );
        return intervalParameterNote;
    }
  }

  isLetterNumberNote(line: string): boolean {
    return /[A-G]\d/.test(line);
  }

  isHzNote(line: string): boolean {
    return /\d+Hz/.test(line);
  }

  isIntNote(line: string): boolean {
    return /\d\d/.test(line);
  }

  intNoteToMidi(_line: string): number {
    return 64;
  }

  hzNoteToMidi(_line: string): number {
    return 64;
  }

  letterNumberNoteToMidi(_line: string): number {
    return 64;
  }

  isRandomNote(noteChooserString: string) {
    return noteChooserString === "Rand()";
  }

  isIntervalParameterNote(noteChooserString: string) {
    return noteChooserString === "IntervalParameter()";
  }

  randomNoteToMidi() {}
}
