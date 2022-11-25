import { ChordType, Scale } from "@tonaljs/tonal";
import { IMusicChord, IMusicKey } from "@earthytonez/earthytypez";
import Arpeggiator from "./index";

function calculateArpNote(note: string, index: number, aic: Arpeggiator) {
  let arpNote = aic.noteForStep(index);
  expect(arpNote.toNote()).toBe(note);
}

let chord: IMusicChord = ChordType.get("major");
let key = "C" as IMusicKey;
let scale = Scale.get("C major");
let startNote = "C";
let octave = 4;
let parameters = new Map();

const IN_PARAMS = {
  chord,
  key,
  scale,
  startNote,
  octave,
  parameters,
};

test("test arpeggiator up", async () => {
  let notes = ["C4", "E4", "G4", "C4", "E4", "G4", "C4", "E4", "G4"];

  notes.map((note: string, index: number) => {
    const arpeggiatorIntervalCalculator = new Arpeggiator("up", {
      ...IN_PARAMS,
      measureBeat: index * 4,
    });
    calculateArpNote(note, index, arpeggiatorIntervalCalculator);
  });
});

test("test arpeggiator up = special", async () => {
  let chord: IMusicChord = ChordType.get("major thirteenth");
  let key = "C#" as IMusicKey;
  let scale = Scale.get("C# aeolian");
  let startNote = "C#";
  let octave = 4;
  let parameters = new Map();

  const SPECIAL_IN_PARAMS = {
    chord,
    key,
    scale,
    startNote,
    octave,
    parameters,
  };

  // C# - F - G# - C - D# - A# / C# - F - G# - B# - D# - A#
  let notes = [
    "C#4",
    "F4",
    "G#4",
    "C5",
    "D#5",
    "A#5",
    "C#4",
    "F4",
    "G#4",
    "C5",
    "D#5",
    "A#5",
  ];

  notes.map((note: string, index: number) => {
    const arpeggiatorIntervalCalculator = new Arpeggiator("up", {
      ...SPECIAL_IN_PARAMS,
      measureBeat: index * 4,
    });
    calculateArpNote(note, index, arpeggiatorIntervalCalculator);
  });
});

test("test arpeggiator down", async () => {
  let notes = ["G4", "E4", "C4", "G4"];

  notes.map((note: string, index: number) => {
    const arpeggiatorIntervalCalculator = new Arpeggiator("down", {
      ...IN_PARAMS,
      measureBeat: index * 4,
    });
    calculateArpNote(note, index, arpeggiatorIntervalCalculator);
  });
});

test("test arpeggiator updown", async () => {
  let notes = ["C4", "E4", "G4", "E4", "C4"];

  notes.map((note: string, index: number) => {
    const arpeggiatorIntervalCalculator = new Arpeggiator("updown", {
      ...IN_PARAMS,
      measureBeat: index * 4,
    });
    calculateArpNote(note, index, arpeggiatorIntervalCalculator);
  });
});

test("test arpeggiator updowninc", async () => {
  let notes = ["C4", "E4", "G4", "G4", "E4", "C4"];

  notes.map((note: string, index: number) => {
    const arpeggiatorIntervalCalculator = new Arpeggiator("updowninc", {
      ...IN_PARAMS,
      measureBeat: index * 4,
    });
    calculateArpNote(note, index, arpeggiatorIntervalCalculator);
  });
});

test("test arpeggiator downup", async () => {
  let notes = ["G4", "E4", "C4", "E4", "G4"];

  notes.map((note: string, index: number) => {
    const arpeggiatorIntervalCalculator = new Arpeggiator("downup", {
      ...IN_PARAMS,
      measureBeat: index * 4,
    });
    calculateArpNote(note, index, arpeggiatorIntervalCalculator);
  });
});

test("test arpeggiator downupinc", async () => {
  parameters.set("arpeggiator_type", {
    val: "downupinc",
  });

  let notes = ["G4", "E4", "C4", "C4", "E4", "G4"];

  notes.map((note: string, index: number) => {
    const arpeggiatorIntervalCalculator = new Arpeggiator("downupinc", {
      ...IN_PARAMS,
      measureBeat: index * 4,
    });
    calculateArpNote(note, index, arpeggiatorIntervalCalculator);
  });
});

test("test arpeggiator top-line-up", async () => {
  let notes = ["G4", "C4", "G4", "E4"];

  notes.map((note: string, index: number) => {
    const arpeggiatorIntervalCalculator = new Arpeggiator("top-line-up", {
      ...IN_PARAMS,
      measureBeat: index * 4,
    });
    calculateArpNote(note, index, arpeggiatorIntervalCalculator);
  });
});

test("test arpeggiator top-line-down", async () => {
  let notes = ["G4", "E4", "G4", "C4"];

  notes.map((note: string, index: number) => {
    const arpeggiatorIntervalCalculator = new Arpeggiator("top-line-down", {
      ...IN_PARAMS,
      measureBeat: index * 4,
    });
    calculateArpNote(note, index, arpeggiatorIntervalCalculator);
  });
});

test("test arpeggiator bottom-line-up", async () => {
  let notes = ["C4", "E4", "C4", "G4"];

  notes.map((note: string, index: number) => {
    const arpeggiatorIntervalCalculator = new Arpeggiator("bottom-line-up", {
      ...IN_PARAMS,
      measureBeat: index * 4,
    });
    calculateArpNote(note, index, arpeggiatorIntervalCalculator);
  });
});

test("test arpeggiator bottom-line-down", async () => {
  let notes = ["C4", "G4", "C4", "E4"];

  notes.map((note: string, index: number) => {
    const arpeggiatorIntervalCalculator = new Arpeggiator("bottom-line-down", {
      ...IN_PARAMS,
      measureBeat: index * 4,
    });
    calculateArpNote(note, index, arpeggiatorIntervalCalculator);
  });
});
