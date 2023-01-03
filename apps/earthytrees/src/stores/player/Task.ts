/* 

Three things determine what you will do on a given turn

1. What is your schedule (What do you intend to do)
2. Is there a forcing function/status/unhealthy state.
3. What is your task (What are you in the process of doing)
    If you have not ask, you will look to your schedule for your next task.
4. What id your action (What are you doing right now)

Example: I am planting trees.

My Schedule is planting trees.
My task is to either move to a place where I can plant trees, or plant a tree.
    So, If I am moving to a place where I can plant trees, that is my task, then
    when done with that task, I fall back to my schedule and either  move again
    or start planting.

    If I am forced to drink, that is technically a schedule, not a task. 
My action is I am moving or planting a tree.

*/

import MapStore from "stores/map/Store";

import { makeObservable, computed, observable, action } from "mobx";
import {
  PLAYER_ACTION_MOVE,
  PLAYER_ACTION_NONE,
  PLAYER_ACTION_REST,
  PLAYER_ACTION_PLANT_A_TREE,
  PLAYER_ACTION_DIG_A_HOLE,
  PLAYER_ACTION_DRINK,
  PLAYER_ACTION_FIND_LAND,
  PLAYER_ACTION_FIND_WATER,
  PLAYER_ACTION_FIND_UNIMPROVED_LAND_DENSE,
  PLAYER_ACTION_FIND_UNIMPROVED_LAND_SPARSE,
  PlayerActionID,
} from "./Action";

import PlayerStore from "./Store";

export const PLAYER_TASK_FIND_LAND = "FIND_LAND";
export const PLAYER_TASK_FIND_WATER = "FIND_WATER";
export const PLAYER_TASK_MOVE_ASHORE = "FIND_LAND";
export const PLAYER_TASK_FORCE_REST = "FORCE_REST";
export const PLAYER_TASK_FORCE_EAT = "FORCE_EAT";
export const PLAYER_TASK_FORCE_DRINK = "FORCE_DRINK";
export const PLAYER_TASK_PLANT_A_TREE = "PLANT_A_TREE";
export const PLAYER_TASK_REST = "REST";
export const PLAYER_TASK_BUILD = "BUILD";
export const PLAYER_TASK_EXPLORE = "EXPLORE";
export const PLAYER_TASK_MOVE_TO_DESTINATION = "TO_DESTINATION"; // Is there any reason to do this?
export const PLAYER_TASK_NONE = undefined;

// const PLAYER_TASK_NAMES = {
//   PLANT_A_TREE: "planting a tree",
//   FIND_WATER: "looking for water",
//   DRINK: "drinking",
//   EAT: "eating",
//   FORCE_REST: "fatigued",
//   FORCE_DRINK: "parched",
//   FORCE_EAT: "starving",
// };

export type PlayerTaskName =
  | typeof PLAYER_TASK_FIND_WATER
  | typeof PLAYER_TASK_FIND_LAND
  | typeof PLAYER_TASK_PLANT_A_TREE
  | typeof PLAYER_TASK_NONE
  | typeof PLAYER_TASK_REST
  | typeof PLAYER_TASK_FORCE_REST
  | typeof PLAYER_TASK_FORCE_EAT
  | typeof PLAYER_TASK_FORCE_DRINK
  | typeof PLAYER_TASK_MOVE_TO_DESTINATION
  | typeof PLAYER_TASK_BUILD;

export const PLANT_TREE_TURNS = 10;

interface IPlayerTask {
  name: string;
  getAction(): PlayerActionID;
}

class PlayerTaskMoveToDestination implements IPlayerTask {
  name: string = "planting a tree";

  getAction(): PlayerActionID {
    if (this.playerStore.atCurrentDestination()) {
      this.playerStore.unsetCurrentDestination();
    }
    return PLAYER_ACTION_MOVE;
  }

  constructor(private playerStore: PlayerStore) {}
}

class PlayerTaskRest implements IPlayerTask {
  name: string = "planting a tree";

  getAction(): PlayerActionID {
    return PLAYER_ACTION_REST;
  }
}

class PlayerTaskPlantTree implements IPlayerTask {
  name: string = "planting a tree";

