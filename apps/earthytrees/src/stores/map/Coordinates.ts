import { MAP_HEIGHT, MAP_WIDTH } from "./constants";

export default class Coordinates {
  north(): Coordinates | undefined {
    if (this.Y + 1 < MAP_HEIGHT) {
      return new Coordinates(this.X, this.Y + 1);
    }
    return undefined;
  }

  south() {
    if (this.Y - 1 > 0) {
      return new Coordinates(this.X, this.Y - 1);
    }
    return undefined;
  }

  east() {
    if (this.X + 1 < MAP_WIDTH) {
      return new Coordinates(this.X + 1, this.Y);
    }
    return undefined;
  }

  west() {
    if (this.X + 1 < MAP_WIDTH) {
      return new Coordinates(this.X - 1, this.Y);
    }
    return undefined;
  }

  constructor(public X: number, public Y: number) {}
}
