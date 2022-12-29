class Stat {
  private _current: number;

  get val() {
    return this._current;
  }

  constructor(public name: string, public max: number) {
    this._current = max;
  }

  incr(amount: number = 1) {
    this._current += amount;

    console.log(this.max);

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

class Stats {
  thirst: Stat = new Stat("thirst", 100);
  hunger: Stat = new Stat("hunger", 100);
  stamina: Stat = new Stat("stamina", 100);
}

export default Stats;
