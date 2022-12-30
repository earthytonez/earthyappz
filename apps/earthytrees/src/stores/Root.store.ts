import MapStore from "./map/Store";
import PlayerStore from "./player/Store";
import ScheduleStore from "./schedule/Store";
import TimeStore from "./time/Store";

import { toast } from "react-toastify";

export default class RootStore {
  mapStore: MapStore;
  playerStore: PlayerStore;
  scheduleStore: ScheduleStore;
  timeStore: TimeStore;
  constructor() {
    this.mapStore = new MapStore(this);
    this.playerStore = new PlayerStore(this);
    this.timeStore = new TimeStore(this);
    this.scheduleStore = new ScheduleStore(this);

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
      x++;
    }, 100);
  }
}
