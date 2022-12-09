import GateTrigger from "./index";

test("Test GateTrigger", async () => {
  let gateTrigger = new GateTrigger();
  expect(gateTrigger).toBeInstanceOf(GateTrigger);
});
