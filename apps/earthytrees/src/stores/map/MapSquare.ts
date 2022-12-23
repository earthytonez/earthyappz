import BUILDINGS from "stores/buildings/buildings";

import { TBuildingSlug } from "stores/buildings/buildings";

export type MapSquareImmutableType = "lake" | "flat_land";
export type MapSquareImprovementType = "tree" | "house" | "dock" | undefined;

export type MapSquareType = MapSquareImmutableType | MapSquareImprovementType;

const MOVABLE_MAP_TYPES = ["flat_land"];

export default class MapSquare {
  public improvementType: MapSquareImprovementType;

  constructor(public immutableType: MapSquareImmutableType) {}

  isBuildable(buildingType: TBuildingSlug): boolean {
    let allSquarePlacementRules = BUILDINGS[buildingType]!.placementRules.all;
    return this.features.includes(allSquarePlacementRules);
  }

  get features(): MapSquareFeatures[] {
    let features: MapSquareFeatures[] = [];
    if (this.immutableType === "lake") {
      features.push("WATER");
    }

    if (this.immutableType === "flat_land") {
      features.push("LAND");
    }

    return features;
  }

  improve(improvementType: MapSquareImprovementType) {
    this.improvementType = improvementType;
  }

  terraform(immutableType: MapSquareImmutableType) {
    this.immutableType = immutableType;
  }

  clearImprovements() {
    this.improvementType = undefined;
  }

  get isMovable(): boolean {
    return MOVABLE_MAP_TYPES.includes(this.immutableType);
  }

  get type(): MapSquareType {
    if (this.improvementType) {
      return this.improvementType;
    }
    return this.immutableType;
  }
}

export type MapSquareFeatures =
  | "ADJACENT_TO_LAND"
  | "ADJACENT_TO_WATER"
  | "LAND"
  | "WATER";
