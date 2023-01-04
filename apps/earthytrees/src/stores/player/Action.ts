import { action, computed, makeObservable, observable } from "mobx";
import PlayerStats, { StatName } from "./Stats";
import { PlayerStatusID } from "./Status";
import PlayerStore from "./Store";
import MapStore from "stores/map/Store";

export const PLAYER_ACTION_DRINK = "DRINK";
export const PLAYER_ACTION_EAT = "EAT";
export const PLAYER_ACTION_NONE = "NONE";
export const PLAYER_ACTION_REST = "REST";
export const PLAYER_ACTION_BUILD = "BUILD";
export const PLAYER_ACTION_FIND_LAND = "FIND_LAND";
export const PLAYER_ACTION_FIND_BUILDING_IN_PROGRESS =
  "FIND_BUILDING_IN_PROGRESS";
export const PLAYER_ACTION_FIND_UNIMPROVED_LAND = "FIND_UNIMPROVED_LAND";
export const PLAYER_ACTION_FIND_UNIMPROVED_LAND_DENSE =
  "FIND_UNIMPROVED_LAND_DENSE";
export const PLAYER_ACTION_FIND_UNIMPROVED_LAND_SPARSE =
  "FIND_UNIMPROVED_LAND_SPARSE";
export const PLAYER_ACTION_FIND_WATER = "FIND_WATER";
export const PLAYER_ACTION_MOVE = "MOVE";
export const PLAYER_ACTION_FORCED_TO_REST = "FORCED_TO_REST";
export const PLAYER_ACTION_FORCED_TO_EAT = "FORCED_TO_EAT";
export const PLAYER_ACTION_FORCED_TO_DRINK = "FORCED_TO_DRINK";
export const PLAYER_ACTION_PLANT_A_TREE = "PLANT_A_TREE";
export const PLAYER_ACTION_DIG_A_HOLE = "DIG_A_HOLE";

export type PlayerActionID =
  | typeof PLAYER_ACTION_FORCED_TO_DRINK
  | typeof PLAYER_ACTION_FORCED_TO_EAT
  | typeof PLAYER_ACTION_FORCED_TO_REST
  | typeof PLAYER_ACTION_DRINK
  | typeof PLAYER_ACTION_EAT
  | typeof PLAYER_ACTION_FIND_LAND
  | typeof PLAYER_ACTION_FIND_BUILDING_IN_PROGRESS
  | typeof PLAYER_ACTION_FIND_WATER
  | typeof PLAYER_ACTION_MOVE
  | typeof PLAYER_ACTION_DIG_A_HOLE
  | typeof PLAYER_ACTION_PLANT_A_TREE
  | typeof PLAYER_ACTION_NONE
  | typeof PLAYER_ACTION_REST
  | typeof PLAYER_ACTION_BUILD
  | typeof PLAYER_ACTION_FIND_UNIMPROVED_LAND
  | typeof PLAYER_ACTION_FIND_UNIMPROVED_LAND_DENSE
  | typeof PLAYER_ACTION_FIND_UNIMPROVED_LAND_SPARSE;

// const PLAYER_ACTION_NAMES = {
//   NONE: "resting",
//   MOVE: "moving",
//   PLANT_A_TREE: "planting a tree",
//   FIND_WATER: "looking for water",
//   DRINK: "drinking",
//   EAT: "eating",
//   FORCE_REST: "fatigued",
//   FORCE_DRINK: "parched",
//   FORCE_EAT: "starving",
// };

// const OCCUPIED_ACTIONS = [
//   PLAYER_ACTION_MOVE,
//   PLAYER_ACTION_FORCED_TO_REST,
//   PLAYER_ACTION_FORCED_TO_EAT,
//   PLAYER_ACTION_FORCED_TO_DRINK,
//   PLAYER_ACTION_PLANT_A_TREE,
// ];

export type PlayerActionName =
  | typeof PLAYER_ACTION_FORCED_TO_DRINK
  | typeof PLAYER_ACTION_FORCED_TO_EAT
  | typeof PLAYER_ACTION_FORCED_TO_REST
  | typeof PLAYER_ACTION_DRINK
  | typeof PLAYER_ACTION_EAT
  | typeof PLAYER_ACTION_FIND_WATER
  | typeof PLAYER_ACTION_MOVE
  | typeof PLAYER_ACTION_NONE;

class BasePlayerAction {
  actionName: string = "";
  baseStatEffects: any = {
    stamina: 0,
    thirst: 0,
    hunger: 0,
  };

  perform() {}

  get statEffects() {
    return this.baseStatEffects;
  }

  constructor(protected playerStore: PlayerStore) {
    makeObservable(this, {
      actionName: observable,
      statEffects: computed,
    });
  }
}

class PlayerActionDrink extends BasePlayerAction {
  actionName: string = "drinking";

  get statEffects() {
    return Object.assign(this.baseStatEffects, {
      stamina: 1,
      thirst: 1,
    });
  }
}

class PlayerActionEat extends BasePlayerAction {
  actionName: string = "eating";

