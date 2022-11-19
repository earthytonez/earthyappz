import IntervalToPlayDefinition from "./IntervalToPlayDefinition";

test("find midi number from note name", async () => {
  const intervalToPlay = new IntervalToPlayDefinition();
  intervalToPlay.parse({
    interval_type: "arpeggiator",
    list: [],
    type_list: [],
  });

  expect(intervalToPlay._intervalType).toBe("arpeggiator");
  expect(intervalToPlay._intervalTypeList).toBe([]);
});
