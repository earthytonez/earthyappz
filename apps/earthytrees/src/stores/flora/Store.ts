import { MAP_HEIGHT, MAP_WIDTH } from "stores/map";
import Flora from "./Flora";
import Coordinates from "stores/map/Coordinates";
import RootStore from "stores/Root.store";
import { makeObservable, observable } from "mobx";

const MAX_FLORA_ON_MAP = 100;

class FloraStore {
  floraOnMap: Flora[] = [];

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

  spawnFlora() {
    if (this.rand(MAX_FLORA_ON_MAP) > this.floraOnMap.length) {
      let randomCoordinates = this.getRandomSpawnLocation();

      let newFlora = new Flora(randomCoordinates, "carrots");
      this.floraOnMap.push(newFlora);
    }
  }

  tick(turn: number) {
    if (turn % 10 == 0) {
      this.spawnFlora();
    }
  }

  floraLocations(): Coordinates[] {
    return this.floraOnMap.map((flora: Flora) => {
      return flora.coordinates;
    });
  }
}

export default FloraStore;
