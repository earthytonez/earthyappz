/*



//
Time
Akseli Palén edited this page on Dec 5, 2020 · 7 revisions
 Pages 27
Installation

Features
Transport
Instruments
Effects
Sources
Signals
Event Classes
Tutorials
Autoplay
Performance and Best Practices
Making connections
Build a synth
Arpeggiator
Glossary
Understanding Envelopes
Time
TransportTime
Using Tone.js With React or Vue
Dev
Contributing
Building
Testing
Clone this wiki locally
https://github.com/Tonejs/Tone.js.wiki.git
All methods which take time as an argument accept a String or Number. Time encoded as a Number is assumed to be seconds and returned. Time encoded as a String can take various forms in order to synchronize it to the Tone.Transport.

Examples:
Numbers
A number will be evaluated as the time (in seconds).

1.2 = 1.2 seconds
"3" = 3 seconds
Notation
Describes time in BPM and time signature relative values.

"4n" = quarter note
"8t" = eighth note triplet
"2m" = two measures
"8n." = dotted-eighth note
Transport Time
Tempo and time signature relative time in the form BARS:QUARTERS:SIXTEENTHS.

"32:0:0" = start of the 32nd measure.
"4:3:2" = 4 bars + 3 quarter notes + 2 sixteenth notes.
"1:2" = 1 bar + 2 quarter notes (sixteenth notes can be omitted)
# Frequency -- Seconds can also be described in Hz.

"1hz" = 1 second
"5hz" = 0.2 seconds

# Ticks
A time relative to the Transport's PPQ (Pulse Per Quarter). The number before the 'i' needs to be an integer.

"1i" = 1 tick
"192i" = 1 quarter note at 192 PPQ
Now-Relative
Prefix any of the above with "+" and it will be interpreted as "the current time plus whatever expression follows"

"+1m" = 1 measure from now
"+0.5" = half a second from now
No Argument
Methods which accept time, no argument (undefined) will be interpreted as "now" (i.e. the audioContext.currentTime).

For example, Tone.MonoSynth's triggerAttack method will accept a time as the second argument, or if a value is ommitted, the it will default to "now".

synth.triggerAttack();//context.currentTime
synth.triggerRelease("+4n"); //a quarter-note from now
Quantization
Using the @ symbol, a Time can be quantized relative to the the Transport's grid.

"@1m" = If the Transport is started, this will return the time of the next measure
Conversion
To convert between seconds and BPM relative values, use Tone.Time

Tone.Time("4n").toSeconds();
footer

*/

import { debug } from "../../Util/logger";
import * as Tone from "tone";

export const DEFAULT_DURATION = 1;

export class Duration {
  constructor(private _val: number) {}

  value(): Tone.TimeClass {
    debug("IGatePlayAttributes:", `Duration: ${this._val}`);
    // let lengthArray = ["128n", "64n", "32n", "16n", "8n", "4n", "2n", "1n"];
    return Tone.Time(`${(1 + this._val) * 0.05}s`);
    // return Tone.Time(this._val * 0.1);
  }
}

export interface IGatePlayAttributes {
  volume?: number;
  triggered: boolean;
  time?: number;
  stepInterval: number;
  duration: Duration;
}
