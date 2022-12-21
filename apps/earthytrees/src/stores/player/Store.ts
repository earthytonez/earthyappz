import RootStore from "../Root.store";

import { autorun, makeObservable, observable, computed, action } from "mobx";

import Coordinates from "../map/Coordinates";
import MapStore from "stores/map/Store";

import { MAP_HEIGHT, MAP_WIDTH } from "stores/map";

import { PLAYER_ACTION_TURNS } from "./constants";

import PlayerMover from "./Mover";

export const PLAYER_ACTION_NONE = "NONE";
export const PLAYER_ACTION_MOVE = "MOVE";
export const PLAYER_ACTION_PLANT_TREE = "PLANT_TREE";

const DENSE_PLANTING_STRATEGY = "DENSE";
const SPARSE_PLANTING_STRATEGY = "SPARSE";

const PLAYER_ACTION_NAMES = {
  NONE: "resting",
  MOVE: "moving",
  PLANT_TREE: "planting a tree",
};

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
      set: action.bound,
    });
  }
}

export default class PlayerStore {
  currentAction: PlayerAction = new PlayerAction(PLAYER_ACTION_NONE);
  currentLocation: Coordinates = new Coordinates(0, 0);

  playerMover: PlayerMover;

  mapStore: MapStore;

  plantingStrategy:
    | typeof DENSE_PLANTING_STRATEGY
    | typeof SPARSE_PLANTING_STRATEGY = DENSE_PLANTING_STRATEGY;

  setCurrentAction(playerActionName: PlayerActionName) {
    this.currentAction = new PlayerAction(playerActionName);
  }

  togglePlantingStrategy() {
    if (this.plantingStrategy === DENSE_PLANTING_STRATEGY) {
      this.plantingStrategy = SPARSE_PLANTING_STRATEGY;
    } else {
      this.plantingStrategy = DENSE_PLANTING_STRATEGY;
    }
    this.savePlayer();
  }

  setPlayerLocation(coordinates: Coordinates) {
    console.log(`Setting Player Location ${coordinates.X}, ${coordinates.Y}`);
    this.currentLocation = coordinates;
  }

  movePlayer() {
    let newLocation = this.playerMover.getNewLocation(
      this.currentLocation,
      this.plantingStrategy
    );
    if (newLocation) {
      this.setPlayerLocation(newLocation);
    }
  }

  startPlayerAction() {
    if (this.currentDestination) {
      if (this.playerMover.atCurrentDestination()) {
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

  get currentDestination(): Coordinates | undefined {
    return this.playerMover.currentDestination;
  }

  set currentDestination(dest: Coordinates | undefined) {
    this.playerMover.currentDestination = dest;
  }

  initializePlayer() {
    this.currentLocation = new Coordinates(rand(MAP_WIDTH), rand(MAP_HEIGHT));
  }

  checkLocalStorage() {
    let rawLocalStorage = localStorage.getItem("player");

    if (rawLocalStorage !== undefined && rawLocalStorage !== "") {
      let _player = JSON.parse(rawLocalStorage!);
      if (!_player) {
        return undefined;
      }
      if (_player.plantingStrategy) {
        this.plantingStrategy = _player.plantplantingStrategy;
      }
      if (_player.currentLocation) {
        this.currentLocation = new Coordinates(
          _player.currentLocation.X,
          _player.currentLocation.Y
        );
      }
      if (_player.currentDestination) {
        this.playerMover.setDestination(
          new Coordinates(
            _player.currentDestination.X,
            _player.currentDestination.Y
          )
        );
      }
    }

    if (!this.currentLocation) {
      console.log(
        `Initializing Player because ethis.currentLocation ${this.currentLocation}`
      );
      this.initializePlayer();
    }

    return;
  }

  savePlayer() {
    localStorage.setItem(
      "player",
      JSON.stringify({
        plantingStrategy: this.plantingStrategy,
        currentLocation: this.currentLocation,
        currentDestination: this.currentDestination,
      })
    );
  }

  constructor(private rootStore: RootStore) {
    this.mapStore = this.rootStore.mapStore;
    this.playerMover = new PlayerMover(this.mapStore, new Coordinates(0, 0));

    this.checkLocalStorage();

    autorun(() => {
      this.savePlayer();
    });

    makeObservable(this, {
      currentLocation: observable,
      currentAction: observable,
      checkLocalStorage: action.bound,
      initializePlayer: action.bound,
      setPlayerLocation: action.bound,
      savePlayer: action.bound,
      movePlayer: action.bound,
      togglePlantingStrategy: action.bound,
    });
  }
}
