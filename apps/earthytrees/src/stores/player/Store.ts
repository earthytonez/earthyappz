import RootStore from "../Root.store";

import { makeObservable, observable, computed, action } from "mobx";

import Coordinates from "../map/Coordinates";
import MapStore from "stores/map/Store";

import { MAP_HEIGHT, MAP_WIDTH } from "stores/map";

import { PLAYER_ACTION_TURNS } from "./constants";

import PlayerMover from "./Mover";
import PlayerStats from "./Stats";
import { Activity } from "stores/schedule/Store";

export const PLAYER_ACTION_NONE = "NONE";
export const PLAYER_ACTION_FIND_WATER = "FIND_WATER";
export const PLAYER_ACTION_MOVE = "MOVE";
export const PLAYER_ACTION_FORCE_REST = "FORCE_REST";
export const PLAYER_ACTION_FORCE_EAT = "FORCE_EAT";
export const PLAYER_ACTION_FORCE_DRINK = "FORCE_DRINK";
export const PLAYER_ACTION_PLANT_TREE = "PLANT_TREE";

export const PLAYER_ACTION_DRINK = "DRINK";
export const PLAYER_ACTION_EAT = "EAT";

const DENSE_PLANTING_STRATEGY = "DENSE";
const SPARSE_PLANTING_STRATEGY = "SPARSE";

const PLAYER_ACTION_NAMES = {
  NONE: "resting",
  MOVE: "moving",
  PLANT_TREE: "planting a tree",
  FIND_WATER: "looking for water",
  DRINK: "drinking",
  EAT: "eating",
  FORCE_REST: "fatigued",
  FORCE_DRINK: "parched",
  FORCE_EAT: "starving",
};

const OCCUPIED_ACTIONS = [
  PLAYER_ACTION_MOVE,
  PLAYER_ACTION_FORCE_REST,
  PLAYER_ACTION_FORCE_EAT,
  PLAYER_ACTION_FORCE_DRINK,
  PLAYER_ACTION_PLANT_TREE,
];

function rand(max: number) {
  return Math.floor(Math.random() * max);
}

