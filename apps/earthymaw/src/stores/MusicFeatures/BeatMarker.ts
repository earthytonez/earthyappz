class BeatMarker {
  num: number;

  measureBeat(sequencerLength: number | undefined) {
    if (!sequencerLength) {
      return this.num;
    }
    return this.num % sequencerLength;
  }

  increment() {
    if (isNaN(this.num)) {
      this.num = 0;
    }
    this.num++;
  }

  toString(): number {
    return this.num;
  }

  constructor(num: number) {
    this.num = num;
  }
}

export { BeatMarker };
