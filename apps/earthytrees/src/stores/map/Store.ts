import RootStore from "stores/Root.store";

import { MAP_WIDTH, MAP_HEIGHT, LAKE_RADIUS } from "./constants";

import MapSquare, { MapSquareType } from "./MapSquare";
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
    let _map = localStorage.getItem("map");

    if (_map !== "undefined" && _map !== "") {
      if (this._map.length == MAP_HEIGHT + 1) {
        this._map = JSON.parse(_map!);
        return;
      }
    }
    this._map = this.generateNewMap();

    console.log(
      "MAP_STORE_LOAD",
      `Loading Map from Local Storage - Map = ${this.map}`
    );
  }

  setMapSquare(coordinates: Coordinates, squareType: MapSquareType) {
    this._map[coordinates.Y]![coordinates.X] = new MapSquare(squareType);
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
      saveMap: action.bound,
    });
  }
}