  get statEffects() {
    return Object.assign(this.baseStatEffects, {
      stamina: 1,
      thirst: 1,
    });
  }
}

class PlayerActionMove extends BasePlayerAction {
  actionName: string = "moving";
  get statEffects() {
    return Object.assign(this.baseStatEffects, {
      stamina: 1,
      thirst: 1,
    });
  }

  perform() {
    console.log("Player Action Move!");
    this.playerStore.movePlayer();
  }
}

class PlayerActionNone extends BasePlayerAction {
  actionName: string = "resting";

  perform() {}

  get statEffects() {
    return Object.assign(this.baseStatEffects, {
      stamina: 0,
    });
  }
}

class PlayerActionRest extends BasePlayerAction {
  actionName: string = "resting";

  perform() {}

  get statEffects() {
    return Object.assign(this.baseStatEffects, {
      stamina: 1,
    });
  }
}

class PlayerActionBuild extends BasePlayerAction {
  actionName: string = "building";

  constructor(protected playerStore: PlayerStore, private mapStore: MapStore) {
    super(playerStore);
  }

  perform() {
    this.mapStore.makeBuildingProgress(this.playerStore.currentLocation);
  }

  get statEffects() {
    return Object.assign(this.baseStatEffects, {
      stamina: -2,
    });
  }
}

class PlayerActionDiggingAHole extends BasePlayerAction {
  actionName: string = "digging a hole";

  perform() {
    // NoOp, this is an action while waiting for enough turns to pass to plant a tree.
  }

  get statEffects() {
    return Object.assign(this.baseStatEffects, {
      stamina: -2,
    });
  }
}

class PlayerActionPlantATree extends BasePlayerAction {
  actionName: string = "planting a tree";

  constructor(protected playerStore: PlayerStore, private mapStore: MapStore) {
    super(playerStore);
  }

  perform() {
    this.mapStore.improveMapSquareCompleted(
      this.playerStore.currentLocation,
      "tree"
    );
  }

  get statEffects() {
    return Object.assign(this.baseStatEffects, {
      stamina: -2,
    });
  }
}

class PlayerActionForcedToEat extends BasePlayerAction {
  actionName: string = "eating";

  get statEffects() {
    return Object.assign(this.baseStatEffects, {
      stamina: 0.5,
      hunger: 0.5,
    });
  }
}

class PlayerActionForcedToDrink extends BasePlayerAction {
  actionName: string = "drinking";

  perform() {}

  get statEffects() {
    return Object.assign(this.baseStatEffects, {
      stamina: 0.5,
      thirst: 0.5,
    });
  }
}

class PlayerActionForcedToRest extends BasePlayerAction {
  actionName: string = "resting";

  perform() {}

  get statEffects() {
    return Object.assign(this.baseStatEffects, {
      stamina: 0.5,
    });
  }
}

class PlayerActionFindWater extends BasePlayerAction {
  actionName: string = "finding water";

  constructor(protected playerStore: PlayerStore, private mapStore: MapStore) {
    super(playerStore);
  }

  perform() {
    console.log("Perform Step for Find Water Action");
    let destination = this.mapStore._map.breadthFirstSearch(
      this.playerStore.currentLocation,
      "Feature",
      "ADJACENT_TO_WATER"
    );

    console.log(
      `Found Destination for water, setting to ${JSON.stringify(destination)}`
    );

    if (destination) {
      this.playerStore.playerMover.setDestination(destination);
    } else {
      console.log("Warning: Could not find water destination");
    }
  }

  get statEffects() {
    return Object.assign(this.baseStatEffects, {
      stamina: -1,
    });
  }
}

class PlayerActionFindBuildingInProgress extends BasePlayerAction {
  actionName: string = "finding building in progress";

  constructor(protected playerStore: PlayerStore, private mapStore: MapStore) {
    super(playerStore);
  }

  perform() {
    console.log("Perform Step for Find Building in Progress Action");
    let destination = this.mapStore._map.breadthFirstSearch(
      this.playerStore.currentLocation,
      "Feature",
      "BUILDING_IN_PROGRESS"
    );

    console.log(
      `Found Destination for building in progress, setting to ${JSON.stringify(
        destination
      )}`
    );

    if (destination) {
      this.playerStore.playerMover.setDestination(destination);
    } else {
      console.log(
        "Warning: Could not find building in progress for destination"
      );
    }
  }

  get statEffects() {
    return Object.assign(this.baseStatEffects, {
      stamina: -1,
    });
  }
}

class PlayerActionFindLand extends BasePlayerAction {
  actionName: string = "finding land";

  constructor(protected playerStore: PlayerStore, private mapStore: MapStore) {
    super(playerStore);
  }

  perform() {
    let destination = this.mapStore._map.breadthFirstSearch(
      this.playerStore.currentLocation,
      "Feature",
      "LAND"
    );

    if (destination) {
      this.playerStore.playerMover.setDestination(destination);
    } else {
      console.log("Warning: Could not find water destination");
    }

    return PLAYER_ACTION_MOVE;
  }

