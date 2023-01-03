import RootStore from "../Root.store";

import { makeObservable, observable, action } from "mobx";

import Coordinates from "../map/Coordinates";
import MapStore from "stores/map/Store";

import { MAP_HEIGHT, MAP_WIDTH } from "stores/map";

import PlayerMover from "./Mover";
import PlayerStats from "./Stats";
import PlayerStatus from "./Status";
import PlayerTask from "./Task";
import PlayerAction, { PlayerActionName, PLAYER_ACTION_NONE } from "./Action";
import { Activity } from "stores/schedule/Store";
import { PLAYER_ACTION_MOVE } from ".";
import TaskSelector from "./TaskSelector";

export const PLAYER_ACTION_DRINK = "DRINK";
export const PLAYER_ACTION_EAT = "EAT";

const DENSE_PLANTING_STRATEGY = "DENSE";
const SPARSE_PLANTING_STRATEGY = "SPARSE";

function rand(max: number) {
  return Math.floor(Math.random() * max);
}

export default class PlayerStore {
  /* The action is the current thing you are doing this turn, the task is the over 
  task you are working on that has to be completed before you can move on */
  stats: PlayerStats;

  currentAction: PlayerAction;
  currentTask: PlayerTask;
  currentLocation: Coordinates = new Coordinates(0, 0);
  currentStatus: PlayerStatus = new PlayerStatus(undefined);

  taskSelector: TaskSelector = new TaskSelector();

  playerMover: PlayerMover;

  mapStore: MapStore;

  plantingStrategy:
    | typeof DENSE_PLANTING_STRATEGY
    | typeof SPARSE_PLANTING_STRATEGY = DENSE_PLANTING_STRATEGY;

  setCurrentAction(playerActionName: PlayerActionName) {
    this.currentAction = new PlayerAction(
      playerActionName,
      this.stats,
      this,
      this.mapStore
    );
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

  movePlayer() {
    let newLocation = this.playerMover.getNewLocation(
      this.currentLocation,
      this.plantingStrategy
    );
    console.log(
      `PlayerStore: movePlayer to newLocation ${JSON.stringify(newLocation)}`
    );
    if (newLocation) {
      this.setPlayerLocation(newLocation);
    }
  }

  atCurrentDestination(): boolean {
    return this.playerMover.atCurrentDestination();
  }

  unsetCurrentDestination() {
    this.playerMover.currentDestination = undefined;
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

  // performOccupiedAction() {
  //   switch (this.currentAction.actionName) {
  //     case PLAYER_ACTION_MOVE:
  //       this.tryMovePlayer();
  //       break;
  //     case PLAYER_ACTION_FORCE_REST:
  //       if (this.stats.stamina.val >= this.stats.stamina.max) {
  //         this.currentAction.set(PLAYER_ACTION_NONE);
  //       }
  //       break;
  //     case PLAYER_ACTION_FORCE_DRINK:
  //       if (this.stats.thirst.val >= this.stats.thirst.max) {
  //         this.currentAction.set(PLAYER_ACTION_NONE);
  //       }
  //       break;
  //     case PLAYER_ACTION_FORCE_EAT:
  //       if (this.stats.hunger.val >= this.stats.hunger.max) {
  //         this.currentAction.set(PLAYER_ACTION_NONE);
  //       }
  //       break;
  //     case PLAYER_ACTION_PLANT_A_TREE:
  //       if (
  //         this.currentAction.turnsSinceStarting >
  //         PLAYER_ACTION_TURNS[PLAYER_ACTION_PLANT_A_TREE]
  //       ) {
  //         console.log("Planting Tree!");

  //         this.rootStore.mapStore.improveMapSquare(
  //           this.currentLocation,
  //           "tree"
  //         );
  //         this.currentAction.set(PLAYER_ACTION_NONE);
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  // }

  tick(turn: number) {
    /* First update stamina/thirst/hunger stats, then check if you are unhealthy */
    let playerStatus = this.currentAction.tick(this.currentAction);
    if (playerStatus) {
      this.currentStatus.set(playerStatus);
    }

    /* Save Player every 10 turns */
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

    if (this.scheduledActivity !== undefined) {
      this.currentTask.set(
        this.taskSelector.select(
          this.scheduledActivity,
          this.currentStatus,
          this.hasDestination
        )
      );
    }

    if (this.currentTask.getAction() !== undefined) {
      this.currentAction.set(this.currentTask.getAction()!);
    }
    this.currentAction.perform();

    // TO_DELETE: Moved to Action.ts
    //
    // if (this.currentAction.actionName == PLAYER_ACTION_FIND_WATER) {
    //   let destination = this.rootStore.mapStore._map.breadthFirstSearch(
    //     this.currentLocation,
    //     "Feature",
    //     "ADJACENT_TO_WATER"
    //   );
    //   if (destination) {
    //     this.playerMover.setDestination(destination);
    //     playerAction.set(PLAYER_ACTION_MOVE);
    //   } else {
    //     console.log("Warning: Could not find water destination");
    //   }
    // }
    this.currentTask.incrementTurn();
  }

  get scheduledActivity(): Activity | undefined {
    return this.rootStore.scheduleStore.getCurrentActivity();
  }

  get hasDestination(): boolean {
    return this.playerMover.currentDestination !== undefined;
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
    this.playerMover = new PlayerMover(
      this.mapStore,
      new Coordinates(0, 0),
      this
    );
    this.stats = new PlayerStats();
    this.currentAction = new PlayerAction(
      PLAYER_ACTION_NONE,
      this.stats,
      this,
      this.mapStore
    );
    this.currentTask = new PlayerTask(undefined, this.mapStore, this);
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