type PlayerActionName =
  | typeof PLAYER_ACTION_DRINK
  | typeof PLAYER_ACTION_EAT
  | typeof PLAYER_ACTION_FIND_WATER
  | typeof PLAYER_ACTION_MOVE
  | typeof PLAYER_ACTION_PLANT_TREE
  | typeof PLAYER_ACTION_NONE
  | typeof PLAYER_ACTION_FORCE_REST
  | typeof PLAYER_ACTION_FORCE_EAT
  | typeof PLAYER_ACTION_FORCE_DRINK;

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
  stats: PlayerStats;

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
    this.currentLocation = coordinates;
  }

  get actionFromSchedule(): Activity | undefined {
    return this.rootStore.scheduleStore.getCurrentActivity();
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
    switch (this.actionFromSchedule) {
      case "PLANT_TREE":
        if (this.mapStore.squareIs(this.currentLocation, "flat_land")) {
          this.currentAction.set(PLAYER_ACTION_PLANT_TREE);
        } else {
          this.movePlayer();
          this.currentAction.set(PLAYER_ACTION_MOVE);
        }
        break;
      case "REST":
        this.currentAction.set(PLAYER_ACTION_NONE);
        break;
      case "GATHER_WATER":
        if (
          this.mapStore.checkSquareContext(
            this.currentLocation,
            "ADJACENT_TO_WATER"
          )
        ) {
          this.currentAction.set(PLAYER_ACTION_DRINK);
          break;
        }
        this.currentAction.set(PLAYER_ACTION_FIND_WATER);
        let destination = this.rootStore.mapStore._map.breadthFirstSearch(
          "Feature",
          "ADJACENT_TO_WATER"
        );
        if (destination) {
          this.playerMover.setDestination(destination);
          this.currentAction.set(PLAYER_ACTION_MOVE);
        } else {
          console.log("Warning: Could not find water destination");
        }
        break;
      default:
        this.currentAction.set(PLAYER_ACTION_NONE);
        break;
    }
  }

  tickStats() {
    if (
      this.currentAction.is(PLAYER_ACTION_NONE) ||
      this.currentAction.is(PLAYER_ACTION_FORCE_REST) ||
      this.currentAction.is(PLAYER_ACTION_DRINK) ||
      this.currentAction.is(PLAYER_ACTION_EAT)
    ) {
      this.stats.stamina.incr();
    } else {
      this.stats.stamina.decr();
    }

    if (
      this.currentAction.is(PLAYER_ACTION_DRINK) ||
      this.currentAction.is(PLAYER_ACTION_FORCE_DRINK)
    ) {
      this.stats.thirst.incr();
      this.currentAction.set(PLAYER_ACTION_NONE);
    } else {
      this.stats.thirst.decr();
    }

    if (
      this.currentAction.is(PLAYER_ACTION_EAT) ||
      this.currentAction.is(PLAYER_ACTION_FORCE_EAT)
    ) {
      this.stats.hunger.incr();
      this.currentAction.set(PLAYER_ACTION_NONE);
    } else {
      this.stats.hunger.decr();
    }
  }

  get occupied(): boolean {
    return OCCUPIED_ACTIONS.includes(this.currentAction.actionName);
  }

  tryMovePlayer(): any {
    if (this.currentDestination) {
      if (this.playerMover.atCurrentDestination()) {
        this.currentAction.set(PLAYER_ACTION_NONE);
        this.currentDestination = undefined;
      } else {
        this.currentAction.set(PLAYER_ACTION_MOVE);
        return this.movePlayer();
      }
    } else {
      this.currentAction.set(PLAYER_ACTION_NONE);
    }
  }

  performOccupiedAction() {
    switch (this.currentAction.actionName) {
      case PLAYER_ACTION_MOVE:
        console.log("PLAYER_ACTION_MOVE tryMovePlayer");
        this.tryMovePlayer();
        break;
      case PLAYER_ACTION_FORCE_REST:
        console.log(`${this.stats.stamina.val} >= ${this.stats.stamina.max}`);
        if (this.stats.stamina.val >= this.stats.stamina.max) {
          this.currentAction.set(PLAYER_ACTION_NONE);
        }
        break;
      case PLAYER_ACTION_FORCE_DRINK:
        if (this.stats.thirst.val >= this.stats.thirst.max) {
          this.currentAction.set(PLAYER_ACTION_NONE);
        }
        break;
      case PLAYER_ACTION_FORCE_EAT:
        if (this.stats.hunger.val >= this.stats.hunger.max) {
          this.currentAction.set(PLAYER_ACTION_NONE);
        }
        break;
      case PLAYER_ACTION_PLANT_TREE:
        if (
          this.currentAction.turnsSinceStarting >
          PLAYER_ACTION_TURNS[PLAYER_ACTION_PLANT_TREE]
        ) {
          console.log("Planting Tree!");

          this.rootStore.mapStore.improveMapSquare(
            this.currentLocation,
            "tree"
          );
          this.currentAction.set(PLAYER_ACTION_NONE);
        }
        break;
      default:
        break;
    }
  }

  tick(turn: number) {
    /* First update stamina/thirst/hunger stats, then check if you are unhealthy
     */
    this.tickStats();

    if (turn % 10 == 0) {
      this.savePlayer();
    }

    /*
     * Second, check if you are unhealthy, then see if you're busy
     * // This is part of occupied.
     */
    // if (this.stats.stamina.val <= 0) {
    //   this.currentAction.set(PLAYER_ACTION_FORCE_REST);
    //   return;
    // }

    /* Third, see if you are busy For example, if you are moving and have a destination, you are occupied. */
    if (this.occupied) {
      this.performOccupiedAction();
    }

    /* Finally, Pick a new action if you're not busy */

    if (this.currentAction.is(PLAYER_ACTION_NONE)) {
      this.startPlayerAction();
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

      if (_player.stats) {
        console.log(_player.stats);
        Object.keys(_player.stats).forEach((stat: any) => {
          console.log(stat);
          this.stats.set(
            _player.stats[stat].name,
            _player.stats[stat]._current
          );
        });
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
        stats: this.stats,
      })
    );
  }

  constructor(private rootStore: RootStore) {
    this.mapStore = this.rootStore.mapStore;
    this.playerMover = new PlayerMover(this.mapStore, new Coordinates(0, 0));
    this.stats = new PlayerStats();

    this.checkLocalStorage();

    makeObservable(this, {
      currentLocation: observable,
      currentAction: observable,
      stats: observable,
      checkLocalStorage: action.bound,
      initializePlayer: action.bound,
      setPlayerLocation: action.bound,
      savePlayer: action.bound,
      movePlayer: action.bound,
      togglePlantingStrategy: action.bound,
    });
  }
}
