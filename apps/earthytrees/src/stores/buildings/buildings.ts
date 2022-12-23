import Coordinates from "stores/map/Coordinates";
import { IPlacementRules } from "../map/Placement";

const ON_LAND: IPlacementRules = {
  all: "LAND",
  one_of: undefined,
};

const ON_WATERS_EDGE: IPlacementRules = {
  all: "WATER",
  one_of: "ADJACENT_TO_LAND",
};

export type TBuilding = "House" | "Dock";

export type TBuildingSlug = "house" | "dock";

interface IBuilding {
  name: TBuilding;
  placementRules: IPlacementRules;
  dimensions: Coordinates;
}

type Buildings = { [name: string]: IBuilding };

const BUILDINGS: Buildings = {
  house: {
    name: "House",
    placementRules: ON_LAND,
    dimensions: new Coordinates(3, 2),
  },
  dock: {
    name: "Dock",
    placementRules: ON_WATERS_EDGE,
    dimensions: new Coordinates(1, 2),
  },
};

export default BUILDINGS;
