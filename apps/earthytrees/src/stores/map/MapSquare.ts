import BUILDINGS from "stores/buildings/buildings";

import { TBuildingSlug } from "stores/buildings/buildings";

export type MapSquareImmutableType = "lake" | "flat_land";
export type MapSquareImprovementType = "tree" | "house" | "dock" | undefined;
export type MapSquareImprovementState = "IN_PROGRESS" | "COMPLETE" | "DAMAGED";

export type MapSquareType = MapSquareImmutableType | MapSquareImprovementType;

const MOVABLE_MAP_TYPES = ["flat_land"];

export interface IMapSquare {}

interface ImprovementResources {
  wood?: number;
}

interface IMapSquareImprovement {
  type: MapSquareImprovementType;
  state: MapSquareImprovementState;
  age: number;
  percentComplete: number;
  resourcesApplied?: ImprovementResources;
  resourcesRequired?: ImprovementResources;
}

class MapSquareImprovement {
  name() {}
  state: MapSquareImprovementState = "IN_PROGRESS";
  age: number = 0;
  percentComplete = 0;
  resourcesApplied: ImprovementResources = {};
  resourcesRequired: ImprovementResources = {};

  inProgress() {
    return this.state == "IN_PROGRESS" && this.percentComplete < 100;
  }

  completeImprovement() {
    this.state = "COMPLETE";
  }

  makeProgress(percent: number = 1) {
    this.percentComplete += percent;
    if (this.percentComplete > 100) {
      this.completeImprovement();
    }
  }

  constructor(public type: MapSquareImprovementType, metadata?: any) {
    if (metadata && metadata.state) {
      this.state = metadata.state;
    }
  }
}

class InvalidMapSquareError extends Error {}

export default class MapSquare {
  public improvement?: MapSquareImprovement;

  constructor(public immutableType: MapSquareImmutableType) {}

  isBuildable(buildingType: TBuildingSlug): boolean {
    let allSquarePlacementRules = BUILDINGS[buildingType]!.placementRules.all;
    return this.features.includes(allSquarePlacementRules);
  }

  makeBuildingProgress() {
    if (this.improvement?.inProgress) {
      this.improvement.makeProgress();
      return;
    }
    throw new InvalidMapSquareError("Map Square not in progress");
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

  hasFeature(feature: MapSquareFeatures) {
    return this.features.includes(feature);
  }

  hasImmutableType(immutableType: MapSquareImmutableType) {
    return this.immutableType == immutableType;
  }

  hasImprovementType(improvementType: MapSquareImprovementType) {
    return this.improvement?.type == improvementType;
  }

  newImprovement(improvementType: MapSquareImprovementType) {
    this.improvement = new MapSquareImprovement(improvementType);
  }

  newCompleteImprovement(improvementType: MapSquareImprovementType) {
    this.improvement = new MapSquareImprovement(improvementType, {
      state: "COMPLETE",
    });
  }

  makeCompleteImprovement(improvement: IMapSquareImprovement) {
    this.improvement = new MapSquareImprovement(improvement.type, {
      state: "COMPLETE",
    });
  }

  improve(improvement: IMapSquareImprovement) {
    this.improvement = new MapSquareImprovement(improvement.type, improvement);
  }

  terraform(immutableType: MapSquareImmutableType) {
    this.immutableType = immutableType;
  }

  clearImprovements() {
    this.improvement = undefined;
  }

  get isMovable(): boolean {
    return MOVABLE_MAP_TYPES.includes(this.immutableType);
  }

  get type(): MapSquareType {
    if (this.improvement?.type) {
      return this.improvement.type;
    }
    return this.immutableType;
  }
}

export type MapSquareFeatures =
  | "BUILDING_IN_PROGRESS"
  | "ADJACENT_TO_LAND"
  | "ADJACENT_TO_WATER"
  | "LAND"
  | "WATER";
