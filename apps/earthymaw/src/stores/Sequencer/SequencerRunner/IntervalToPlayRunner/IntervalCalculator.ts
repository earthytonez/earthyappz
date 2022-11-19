import { IMusicChord, IMusicKey, IMusicScale } from "Types";
import { debug, info } from "../../../../Util/logger";

import * as Tone from "tone";

import { Scale } from "@tonaljs/tonal";

export interface IIntervalCalculatorParams {
  measureBeat: number;
  chord: IMusicChord;
  key: IMusicKey;
  scale: IMusicScale;
  startNote: string;
  octave: number;
  parameters: any;
}

class IntervalException extends Error {
  constructor() {
    super("Interval Exception");
  }
}

export default abstract class IntervalCalculator {
  intervalType: "scale" | "list" | "arpeggiator" | undefined = undefined;
  coinToss() {
    return Math.floor(Math.random() * 2) === 0;
  }

  getScaleInterval(
    scale: IMusicScale,
    key: IMusicKey,
    interval: number,
    octave: number
  ): Tone.FrequencyClass<number> {
    info(
      "INTERVAL_TO_PLAY",
      `getScaleInterval ${scale.name} ${key} ${interval} ${octave}`
    );
    let scaleDef = Scale.get(`${key} ${scale.name}`);
    let allOctavesScale: string[] = this.allOctavesScale(scaleDef);

    let startIndex = allOctavesScale.indexOf(`${key}${octave}`);
    let retNote = allOctavesScale[startIndex + interval];
    return Tone.Frequency(retNote);
  }

  abstract calculate(
    params: IIntervalCalculatorParams
  ): Tone.FrequencyClass<number>;

  getCurrentIntervalFromScale(
    scale: IMusicScale,
    key: IMusicKey,
    startNote: string,
    lastNote: string
  ): number {
    debug(
      "INTERVAL_CALCULATOR::getCurrentIntervalFromScale",
      `key=${key},scale_name=${scale.name},startNote=${startNote},lastNote=${lastNote}`
    );
    let scaleDef = Scale.get(`${key} ${scale.name}`);
    let allOctavesScale: string[] = this.allOctavesScale(scaleDef);
    let last = allOctavesScale.indexOf(lastNote);
    let start = allOctavesScale.indexOf(startNote);
    let interval = last - start;

    debug(
      "INTERVAL_CALCULATOR::getCurrentIntervalFromScale",
      `last=${last},start=${start},interval=${interval}`
    );

    if (Number.isNaN(interval) || interval == undefined) {
      throw new IntervalException();
    }
    return interval;

    // switch (direction) {
    //   case "up":
    //     return last - start;
    //   case "down":
    //     return start - last;
    //   case "either":
    //     if (this.coinToss()) {
    //       return last - start;
    //     } else {
    //       return start - last;
    //     }
    // }
    // return 0;
  }

  allOctavesScale(scaleDef: any): string[] {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8]
      .map((o: number) => {
        return scaleDef.notes.map((n: string) => {
          return `${n}${o}`;
        });
      })
      .flat();
  }

  constructor(protected intervalLength: number) {}
}