  get statEffects() {
    return Object.assign(this.baseStatEffects, {
      stamina: 0.5,
    });
  }
}

class PlayerActionFindUnimprovedLandDense extends BasePlayerAction {
  actionName: string = "finding land";

  constructor(protected playerStore: PlayerStore, private mapStore: MapStore) {
    super(playerStore);
  }

  perform() {
    let destination = this.mapStore._map.breadthFirstSearch(
      this.playerStore.currentLocation,
      "Feature",
      "LAND"
    );

    if (destination) {
      this.playerStore.playerMover.setDestination(destination);
    } else {
      console.log("Warning: Could not find water destination");
    }

    return PLAYER_ACTION_MOVE;
  }

  get statEffects() {
    return Object.assign(this.baseStatEffects, {
      stamina: 0.5,
    });
  }
}
class PlayerActionFindUnimprovedLandSparse extends BasePlayerAction {
  actionName: string = "finding land";

  constructor(protected playerStore: PlayerStore, private mapStore: MapStore) {
    super(playerStore);
  }

  perform() {
    let destination = this.mapStore._map.randomSearch("Feature", "LAND");

    if (destination) {
      this.playerStore.playerMover.setDestination(destination);
    } else {
      console.log("Warning: Could not find water destination");
    }

    return PLAYER_ACTION_MOVE;
  }

  get statEffects() {
    return Object.assign(this.baseStatEffects, {
      stamina: 0.5,
    });
  }
}

class PlayerAction {
  _action = new PlayerActionNone(this.playerStore);

  get name() {
    return this._action.actionName;
  }

  get actionName() {
    return this._action.actionName;
  }

  is(actionName: string) {
    return actionName === this.actionName;
  }

  set(actionName: PlayerActionID) {
    switch (actionName) {
      case "NONE":
        this._action = new PlayerActionNone(this.playerStore);
        break;
      case "REST":
        this._action = new PlayerActionRest(this.playerStore);
        break;
      case "FORCED_TO_REST":
        this._action = new PlayerActionForcedToRest(this.playerStore);
        break;
      case "FORCED_TO_DRINK":
        this._action = new PlayerActionForcedToDrink(this.playerStore);
        break;
      case "FORCED_TO_EAT":
        this._action = new PlayerActionForcedToEat(this.playerStore);
        break;
      case "MOVE":
        this._action = new PlayerActionMove(this.playerStore);
        break;
      case "DRINK":
        this._action = new PlayerActionDrink(this.playerStore);
        break;
      case "BUILD":
        this._action = new PlayerActionBuild(this.playerStore, this.mapStore);
        break;
      case "DIG_A_HOLE":
        this._action = new PlayerActionDiggingAHole(this.playerStore);
        break;
      case "PLANT_A_TREE":
        this._action = new PlayerActionPlantATree(
          this.playerStore,
          this.mapStore
        );
        break;
      case "EAT":
        this._action = new PlayerActionEat(this.playerStore);
        break;
      case "FIND_LAND":
        this._action = new PlayerActionFindLand(
          this.playerStore,
          this.mapStore
        );
        break;
      case "FIND_UNIMPROVED_LAND_SPARSE":
        this._action = new PlayerActionFindUnimprovedLandSparse(
          this.playerStore,
          this.mapStore
        );
        break;
      case "FIND_UNIMPROVED_LAND_DENSE":
        this._action = new PlayerActionFindUnimprovedLandDense(
          this.playerStore,
          this.mapStore
        );
        break;
      case "FIND_WATER":
        this._action = new PlayerActionFindWater(
          this.playerStore,
          this.mapStore
        );
        break;
      case "FIND_BUILDING_IN_PROGRESS":
        this._action = new PlayerActionFindBuildingInProgress(
          this.playerStore,
          this.mapStore
        );
        break;
      default:
        this._action = new PlayerActionNone(this.playerStore);
        break;
    }
  }

  perform() {
    console.log(`Performing Action ${this._action.actionName}`);
    this._action.perform();
  }

  get statEffects() {
    return this._action.statEffects;
  }

  /* */
  tick(currentAction: PlayerAction): PlayerStatusID {
    this.playerStats.allStats.forEach((stat: string) => {
      if (Object.keys(currentAction.statEffects).includes(stat)) {
        this.playerStats.changeStat(
          stat,
          currentAction.statEffects[stat as StatName]
        );
      }
    });

    let currentLocation = this.playerStore.currentLocation;
    let mapSquareType = this.mapStore.squareType(currentLocation);

    if (mapSquareType == "lake") {
      return "drowning";
    }
    return undefined;
  }

  constructor(
    actionName: PlayerActionName,
    private playerStats: PlayerStats,
    private playerStore: PlayerStore,
    private mapStore: MapStore
  ) {
    this.set(actionName);

    makeObservable(this, {
      _action: observable,
      actionName: computed,
      name: computed,
      set: action.bound,
    });
  }
}

export default PlayerAction;
