import NoteToPlayDefinition from "./NoteToPlayDefinition";

let noteToPlay: any;

test("getIntervalParameterNote for First Note", () => {
  noteToPlay = new NoteToPlayDefinition();
  noteToPlay.parse({ note: "IntervalParameter()" });
  expect(noteToPlay).toBe("intervalParameter()");
});
