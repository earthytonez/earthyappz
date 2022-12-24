import MapStore from "./map/Store";
import PlayerStore from "./player/Store";

import { toast } from "react-toastify";

export default class RootStore {
  mapStore: MapStore;
  playerStore: PlayerStore;
  constructor() {
    this.mapStore = new MapStore(this);
    this.playerStore = new PlayerStore(this);

    this.startTicker();
  }

  sendNotification(notification: string) {
    toast(notification);
  }

  startTicker() {
    setInterval(() => {
      this.playerStore.tick();
    }, 100);
  }
}
