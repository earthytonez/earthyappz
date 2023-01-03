import { MAP_HEIGHT, MAP_WIDTH } from "stores/map";
import Fauna from "./Fauna";
import Coordinates from "stores/map/Coordinates";
import RootStore from "stores/Root.store";
import { makeObservable, observable } from "mobx";

const MAX_FAUNA_ON_MAP = 10;

class FaunaStore {
  floraOnMap: Fauna[] = [];

  constructor(public rootStore: RootStore) {
    console.log(rootStore);
    makeObservable(this, {
      floraOnMap: observable,
    });
  }

  rand(max: number): number {
    return Math.floor(Math.random() * max);
  }

  getRandomSpawnLocation(): Coordinates {
    let retVal = new Coordinates(this.rand(MAP_WIDTH), this.rand(MAP_HEIGHT));

    if (this.floraLocations().includes(retVal)) {
      return this.getRandomSpawnLocation();
    } else {
      return retVal;
    }
  }

  spawnFauna() {
    if (this.rand(MAX_FAUNA_ON_MAP) > this.floraOnMap.length) {
      let randomCoordinates = this.getRandomSpawnLocation();

      this.floraOnMap.push(new Fauna(randomCoordinates, "squirrel"));
    }
  }

  tick(turn: number) {
    if (turn % 10 == 0) {
      this.spawnFauna();
    }
  }

  floraLocations(): Coordinates[] {
    return this.floraOnMap.map((flora: Fauna) => {
      return flora.coordinates;
    });
  }
}

export default FaunaStore;