  getAction(): PlayerActionID {
    console.log("Getting Action for Task Planting a Tree");
    if (this.mapStore.squareIs(this.playerStore.currentLocation, "flat_land")) {
      if (this.turnsSinceStarting > PLANT_TREE_TURNS) {
        return PLAYER_ACTION_PLANT_A_TREE;
      } else {
        console.log(
          `Digging a hole until ${this.turnsSinceStarting} is > ${PLANT_TREE_TURNS}`
        );
        return PLAYER_ACTION_DIG_A_HOLE;
      }
    } else {
      if (this.playerStore.plantingStrategy == "DENSE") {
        return PLAYER_ACTION_FIND_UNIMPROVED_LAND_DENSE;
      } else {
        return PLAYER_ACTION_FIND_UNIMPROVED_LAND_SPARSE;
      }
    }
  }

  constructor(
    private mapStore: MapStore,
    private playerStore: PlayerStore,
    private turnsSinceStarting: number
  ) {}
}

class PlayerTaskFindWater implements IPlayerTask {
  name: string = "looking for water";

  getAction(): PlayerActionID {
    if (
      this.mapStore.checkSquareContext(
        this.playerStore.currentLocation,
        "ADJACENT_TO_WATER"
      )
    ) {
      console.log("PLAYER_ACTION_DRINK Because Adjacent To Water");
      return PLAYER_ACTION_DRINK;
    }

    console.log("Player Action Find Water");
    return PLAYER_ACTION_FIND_WATER;
  }

  constructor(private mapStore: MapStore, private playerStore: PlayerStore) {}
}

class PlayerTaskFindLand implements IPlayerTask {
  name: string = "planting a tree";

  getAction(): PlayerActionID {
    if (
      this.mapStore.checkSquareContext(this.playerStore.currentLocation, "LAND")
    ) {
      this.playerStore.currentStatus.notDrowning();
      return PLAYER_ACTION_NONE;
    }

    return PLAYER_ACTION_FIND_LAND;
  }

  constructor(private mapStore: MapStore, private playerStore: PlayerStore) {}
}

class PlayerTask {
  turnsSinceStarting: number = 0;
  _task: IPlayerTask | undefined = undefined;

  get name() {
    return this._task?.name;
  }

  getAction() {
    return this._task?.getAction();
  }

  performOrSet() {}

  passTurn() {
    this.turnsSinceStarting++;
  }

  is(taskName: string) {
    return taskName === this.taskName;
  }

  set(taskName: PlayerTaskName) {
    if (this.taskName !== taskName) {
      console.log(
        `Task changed from ${this.taskName} to ${taskName}, resetting turns`
      );
      this.turnsSinceStarting = 0;
    }

    this.taskName = taskName;

    switch (taskName) {
      case "REST":
        this._task = new PlayerTaskRest();
        break;
      case "PLANT_A_TREE":
        this._task = new PlayerTaskPlantTree(
          this.mapStore,
          this.playerStore,
          this.turnsSinceStarting
        );
        break;
      case "FIND_WATER":
        this._task = new PlayerTaskFindWater(this.mapStore, this.playerStore);
        break;
      case "FIND_LAND":
        this._task = new PlayerTaskFindLand(this.mapStore, this.playerStore);
        break;
      case "TO_DESTINATION":
        this._task = new PlayerTaskMoveToDestination(this.playerStore);
        break;
    }
  }

  incrementTurn() {
    this.turnsSinceStarting++;
  }

  constructor(
    public taskName: PlayerTaskName,
    private mapStore: MapStore,
    private playerStore: PlayerStore
  ) {
    this.turnsSinceStarting = 0;

    this.set(taskName);

    makeObservable(this, {
      taskName: observable,
      name: computed,
      set: action.bound,
    });
  }
}

export default PlayerTask;

//   case "PLANT_A_TREE":
// if (this.mapStore.squareIs(this.currentLocation, "flat_land")) {
//       playerAction.set(PLAYER_ACTION_PLANT_A_TREE);
//     } else {
//       this.movePlayer();
//       playerAction.set(PLAYER_ACTION_MOVE);
//     }
//   case "REST":
//     playerAction.set(PLAYER_ACTION_NONE);
//     break;
//   case "GATHER_WATER":
//   default:
//     playerAction.set(PLAYER_ACTION_NONE);
//     break;
// }
