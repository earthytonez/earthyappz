import RootStore from "stores/Root.store";

import { MAP_WIDTH, MAP_HEIGHT } from "./constants";

import { MapSquareImprovementType, MapSquareType } from "./MapSquare";
import { action, autorun, computed, observable, makeObservable } from "mobx";
import Coordinates from "./Coordinates";

import BUILDINGS from "../buildings/buildings";
import { TBuildingSlug } from "../buildings/buildings";
import { IPlacementRules, placementRuleText } from "./Placement";
import { MapSquareFeatures } from "./MapSquare";

import { IMapSquare } from "./MapSquare";
import MapMatrix from "./MapMatrix";
import MapGenerator from "./MapGenerator";

export default class MapStore {
  rootStore: RootStore;
  _map: MapMatrix = new MapMatrix();

  get map() {
    return this._map.map;
  }

  saveMap() {
    localStorage.setItem("map", JSON.stringify(this.map));
  }

  isBuildable(coordinates: Coordinates, buildingType: TBuildingSlug): boolean {
    return this._map.squareBuildable(coordinates, buildingType);
  }

  generateNewMap(): MapMatrix {
    let mapGenerator = new MapGenerator(this._map);
    return mapGenerator.generate();
  }

  validMap(_map: IMapSquare[][]) {
    if (_map?.length !== MAP_HEIGHT) return false;
    if (_map[0]?.length !== MAP_WIDTH) return false;

    let valid = true;
    _map.forEach((mapColumn: any[]) => {
      mapColumn.forEach((mapSquare: any[]) => {
        if (!("immutableType" in mapSquare)) {
          valid = false;
        }
      });
    });

    return valid;
  }

  checkLocalStorage() {
    let rawLocalStorage = localStorage.getItem("map");

    console.log("Checking Local Storage For Map");
    if (
      rawLocalStorage !== undefined &&
      rawLocalStorage !== "" &&
      rawLocalStorage !== "undefined"
    ) {
      let _map = JSON.parse(rawLocalStorage!);
      if (this.validMap(_map)) {
        this._map.setMap(_map);
        return;
      }
    }

    console.log("MAP_LOADER, Generating New Map");
    this._map = this.generateNewMap();

    console.log("MAP_STORE_LOAD", `Loading Map from Local Storage - Map`);
  }

  clearMapSquare(coordinates: Coordinates) {
    this._map.clearImprovements(coordinates);
    this.saveMap();
  }

  squareType(coordinates: Coordinates): MapSquareType | undefined {
    return this._map.squareType(coordinates);
  }

  squareMovable(coordinates: Coordinates): boolean {
    return this._map.squareMovable(coordinates);
  }

  getMapMovableMatrix() {
    return this._map.movableMatrix();
  }

  checkPlacementRules(
    placementRules: IPlacementRules,
    squares: Coordinates[]
  ): boolean {
    let allPlacementRulesPassed = true;
    let oneOfPlacementRulesPassed = placementRules.one_of === undefined;

    squares.forEach((square: Coordinates) => {
      let squareIsContext = this.squareIsContext(square);
      if (!squareIsContext.includes(placementRules.all)) {
        allPlacementRulesPassed = false;
      }

      if (
        placementRules.one_of &&
        squareIsContext.includes(placementRules.one_of)
      ) {
        oneOfPlacementRulesPassed = true;
      }
    });

    if (!allPlacementRulesPassed) {
      this.rootStore.sendNotification(
        `Sorry, couldn't place here, all squares must be ${placementRuleText(
          placementRules.all
        )}`
      );
    }

    if (!oneOfPlacementRulesPassed && placementRules.one_of) {
      this.rootStore.sendNotification(
        `Sorry, couldn't place here, at least one square must be ${placementRuleText(
          placementRules.one_of
        )}`
      );
    }

    return allPlacementRulesPassed && oneOfPlacementRulesPassed;
  }

  buildingFootprint(location: Coordinates, dimensions: Coordinates) {
    let squares = [];
    for (let x = location.X; x <= location.X + dimensions.X - 1; x++) {
      for (let y = location.Y; y <= location.Y + dimensions.Y - 1; y++) {
        squares.push(new Coordinates(x, y));
      }
    }
    return squares;
  }

  doSquareAction(
    action: "BUILD",
    target: TBuildingSlug | undefined,
    dimensions: Coordinates | undefined,
    location: Coordinates
  ) {
    if (!target || !dimensions) {
      throw new Error("Must provide target and dimensions");
    }

    if (action === "BUILD" && !BUILDINGS[target]) {
      throw new Error("Building Type doesn't exist");
    }

    let buildingFootprint = this.buildingFootprint(location, dimensions);

    let placeable = this.checkPlacementRules(
      BUILDINGS[target]!.placementRules,
      buildingFootprint
    );

    if (placeable) {
      this.clearAllSquares(target);

      for (let x = location.X; x <= location.X + dimensions.X - 1; x++) {
        for (let y = location.Y; y <= location.Y + dimensions.Y - 1; y++) {
          this._map.improveSquare(new Coordinates(x, y), target);
        }
      }
      this.saveMap();
    }

    return placeable;
  }

  clearAllSquares(squareType: MapSquareType) {
    for (let y = 0; y < MAP_HEIGHT; y++) {
      for (let x = 0; x < MAP_WIDTH; x++) {
        if (this.squareIs(new Coordinates(x, y), squareType)) {
          this.clearMapSquare(new Coordinates(x, y));
        }
      }
    }
  }

  /*
   * Square Is Context tells you the features the square has based on it's adjacencies.
   * For example, water near land or land near water.
   */
  squareIsContext(coordinate: Coordinates): MapSquareFeatures[] {
    return this._map.squareIsContext(coordinate);
  }

  /*
   * Square Is Context tells you the features the square has based on it's adjacencies.
   * For example, water near land or land near water.
   */
  checkSquareContext(
    coordinate: Coordinates,
    mapSquareFeatures: MapSquareFeatures
  ): boolean {
    return this.squareIsContext(coordinate).includes(mapSquareFeatures);
  }

  uniqByFilter<T>(array: T[]) {
    return array.filter((value, index) => array.indexOf(value) === index);
  }

  squareIs(coordinates: Coordinates, squareType: MapSquareType): boolean {
    return this._map.squareIs(coordinates, squareType);
  }

  improveMapSquare(c: Coordinates, type: MapSquareImprovementType) {
    this._map.improveSquare(c, type);
    this.saveMap();
  }

  overrideMap(map: IMapSquare[][]) {
    if (this.validMap(map)) {
      this._map.setMap(map);
    }
  }

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    this.checkLocalStorage();

    autorun(() => {
      this.saveMap();
    });

    makeObservable(this, {
      _map: observable,
      map: computed,
      checkLocalStorage: action.bound,
      saveMap: action.bound,
    });
  }
}
