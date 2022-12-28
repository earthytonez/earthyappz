import TimeStore from "stores/time/Store";
import RootStore from "../Root.store";

export type Activity = "GATHER_WATER" | "REST" | "PLANT_TREE" | "BUILD";

const ACTIVITY_DESCRIPTION = {
  GATHER_WATER: "Gather water",
  REST: "Rest",
  PLANT_TREE: "Plant a tree",
  BUILD: "Build",
};

export class ScheduleSlot {
  constructor(public activity: Activity) {}

  get activityDesc() {
    return ACTIVITY_DESCRIPTION[this.activity];
  }
}

export default class ScheduleStore {
  timeStore: TimeStore;
  schedule: ScheduleSlot[];

  getCurrentActivity() {
    return this.schedule[this.timeStore.twentyFourHour() - 1]?.activity;
  }

  checkLocalStorage() {
    let rawLocalStorage = localStorage.getItem("schedule");

    if (rawLocalStorage !== undefined && rawLocalStorage !== "") {
      let _schedule = JSON.parse(rawLocalStorage!);
      if (!_schedule) {
        return undefined;
      }
      this.schedule = _schedule.schedule;
    }
    return;
  }

  saveTime() {
    localStorage.setItem(
      "time",
      JSON.stringify({
        schedule: this.schedule.map((s: any) => {
          return new ScheduleSlot(s.activity);
        }),
      })
    );
  }

  setScheduleSlot(slotNumber: number, activity: Activity) {
    this.schedule[slotNumber] = new ScheduleSlot(activity);
  }

  timeFor(index: number) {
    if (index > 12) {
      return `${index - 12}:00 pm`;
    }
    return `${index}:00 am`;
  }

  constructor(rootStore: RootStore) {
    this.timeStore = rootStore.timeStore;

    this.schedule = [...Array(24).keys()].map((time: number) => {
      if (time < 5 || time > 21) {
        return new ScheduleSlot("REST");
      }
      return new ScheduleSlot("PLANT_TREE");
    });
  }
}
