import MusicProgressionParameter from "./MusicProgressionParameter";
import UserParameterStore from "stores/UserParameter.store";

test("set a string parameter", () => {
  const userParameterStore = new UserParameterStore();
  const musicProgressionParameter = new MusicProgressionParameter({
    userParameterStore: userParameterStore,
    name: "Progression",
    key: "global.chord",
    default: "I",
    description: "description",
  });
  expect(musicProgressionParameter.val).toBe("I");
});
