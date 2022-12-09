import MapStore from "./map/Store";
import PlayerStore from "./player/Store";

export default class RootStore {
  mapStore: MapStore;
  playerStore: PlayerStore;
  constructor() {
    this.mapStore = new MapStore(this);
    this.playerStore = new PlayerStore(this);

    this.startTicker();
  }

  startTicker() {
    setInterval(() => {
      this.playerStore.tick();
    }, 100);
  }
}
