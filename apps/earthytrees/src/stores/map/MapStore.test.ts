import RootStore from "stores/Root.store";
import testMapLoad from "./testMapLoad";

let testMap: any;
let mapStore: any;

beforeEach(() => {
  testMap = testMapLoad;

  const rootStore = new RootStore();
  mapStore = rootStore.mapStore;
});

test("expects map to be valid", () => {
  expect(mapStore.validMap(testMap)).toBe(true);
});

test("expects map to be valid", () => {
  mapStore._map.setMap(testMap);

  expect(mapStore.validMap(testMap)).toBe(true);
  let mapMatrix = mapStore._map._map;
  expect(mapMatrix[0][0].improvement.type).toBe("tree");
  expect(mapMatrix[0][1].improvement.type).toBe("tree");
});
