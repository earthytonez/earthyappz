import Coordinates from "./map/Coordinates";
import { makeObservable, computed, action, observable } from "mobx";

import BUILDINGS, { TBuildingSlug } from "./buildings/buildings";

export default class UIStore {
  _isBuilding: boolean = false;
  _isBuildingType: TBuildingSlug | undefined;
  _isBuildingDimensions: Coordinates | undefined;

  constructor() {
    makeObservable(this, {
      _isBuilding: observable,
      _isBuildingType: observable,
      _isBuildingDimensions: observable,
      setBuilding: action.bound,
      clearActions: action.bound,
      isBuilding: computed,
      isBuildingDimensions: computed,
    });
  }

  clearActions() {
    this._isBuilding = false;
    this._isBuildingType = undefined;
    this._isBuildingDimensions = undefined;
  }

  get isBuilding() {
    return this._isBuilding;
  }
  get isBuildingDimensions() {
    return this._isBuildingDimensions;
  }

  get isBuildingType(): TBuildingSlug | undefined {
    return this._isBuildingType;
  }

  getBuildingDimensions(building: TBuildingSlug) {
    return BUILDINGS[building]!.dimensions;
  }

  setBuilding(building: TBuildingSlug) {
    console.log(`Starting Building, ${building}`);
    this._isBuilding = true;
    this._isBuildingType = building;

    this._isBuildingDimensions = this.getBuildingDimensions(building);
  }
}
