import MapStore from "./Store";
import RootStore from "../Root.store";
import Coordinates from "./Coordinates";

import testMap from "./testMap";

test("Expects destination to be a certain value", () => {
  let rootStore = new RootStore();
  let mapStore = new MapStore(rootStore);

  rootStore.playerStore.currentLocation = new Coordinates(0, 0);

  mapStore.overrideMap(testMap);

  let destination = mapStore._map.breadthFirstSearch(
    rootStore.playerStore.currentLocation,
    "Feature",
    "ADJACENT_TO_WATER"
  );

  expect(destination).toBeDefined();
  expect(destination!.X).toBe(21);
  expect(destination!.Y).toBe(22);
});
