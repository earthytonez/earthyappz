import { MapSquareFeatures } from "./MapSquare";

export interface IPlacementRules {
  all: MapSquareFeatures;
  one_of: MapSquareFeatures | undefined;
}

export function placementRuleText(feature: MapSquareFeatures) {
  switch (feature) {
    case "ADJACENT_TO_LAND":
      return "adjacent to land";
    case "ADJACENT_TO_WATER":
      return "adjacent to land";
    case "BUILDING_IN_PROGRESS":
      return "building in progress";
    case "LAND":
      return "on land";
    case "WATER":
      return "on water";
  }
}
