import * as Tone from "tone";

import { debug } from "../../../../Util/logger";

import IntervalToPlay from "../IntervalToPlay";
import ToneFeatures from "../../../../Types/ToneFeatures";
import NoteToPlayDefinition from "../../SequencerLoader/NoteToPlayDefinition";

import RandomNoteToPlayRunner from "./RandomNoteToPlayRunner";
import SingleNoteToPlayRunner from "./SingleNoteToPlayRunner";
import IntervalNoteToPlayRunner from "./IntervalNoteToPlayRunner";
import IntervalParameterNoteToPlayRunner from "./IntervalParameterNoteToPlayRunner";

export interface INoteToPlayDefinition {
  note: string;
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

  get(
    measureBeat: number,
    intervalToPlay: IntervalToPlay,
    parameters: any,
    lastParams: any
  ): Tone.FrequencyClass | undefined {
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
        let randomNoteToPlayRunner = new RandomNoteToPlayRunner(
          this.toneFeatures
        );
        randomNoteToPlayRunner.getNote(measureBeat);
      case "single":
        let singleNoteToPlayRunner = new SingleNoteToPlayRunner(this.note);
        return singleNoteToPlayRunner.getNote(measureBeat);
      case "interval":
        let intervalNoteRunner = new IntervalNoteToPlayRunner(
          this.toneFeatures,
          intervalToPlay,
          parameters
        );
        return intervalNoteRunner.getNote(measureBeat);
      case "interval_parameter":
        let intervalParameterNoteToPlayRunner = new IntervalParameterNoteToPlayRunner(
          this.toneFeatures,
          intervalToPlay,
          parameters,
          this.stepInterval
        );
        return intervalParameterNoteToPlayRunner.getNote({
          measureBeat,
          lastParams,
        });
    }
  }
}
