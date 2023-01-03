import MapStore from "./map/Store";
import PlayerStore from "./player/Store";
import ScheduleStore from "./schedule/Store";
import TimeStore from "./time/Store";
import FloraStore from "./flora/Store";
import FaunaStore from "./fauna/Store";

import { toast } from "react-toastify";

export default class RootStore {
  mapStore: MapStore;
  playerStore: PlayerStore;
  scheduleStore: ScheduleStore;
  timeStore: TimeStore;

  floraStore: FloraStore;
  faunaStore: FaunaStore;

  constructor() {
    this.mapStore = new MapStore(this);
    this.playerStore = new PlayerStore(this);
    this.timeStore = new TimeStore(this);
    this.scheduleStore = new ScheduleStore(this);
    this.floraStore = new FloraStore(this);
    this.faunaStore = new FaunaStore(this);

    this.startTicker();
  }

  sendNotification(notification: string) {
    toast(notification);
  }

  startTicker() {
    let x = 0;
    setInterval(() => {
      this.playerStore.tick(x);
      this.timeStore.tick();
      this.faunaStore.tick(x);
      this.floraStore.tick(x);
      x++;
    }, 100);
  }
}
