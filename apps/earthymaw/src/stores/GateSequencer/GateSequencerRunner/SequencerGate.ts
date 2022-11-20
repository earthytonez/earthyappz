import {
  IGatePlayAttributes,
  Duration,
  DEFAULT_DURATION,
} from "../IGatePlayAttributes";

/*
 * Passed from a sequencer to a synthesizer to determine if a note is played and the duration of the note.
 */
interface ISequencerGate extends IGatePlayAttributes {
  readonly triggered: boolean;
  readonly duration: Duration;
}

export default class SequencerGate implements ISequencerGate {
  _duration: number = DEFAULT_DURATION;
  triggered: boolean;
  stepInterval: number = 4;

  get duration(): Duration {
    if (this._duration) {
      return new Duration(this._duration);
    }
    return new Duration(1);
  }

  constructor(triggered: boolean | undefined, duration?: number) {
    this.triggered = !!triggered;
    if (duration) this._duration = duration;
  }
}

export { ISequencerGate };
