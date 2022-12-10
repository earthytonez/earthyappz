import RootStore from "../Root.store";

import { makeObservable, observable, computed, action } from "mobx";

import Coordinates from "../map/Coordinates";
import MapStore from "stores/map/Store";

import { MAP_HEIGHT, MAP_WIDTH } from "stores/map";

import { PLAYER_ACTION_TURNS } from "./constants";

export const PLAYER_ACTION_NONE = "NONE";
export const PLAYER_ACTION_MOVE = "MOVE";
export const PLAYER_ACTION_PLANT_TREE = "PLANT_TREE";

export const RANDOM_DESTINATION_STRATEGY = "RANDOM";

const PLAYER_ACTION_NAMES = {
  NONE: "resting",
  MOVE: "moving",
  PLANT_TREE: "planting a tree",
};

function rand(max: number) {
  return Math.floor(Math.random() * max);
}

type DestinationStrategy = "RANDOM";

type PlayerActionName =
  | typeof PLAYER_ACTION_MOVE
  | typeof PLAYER_ACTION_PLANT_TREE
  | typeof PLAYER_ACTION_NONE;

class PlayerAction {
  turnsSinceStarting: number = 0;

  get name() {
    return PLAYER_ACTION_NAMES[this.actionName];
  }

  passTurn() {
    this.turnsSinceStarting++;
  }

  is(actionName: string) {
    return actionName === this.actionName;
  }

  set(actionName: PlayerActionName) {
    this.actionName = actionName;
    this.turnsSinceStarting = 0;
  }

  incrementTurn() {
    this.turnsSinceStarting++;
  }

  constructor(public actionName: PlayerActionName) {
    this.turnsSinceStarting = 0;

    makeObservable(this, {
      actionName: observable,
      name: computed,
    });
  }
}

const DENSE_PLANTING_STRATEGY = "DENSE";
const SPARSE_PLANTING_STRATEGY = "SPARSE";

export default class PlayerStore {
  currentAction: PlayerAction = new PlayerAction(PLAYER_ACTION_NONE);
  currentLocation: Coordinates = new Coordinates(0, 0);
  currentDestination: Coordinates | undefined = undefined;

  mapStore: MapStore;

  plantingStrategy:
    | typeof DENSE_PLANTING_STRATEGY
    | typeof SPARSE_PLANTING_STRATEGY = DENSE_PLANTING_STRATEGY;

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

  togglePlantingStrategy() {
    if (this.plantingStrategy == DENSE_PLANTING_STRATEGY) {
      return (this.plantingStrategy = SPARSE_PLANTING_STRATEGY);
    }
    return (this.plantingStrategy = DENSE_PLANTING_STRATEGY);
  }

  setPlayerLocation(coordinates: Coordinates) {
    this.currentLocation = coordinates;
  }

  setCurrentDestinationRandom() {
    let y = rand(MAP_HEIGHT);
    let x = rand(MAP_WIDTH);
    this.currentDestination = new Coordinates(x, y);
  }

  setCurrentDestination(strategy: DestinationStrategy) {
    switch (strategy) {
      case RANDOM_DESTINATION_STRATEGY:
        this.setCurrentDestinationRandom();
    }
  }

  moveWest() {
    console.log("MoveWest");
    return this.currentLocation.west();
  }

  moveEast(): Coordinates | undefined {
    console.log("MoveEast");
    return this.currentLocation.east();
  }

  moveSouth(): Coordinates | undefined {
    console.log(`MoveSouth ${this.currentLocation.south()}`);
    return this.currentLocation.south();
  }

  moveNorth(): Coordinates | undefined {
    console.log("MoveNorth");
    return this.currentLocation.north();
  }

  oneStepCloserMovementDirection(xDiff: number, yDiff: number) {
    console.log(`xDiff is ${xDiff}, yDiff is ${yDiff}`);
    if (Math.abs(xDiff / MAP_WIDTH) >= Math.abs(yDiff / MAP_HEIGHT)) {
      if (xDiff > 0) {
        return this.moveEast();
      }
      return this.moveWest();
    }
    if (yDiff > 0) {
      return this.moveSouth();
    }
    return this.moveNorth();
  }

  movePlayerOneStepCloserToDestination(): boolean {
    console.log("movePlayerOneStepCloserToDestination");
    if (!this.currentDestination) {
      return false;
    }
    console.log("movePlayerOneStepCloserToDestination currentDestination=True");

    const xDiff = this.currentDestination.X - this.currentLocation.X;
    const yDiff = this.currentDestination.Y - this.currentLocation.Y;

    console.log(
      `movePlayerOneStepCloserToDestination ${xDiff / MAP_WIDTH} ${
        yDiff / MAP_HEIGHT
      }`
    );

    const movePlace:
      | Coordinates
      | undefined = this.oneStepCloserMovementDirection(xDiff, yDiff);

    console.log(movePlace);
    if (movePlace) {
      this.setPlayerLocation(new Coordinates(movePlace.X, movePlace.Y));
    }

    return true;
  }

  movePlayerSparse() {
    if (this.currentDestination) {
      return this.movePlayerOneStepCloserToDestination();
    }
    this.setCurrentDestination(RANDOM_DESTINATION_STRATEGY);
    this.movePlayerOneStepCloserToDestination();
    return;
  }

  movePlayerDense(possibleDirections: Coordinates[]) {
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

  movePlayer() {
    let possibleDirections: Coordinates[] = this.getPossibleDirections() as Coordinates[];

    console.log(`Moving Player according to strategy ${this.plantingStrategy}`);

    switch (this.plantingStrategy) {
      case SPARSE_PLANTING_STRATEGY:
        this.movePlayerSparse();
        break;
      case DENSE_PLANTING_STRATEGY:
        this.movePlayerDense(possibleDirections);
        break;
      default:
        this.movePlayerDense(possibleDirections);
        break;
    }
  }

  atCurrentDestination() {
    return (
      this.currentLocation.X == this.currentDestination?.X &&
      this.currentLocation.Y == this.currentDestination?.Y
    );
  }

  startPlayerAction() {
    if (this.currentDestination) {
      if (this.atCurrentDestination()) {
        this.currentAction.set(PLAYER_ACTION_NONE);
        this.currentDestination = undefined;
      } else {
        this.currentAction.set(PLAYER_ACTION_MOVE);
        return this.movePlayer();
      }
    }

    if (this.mapStore.squareIs(this.currentLocation, "nothing")) {
      this.currentAction.set(PLAYER_ACTION_PLANT_TREE);
    } else {
      this.movePlayer();
      this.currentAction.set(PLAYER_ACTION_MOVE);
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
      if (this.currentAction.actionName === PLAYER_ACTION_PLANT_TREE) {
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
      initializePlayer: action.bound,
      setPlayerLocation: action.bound,
      savePlayer: action.bound,
      togglePlantingStrategy: action.bound,
      movePlayerOneStepCloserToDestination: action.bound,
    });
  }
}
