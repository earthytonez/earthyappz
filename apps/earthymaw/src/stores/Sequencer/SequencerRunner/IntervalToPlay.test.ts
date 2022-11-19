import { Scale } from "@tonaljs/tonal";
import { IMusicKey, IMusicScale } from "Types";
import IntervalToPlay from "./IntervalToPlay";

import IntervalToPlayDefinition from "../SequencerLoader/IntervalToPlayDefinition";

test("find midi number from note name", async () => {
  let intervalToPlayDefinition = new IntervalToPlayDefinition();
  intervalToPlayDefinition.parse({
    interval_type: "arpeggiator",
    list: [],
    type_list: [],
  });

  const intervalToPlay = new IntervalToPlay(intervalToPlayDefinition);
  let key = "C" as IMusicKey;
  let scale = Scale.get("major") as IMusicScale;
  let interval = 4;
  let octave = 4;
  let result = intervalToPlay.getScaleInterval(scale, key, interval, octave);
  console.log(result);
  expect(result.toNote()).toEqual("G4");
});

test("get all octaves for a scale", () => {
  let intervalToPlayDefinition = new IntervalToPlayDefinition();
  intervalToPlayDefinition.parse({
    interval_type: "arpeggiator",
    list: [],
    type_list: [],
  });

  const intervalToPlay = new IntervalToPlay(intervalToPlayDefinition);

  let scaleDef = Scale.get(`C major`);

  expect(intervalToPlay.allOctavesScale(scaleDef)).toContain("C4");
  expect(intervalToPlay.allOctavesScale(scaleDef)).toContain("D2");
  expect(intervalToPlay.allOctavesScale(scaleDef)).toContain("F5");
  expect(intervalToPlay.allOctavesScale(scaleDef)).toContain("G6");
  expect(intervalToPlay.allOctavesScale(scaleDef)).toContain("A1");
});

test("get current interval from scale", () => {
  let intervalToPlayDefinition = new IntervalToPlayDefinition();
  intervalToPlayDefinition.parse({
    interval_type: "arpeggiator",
    list: [],
    type_list: [],
  });

  const intervalToPlay = new IntervalToPlay(intervalToPlayDefinition);

  let scale = Scale.get(`major`);
  let key = "C" as IMusicKey;
  let startNote = "C4";
  let lastNote = "F4";

  let interval = intervalToPlay.getCurrentIntervalFromScale(
    scale,
    key,
    startNote,
    lastNote
  );
  expect(interval).toBe(3);
});
