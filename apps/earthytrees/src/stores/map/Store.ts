import RootStore from "stores/Root.store";

import { MAP_WIDTH, MAP_HEIGHT, LAKE_RADIUS } from "./constants";

import MapSquare, { MapSquareType, MOVABLE_MAP_TYPES } from "./MapSquare";
import { action, autorun, computed, observable, makeObservable } from "mobx";
import Coordinates from "./Coordinates";

export default class MapStore {
  rootStore: RootStore;
  _map: MapSquare[][] = [];

  get map() {
    console.log(this._map);
    return this._map;
  }

  saveMap() {
    localStorage.setItem("map", JSON.stringify(this.map));
  }

  generateNewMap(): MapSquare[][] {
    const retVal: MapSquare[][] = [];

    var lakeX =
      Math.floor(Math.random() * (MAP_WIDTH - LAKE_RADIUS * 2)) + LAKE_RADIUS;
    var lakeY =
      Math.floor(Math.random() * (MAP_HEIGHT - LAKE_RADIUS * 2)) + LAKE_RADIUS;
    for (var y = 0; y < MAP_HEIGHT; y++) {
      retVal[y] = [];
      for (var x = 0; x < MAP_WIDTH; x++) {
        var distance = Math.sqrt(
          Math.pow(x - lakeX, 2) + Math.pow(y - lakeY, 2)
        );
        if (distance < LAKE_RADIUS) {
          retVal![y]![x] = { type: "lake" };
        } else {
          retVal![y]![x] = { type: "nothing" };
        }
      }
    }

    return retVal;
  }

  checkLocalStorage() {
    let rawLocalStorage = localStorage.getItem("map");

    console.log("Checking Local Storage For Map");
    if (rawLocalStorage !== undefined && rawLocalStorage !== "") {
      let _map = JSON.parse(rawLocalStorage!);
      if (_map?.length === MAP_HEIGHT) {
        this._map = _map;
        return;
      }
    }
    this._map = this.generateNewMap();

    console.log(
      "MAP_STORE_LOAD",
      `Loading Map from Local Storage - Map = ${this.map}`
    );
  }

  clearMapSquare(coordinates: Coordinates) {
    this.setMapSquare(coordinates, "nothing");
  }

  setMapSquare(coordinates: Coordinates, squareType: MapSquareType) {
    this._map[coordinates.Y]![coordinates.X] = new MapSquare(squareType);
    this.saveMap();
  }

  squareType(coordinate: Coordinates): MapSquareType | undefined {
    let mapRow = this._map[coordinate.Y];
    if (mapRow === undefined) {
      return undefined;
    }
    let mapSquare = mapRow[coordinate.X];
    if (mapSquare === undefined) {
      return undefined;
    }
    return mapSquare.type;
  }

  squareMovable(coordinate: Coordinates): boolean {
    let mapRow = this._map[coordinate.Y];
    if (mapRow === undefined) {
      return false;
    }
    let mapSquare = mapRow[coordinate.X];
    if (mapSquare === undefined) {
      return false;
    }

    if (mapSquare.type === "lake") {
      return false;
    }

    return true;
  }

  getMapMovableMatrix() {
    return this._map.map((mapRows: MapSquare[]) => {
      return mapRows.map((mapSquare: MapSquare) => {
        if (MOVABLE_MAP_TYPES.includes(mapSquare.type)) {
          return 0;
        }
        return 1;
      });
    });
  }

  squarePlaceable(coordinate: Coordinates): boolean {
    let mapRow = this._map[coordinate.Y];
    if (mapRow === undefined) {
      return false;
    }
    let mapSquare = mapRow[coordinate.X];
    if (mapSquare === undefined) {
      return false;
    }

    if (mapSquare.type === "lake") {
      return false;
    }

    return true;
  }

  doSquareAction(
    action: "BUILD",
    dimensions: Coordinates | undefined,
    location: Coordinates
  ) {
    console.log(`Taking Action ${action}`);
    if (!dimensions) {
      return;
    }

    let placeable = true;
    for (let x = location.X; x <= location.X + dimensions.X - 1; x++) {
      for (let y = location.Y; y <= location.Y + dimensions.Y - 1; y++) {
        console.log(`Check Map Square ${x} ${y}, house`);
        if (!this.squarePlaceable(new Coordinates(x, y))) {
          placeable = false;
        }
      }
    }

    if (placeable) {
      this.clearAllSquares("house");

      for (let x = location.X; x <= location.X + dimensions.X - 1; x++) {
        for (let y = location.Y; y <= location.Y + dimensions.Y - 1; y++) {
          console.log(`Set Map Square ${x} ${y}, house`);
          this.setMapSquare(new Coordinates(x, y), "house");
        }
      }
    }

    return placeable;
  }

  clearAllSquares(squareType: MapSquareType) {
    for (let y = 0; y <= MAP_HEIGHT; y++) {
      for (let x = 0; x <= MAP_WIDTH; x++) {
        if (this.squareIs(new Coordinates(x, y), squareType)) {
          this.clearMapSquare(new Coordinates(x, y));
        }
      }
    }
  }

  squareIs(coordinate: Coordinates, squareType: string): boolean {
    let mapRow = this._map[coordinate.Y];
    if (mapRow === undefined) {
      return false;
    }
    let mapSquare = mapRow[coordinate.X];
    if (mapSquare === undefined) {
      return false;
    }
    let mapSquareType = mapSquare.type;
    return mapSquareType === squareType;
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
      setMapSquare: action.bound,
      saveMap: action.bound,
    });
  }
}
