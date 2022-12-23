import { MapSquareFeatures } from "./MapSquare";

export interface IPlacementRules {
  all: MapSquareFeatures;
  one_of: MapSquareFeatures | undefined;
}
