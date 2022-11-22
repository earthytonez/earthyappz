import NoteToPlayDefinition from "./NoteToPlayDefinition";

let noteToPlay: any;

test("parse IntervalParameter as Note", () => {
  noteToPlay = new NoteToPlayDefinition();
  noteToPlay.parse({ note: "IntervalParameter()" });
  expect(noteToPlay.noteChooser).toBe("interval_parameter");
});

test("parse Random as Note.", () => {
  noteToPlay = new NoteToPlayDefinition();
  noteToPlay.parse({ note: "Rand()" });
  expect(noteToPlay.noteChooser).toBe("random");
});
