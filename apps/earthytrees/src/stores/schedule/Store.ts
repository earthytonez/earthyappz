import TimeStore from "stores/time/Store";
import RootStore from "../Root.store";
import { autorun, action, makeAutoObservable, observable } from "mobx";

export type Activity = "GATHER_WATER" | "REST" | "PLANT_TREE" | "BUILD";

const ACTIVITY_DESCRIPTION = {
  GATHER_WATER: "Gather water",
  REST: "Rest",
  PLANT_TREE: "Plant a tree",
  BUILD: "Build",
};

const ACTIVITIES = [
  { name: "Gather Water", slug: "GATHER_WATER" },
  { name: "Rest", slug: "REST" },
  { name: "Plant a tree", slug: "PLANT_TREE" },
  // { name: "Build", slug: "BUILD" },
];

interface IScheduleSlot {
  activity: Activity;
}

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
    return this.schedule[this.timeStore.twentyFourHour()]?.activity;
  }

  get activities() {
    return ACTIVITIES;
  }

  checkLocalStorage() {
    let rawLocalStorage = localStorage.getItem("schedule");

    if (rawLocalStorage !== undefined && rawLocalStorage !== "") {
      let _schedule = JSON.parse(rawLocalStorage!);
      if (!_schedule) {
        return undefined;
      }
      this.schedule = _schedule.schedule.map((scheduleSlot: IScheduleSlot) => {
        return new ScheduleSlot(scheduleSlot.activity);
      });
    }
    return;
  }

  saveSchedule() {
    localStorage.setItem(
      "schedule",
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

  setIndexActivity(index: number, activity: Activity) {
    this.schedule[index] = new ScheduleSlot(activity);
    this.saveSchedule();
  }

  constructor(rootStore: RootStore) {
    this.timeStore = rootStore.timeStore;

    this.schedule = [...Array(24).keys()].map((time: number) => {
      if (time < 5 || time > 21) {
        return new ScheduleSlot("REST");
      }
      return new ScheduleSlot("PLANT_TREE");
    });

    this.checkLocalStorage();

    autorun(() => {
      this.saveSchedule();
    });
    makeAutoObservable(this, {
      schedule: observable,
      setIndexActivity: action.bound,
    });
  }
}
