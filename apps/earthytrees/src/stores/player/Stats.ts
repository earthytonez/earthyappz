import { makeAutoObservable, computed, observable } from "mobx";

export type StatName = "stamina" | "thirst" | "hunger";

class Stat {
  private _current: number;

  get val() {
    return this._current;
  }

  constructor(public name: string, public max: number) {
    this._current = max;
    makeAutoObservable(this, {
      val: computed,
    });
  }

  set(val: number) {
    if (val !== undefined) {
      this._current = val;
    }
  }

  incr(amount: number = 1) {
    if (amount < 1) {
      if (Math.random() < amount) {
        this._current += 1;
      }
    } else {
      this._current += amount;
    }

    if (this._current >= this.max) {
      this._current = this.max;
    }
  }

  decr(amount: number = 1) {
    this._current -= amount;
    if (this._current < 0) {
      this._current = 0;
    }
  }
}

class PlayerStats {
  thirst: Stat = new Stat("thirst", 100);
  hunger: Stat = new Stat("hunger", 100);
  stamina: Stat = new Stat("stamina", 100);

  set(stat: string, val: number) {
    switch (stat) {
      case "thirst":
        this.thirst.set(val);
        break;
      case "hunger":
        this.hunger.set(val);
        break;
      case "stamina":
        this.stamina.set(val);
        break;
    }
  }

  changeStat(stat: string, val: number) {
    switch (stat) {
      case "thirst":
        this.thirst.incr(val);
        break;
      case "hunger":
        this.hunger.incr(val);
        break;
      case "stamina":
        this.stamina.incr(val);
        break;
    }
  }

  get allStats(): StatName[] {
    return ["thirst", "hunger", "stamina"];
  }

  constructor() {
    makeAutoObservable(this, {
      hunger: observable,
      stamina: observable,
      thirst: observable,
    });
  }
}

export default PlayerStats;
