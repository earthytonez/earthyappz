export type MapSquareType = "tree" | "lake" | "nothing";

export const MOVABLE_MAP_TYPES = ["tree", "nothing"];

export default class MapSquare {
  constructor(public type: MapSquareType) {}
}
