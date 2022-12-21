import Coordinates from "./map/Coordinates";
import { makeObservable, computed, action, observable } from "mobx";

export type TBuilding = "HOUSE";

export default class UIStore {
  _isBuilding: boolean = false;
  _isBuildingType: TBuilding | undefined;
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

  get isBuildingType(): string {
    switch (this._isBuildingType) {
      case "HOUSE":
        return "house";
      default:
        return "";
    }
  }

  getBuildingDimensions(building: TBuilding) {
    switch (building) {
      case "HOUSE":
        return new Coordinates(3, 2);
      default:
        return new Coordinates(3, 2);
    }
  }

  setBuilding(building: TBuilding) {
    console.log(`Starting Building, ${building}`);
    this._isBuilding = true;
    this._isBuildingType = building;

    this._isBuildingDimensions = this.getBuildingDimensions(building);
  }
}
