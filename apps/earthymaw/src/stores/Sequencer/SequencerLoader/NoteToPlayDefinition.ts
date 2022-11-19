import * as Tone from "tone";

import { warn } from "../../../Util/logger";
export interface INoteToPlayDefinition {
  note: string;
}

export default class NoteToPlayDefinition {
  // noteNotInterval: boolean = false;
  note?: Tone.FrequencyClass<number> | undefined;

  noteChooser: "random" | "interval" | "interval_parameter" | "single" =
    "single";

  constructor() {}

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

  parseNote(note: string): Tone.FrequencyClass | undefined {
    if (this.isRandomNote(note)) {
      this.noteChooser = "random";
    }

    if (this.isIntervalParameterNote(note)) {
      this.noteChooser = "interval_parameter";
    }

    if (this.isLetterNumberNote(note)) {
      this.noteChooser = "single";
      return Tone.Frequency(this.letterNumberNoteToMidi(note));
    }

    if (this.isHzNote(note)) {
      this.noteChooser = "single";
      return Tone.Frequency(this.hzNoteToMidi(note));
    }

    if (this.isIntNote(note)) {
      return Tone.Frequency(this.intNoteToMidi(note));
    }

    return undefined;
  }

  parse(noteToPlayDefinition: INoteToPlayDefinition) {
    if (!noteToPlayDefinition) {
      warn("NOTE_TO_PLAY", "NoteToPlay is not set.");
      return undefined;
    }

    this.note = this.parseNote(noteToPlayDefinition.note);
    return;
  }
}
