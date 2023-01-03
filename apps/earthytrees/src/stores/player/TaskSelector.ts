import { Activity } from "stores/schedule/Store";
import {
  PLAYER_TASK_FIND_WATER,
  PLAYER_TASK_FORCE_DRINK,
  PLAYER_TASK_FORCE_EAT,
  PLAYER_TASK_FORCE_REST,
  PLAYER_TASK_MOVE_ASHORE,
  PLAYER_TASK_MOVE_TO_DESTINATION,
  PLAYER_TASK_PLANT_A_TREE,
  PLAYER_TASK_REST,
  PLAYER_TASK_BUILD,
  PlayerTaskName,
  PLAYER_TASK_NONE,
} from "./Task";

import PlayerStatus from "./Status";

export default class TaskSelector {
  select(
    scheduledIntention: Activity,
    playerStatus: PlayerStatus,
    hasDestination: boolean
  ): PlayerTaskName {
    if (hasDestination) {
      return PLAYER_TASK_MOVE_TO_DESTINATION;
    }

    if (playerStatus.overridesTask()) {
      switch (playerStatus.status) {
        case "dehydrated":
          return PLAYER_TASK_FORCE_DRINK;
        case "exhausted":
          return PLAYER_TASK_FORCE_REST;
        case "starving":
          return PLAYER_TASK_FORCE_EAT;
        case "drowning":
          return PLAYER_TASK_MOVE_ASHORE;
      }
    }

    switch (scheduledIntention) {
      case "PLANT_A_TREE":
        return PLAYER_TASK_PLANT_A_TREE;
      case "GATHER_WATER":
        return PLAYER_TASK_FIND_WATER;
      case "REST":
        return PLAYER_TASK_REST;
      case "BUILD":
        return PLAYER_TASK_BUILD;
    }

    return PLAYER_TASK_NONE;
  }
}
