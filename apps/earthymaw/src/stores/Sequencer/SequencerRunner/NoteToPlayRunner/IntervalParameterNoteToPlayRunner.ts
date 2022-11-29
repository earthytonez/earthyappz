import IntervalToPlay from "../IntervalToPlay";
import * as Tone from "tone";

import ToneFeatures from "Types/ToneFeatures";

import { debug, info } from "../../../../Util/logger";

import { Note } from "@tonaljs/tonal";
class NotANumberError extends Error {
  constructor(variableName: string) {
    super(`Not a Number: ${variableName}`);
  }
}

export default class IntervalParameterNoteToPlayRunner {
  constructor(
    private toneFeatures: ToneFeatures,
    private intervalToPlay: IntervalToPlay,
    private parameters: any,
    private _stepInterval: number
  ) {
    if (
      parameters.get("step_pitch_shift") === undefined ||
      parameters.get("step_pitch_shift_direction") === undefined
    ) {
      throw new Error(
        "IntervalNoteToPlayRunner::Constructor:" +
          "Can't run interval parameters because parameters are not set"
      );
    }
  }

  coinToss() {
    return Math.floor(Math.random() * 2) === 0;
  }

  oneThird() {
    return Math.floor(Math.random() * 3) === 0;
  }

  arraySteps() {
    return this.parameters.get("step_pitch_shift")?.val.length;
  }

  /*
   The point of this function is to return the step of the array.  If step interval is 4 and 
   the array is 8 steps and the measureBeat is 5, array step is 1
   */
  getArrayStep(measureBeat: number, stepInterval: number): number {
    let steps = this.arraySteps();

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

  integerParameter(parameter: string, arrayVal: number): number {
    let array = this.parameters.get(parameter)?.val;
    let retVal = parseInt(array[arrayVal]) as number;
    if (Number.isNaN(retVal)) {
      throw new NotANumberError(parameter);
    }
    return retVal;
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

  calcShouldStop(direction: string): boolean {
    switch (direction) {
      case "up":
        return false;
      case "down":
        return false;
      case "none":
        return true;
      case "either":
        return false;
      case "any":
        if (this.oneThird()) {
          return true;
        }
    }

    return false;
  }

  getParameter(parameter: string) {
    if (this.parameters.has(parameter)) {
      debug(
        "NOTE_TO_PLAY::getIntervalParameterNote:",
        `${parameter}  ${this.parameters.get(parameter).val}`
      );

      return this.parameters.get(parameter).val;
    }
  }

  stepInterval() {
    let sI = this.getParameter("step_interval");
    if (sI) {
      return sI;
    }
    return this._stepInterval;
  }

  getNote({
    measureBeat,
    lastParams,
  }: {
    measureBeat: number;
    lastParams: any;
  }): Tone.FrequencyClass<number> | undefined {
    let retVal = Tone.Frequency("C4");
    let octaveToPlay = this.toneFeatures.getOctave();
    let stepInterval = this.stepInterval();
    let arrayStep = this.getArrayStep(measureBeat, stepInterval);

    let stepPitchShift = this.integerParameter("step_pitch_shift", arrayStep);
    let stepPitchShiftDirection = this.getParameter(
      "step_pitch_shift_direction"
    )[arrayStep] as string;

    let startNote = `${this.toneFeatures.key}${octaveToPlay}`;
    let startNoteMidi = Note.midi(startNote) as number;

    let lastNote = startNote;

    /* What does this do? */
    if (arrayStep !== 0 && lastParams && lastParams.note) {
      lastNote = lastParams.note._val;
    }

    if (lastNote === undefined) {
      lastNote = startNote;
    }

    debug(
      "NOTE_TO_PLAY::getCurrentIntervalFromScale",
      `key=${this.toneFeatures.key},scale_name=${this.toneFeatures.scale.name},startNote=${startNote},lastNote=${lastNote}`
    );

    let interval = this.intervalToPlay.getCurrentIntervalFromScale(
      this.toneFeatures.scale,
      this.toneFeatures.key,
      startNote,
      lastNote
    );

    info(
      "NOTE_TO_PLAY",
      `interval ${measureBeat} ${this.stepInterval} ${arrayStep} ${lastParams} lastNote=${lastNote} interval=${interval} ${stepPitchShift} ${stepPitchShiftDirection} ${startNote} ${startNoteMidi}`
    );

    info(
      "NOTE_TO_PLAY::call::getScaleInterval",
      `interval ${this.toneFeatures.scale} ${this.toneFeatures.key} ${interval} ${stepPitchShiftDirection} ${stepPitchShift} ${octaveToPlay}`
    );

    if (this.calcShouldStop(stepPitchShiftDirection)) {
      return undefined;
    }

    retVal = this.intervalToPlay.getScaleInterval(
      this.toneFeatures.scale,
      this.toneFeatures.key,
      this.calcInterval(interval, stepPitchShiftDirection, stepPitchShift),
      octaveToPlay
    );

    info("NOTE_TO_PLAY", `retVal: ${retVal}`, retVal);
    return retVal;
  }
}
