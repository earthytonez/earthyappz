import RootStore from "../Root.store";

import { makeObservable, observable, action } from "mobx";

import Coordinates from "../map/Coordinates";
import MapStore from "stores/map/Store";

import { MAP_HEIGHT, MAP_WIDTH } from "stores/map";

import { PLAYER_ACTION_TURNS } from "./constants";

export const PLAYER_ACTION_NONE = "NONE";
export const PLAYER_ACTION_MOVE = "MOVE";
export const PLAYER_ACTION_PLANT_TREE = "PLANT_TREE";

function rand(max: number) {
  return Math.floor(Math.random() * max);
}

type PlayerActionName =
  | typeof PLAYER_ACTION_MOVE
  | typeof PLAYER_ACTION_PLANT_TREE
  | typeof PLAYER_ACTION_NONE;

class PlayerAction {
  turnsSinceStarting: number = 0;

  get name() {
    return this.actionName;
  }

  passTurn() {
    this.turnsSinceStarting++;
  }

  is(actionName: string) {
    return actionName == this.actionName;
  }

  set(actionName: PlayerActionName) {
    this.actionName = actionName;
  }

  incrementTurn() {
    this.turnsSinceStarting++;
  }

  constructor(public actionName: PlayerActionName) {
    this.turnsSinceStarting = 0;
  }
}

export default class PlayerStore {
  currentAction: PlayerAction = new PlayerAction(PLAYER_ACTION_NONE);
  currentLocation: Coordinates = new Coordinates(0, 0);

  mapStore: MapStore;

  setCurrentAction(playerActionName: PlayerActionName) {
    this.currentAction = new PlayerAction(playerActionName);
  }

  getPossibleDirections() {
    return [
      this.currentLocation.north(),
      this.currentLocation.south(),
      this.currentLocation.east(),
      this.currentLocation.west(),
    ].filter((location: Coordinates | undefined) => location !== undefined);
  }

  setPlayerLocation(coordinates: Coordinates) {
    this.currentLocation = coordinates;
  }

  movePlayer() {
    let possibleDirections = this.getPossibleDirections();

    let movePlace: Coordinates | undefined =
      possibleDirections[Math.floor(Math.random() * possibleDirections.length)];

    if (movePlace) {
      this.setPlayerLocation(new Coordinates(movePlace.X, movePlace.Y));
    } else {
      this.setPlayerLocation(
        new Coordinates(this.currentLocation.X, this.currentLocation.Y)
      );
    }
  }

  startPlayerAction() {
    if (this.mapStore.squareIs(this.currentLocation, "nothing")) {
      this.setCurrentAction(PLAYER_ACTION_PLANT_TREE);
    } else {
      this.movePlayer();
      this.setCurrentAction(PLAYER_ACTION_MOVE);
    }
  }

  tick() {
    if (this.currentAction.is(PLAYER_ACTION_NONE)) {
      this.startPlayerAction();
    }

    if (
      this.currentAction.turnsSinceStarting >
      PLAYER_ACTION_TURNS[
        this.currentAction.actionName as keyof typeof PLAYER_ACTION_TURNS
      ]
    ) {
      if (this.currentAction.actionName == PLAYER_ACTION_PLANT_TREE) {
        console.log("Planting Tree!");

        this.rootStore.mapStore.setMapSquare(this.currentLocation, "tree");
      }
      this.currentAction.set(PLAYER_ACTION_NONE);
    }
    if (!this.currentAction.is(PLAYER_ACTION_NONE)) {
      this.currentAction.incrementTurn();
    }
  }

  initializePlayer() {
    this.currentLocation = new Coordinates(rand(MAP_WIDTH), rand(MAP_HEIGHT));
  }

  checkLocalStorage() {}

  savePlayer() {}

  constructor(private rootStore: RootStore) {
    this.mapStore = this.rootStore.mapStore;

    makeObservable(this, {
      currentLocation: observable,
      currentAction: observable,
      checkLocalStorage: action.bound,
      savePlayer: action.bound,
    });
  }
}
