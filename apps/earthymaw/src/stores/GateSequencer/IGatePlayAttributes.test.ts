import { Duration } from "./IGatePlayAttributes";

import * as Tone from "tone";

test("test parameters", async () => {
  let duration = new Duration(1);
  expect(duration.value()).toBeInstanceOf(Tone.TimeClass);
  expect(duration.value().valueOf()).toEqual(0.1);
});
