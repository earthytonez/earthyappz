import IrrationalNumbers from "./index";

test("test IrrationalNumbers Alogrithm up", async () => {
  let irrationalNumbers = new IrrationalNumbers("PI");
  expect(irrationalNumbers.note(1)).toBe(3);
});
