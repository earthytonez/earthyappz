import RootStore from "../Root.store";

import { autorun, makeObservable, observable, action } from "mobx";

const MONTH_DAYS = [
  undefined,
  31,
  28, // 29
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];

const MONTH_NAMES = [
  undefined,
  "January",
  "February", // 29
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default class TimeStore {
  public year: number = 0;
  public month: number = 3; // March
  public day: number = 1; // 1st
  public hour: number = 5;
  public minute: number = 0;
  public ampm: "am" | "pm" = "am";

  toggleAMPM() {
    if (this.ampm === "am") {
      this.ampm = "pm";
      return;
    }
    this.ampm = "am";
  }

  isLeapYear(): boolean {
    return this.month % 4 === 0;
  }

  get formattedYear() {
    return String(this.year).padStart(4, "0");
  }

  get formattedMonth() {
    return MONTH_NAMES[this.month];
  }

  get formattedDay() {
    return this.day;
  }

  get formattedHour() {
    return this.hour;
  }

  get formattedMinute() {
    return String(this.minute).padStart(2, "0");
  }

  get formattedAMPM() {
    return this.ampm.toUpperCase();
  }

  twentyFourHour(): number {
    if (this.ampm === "pm") {
      return this.hour + 12;
    }
    return this.hour;
  }

  tickMinute(): boolean {
    if (this.minute < 59) {
      this.minute = this.minute + 1;
      return false;
    }
    this.minute = 0;
    return true;
  }

  tickHour(doTick: boolean): boolean {
    if (!doTick) return false;
    if (this.hour < 12) {
      this.hour++;
      this.saveTime();
      return false;
    }
    this.hour = 1;

    this.toggleAMPM();

    if (this.ampm === "am") {
      return true;
    }
    return false;
  }

  tickDay(doTick: boolean): boolean {
    if (!doTick) return false;
    let daysOfMonth = MONTH_DAYS[this.month];
    if (!daysOfMonth) {
      return false;
    }
    if (this.isLeapYear() && this.month === 2) {
      daysOfMonth++;
    }
    if (this.day < daysOfMonth) {
      this.day++;
      return false;
    }
    this.day = 1;
    return true;
  }

  tickMonth(doTick: boolean): boolean {
    if (!doTick) return false;
    if (this.month < 12) {
      this.month++;
      return false;
    }
    this.month = 1;
    return true;
  }

  tickYear(doTick: boolean) {
    if (!doTick) return;
    this.year++;
  }

  tick() {
    let tickHour = this.tickMinute();
    let tickDay = this.tickHour(tickHour);
    let tickMonth = this.tickDay(tickDay);
    let tickYear = this.tickMonth(tickMonth);
    this.tickYear(tickYear);
  }

  initializeTime() {
    this.year = 0;
    this.month = 3; // March
    this.day = 1; // 1st
    this.hour = 5;
    this.minute = 0;
  }

  checkLocalStorage() {
    let rawLocalStorage = localStorage.getItem("time");

    if (rawLocalStorage !== undefined && rawLocalStorage !== "") {
      let _time = JSON.parse(rawLocalStorage!);
      if (!_time) {
        return undefined;
      }
      console.log("Setting Time");
      console.log(_time);
      this.year = _time.year;
      this.month = _time.month;
      this.day = _time.day;
      this.hour = _time.hour;
      this.minute = _time.minute;
    }
    return;
  }

  saveTime() {
    localStorage.setItem(
      "time",
      JSON.stringify({
        year: this.year,
        month: this.month,
        day: this.day,
        hour: this.hour,
        minute: this.minute,
      })
    );
  }

  constructor(_rootStore: RootStore) {
    console.log(_rootStore);

    this.checkLocalStorage();

    autorun(() => {
      this.saveTime();
    });

    makeObservable(this, {
      year: observable,
      month: observable,
      day: observable,
      hour: observable,
      minute: observable,
      tick: action.bound,
    });
  }
}
