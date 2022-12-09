export type MapSquareType = "tree" | "lake" | "nothing";

export default class MapSquare {
  constructor(public type: MapSquareType) {}
}
