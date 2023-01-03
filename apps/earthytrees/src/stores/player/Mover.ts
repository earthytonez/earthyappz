import Coordinates from "stores/map/Coordinates";
import MapStore from "stores/map/Store";

import { MAP_HEIGHT, MAP_WIDTH } from "../map";

import { AStarFinder } from "astar-typescript";
import PlayerStore from "./Store";

export const RANDOM_DESTINATION_STRATEGY = "RANDOM";

type DestinationStrategy = "RANDOM";

const DENSE_PLANTING_STRATEGY = "DENSE";
const SPARSE_PLANTING_STRATEGY = "SPARSE";

function rand(max: number) {
  return Math.floor(Math.random() * max);
}

export default class PlayerMover {
  currentDestination?: Coordinates;
  moveWest() {
    console.log("MoveWest");
    return this.currentLocation.west();
  }

  setCurrentDestinationRandom() {
    let y = rand(MAP_HEIGHT);
    let x = rand(MAP_WIDTH);

    let coordinate = new Coordinates(x, y);
    if (this.mapStore.squareMovable(coordinate)) {
      this.currentDestination = new Coordinates(x, y);
      return;
    }
    this.setCurrentDestinationRandom();
  }

  getPossibleDirections() {
    return [
      this.currentLocation.north(),
      this.currentLocation.south(),
      this.currentLocation.east(),
      this.currentLocation.west(),
    ].filter((location: Coordinates | undefined) => location !== undefined);
  }

  setCurrentDestination(strategy: DestinationStrategy) {
    switch (strategy) {
      case RANDOM_DESTINATION_STRATEGY:
        this.setCurrentDestinationRandom();
    }
  }

  atCurrentDestination() {
    return (
      this.currentLocation.X === this.currentDestination?.X &&
      this.currentLocation.Y === this.currentDestination?.Y
    );
  }

  setDestination(dest: Coordinates) {
    this.currentDestination = dest;
  }

  moveEast(): Coordinates | undefined {
    console.log("MoveEast");
    return this.currentLocation.east();
  }

  moveSouth(): Coordinates | undefined {
    console.log(`MoveSouth`);
    return this.currentLocation.south();
  }

  moveNorth(): Coordinates | undefined {
    console.log("MoveNorth");
    return this.currentLocation.north();
  }

  squareMovable(xDiff: number, yDiff: number): boolean {
    let tempLocation = Object.assign({}, this.currentLocation);
    tempLocation.X = tempLocation.X + xDiff;
    tempLocation.Y = tempLocation.Y + yDiff;

    return this.mapStore.squareMovable(tempLocation);
  }

  oneStepCloserMovementDirection(xDiff: number, yDiff: number) {
    if (!this.squareMovable(1, 0) && (xDiff === 1 || yDiff === -1)) {
      return this.moveNorth();
    }

    if (Math.abs(xDiff / MAP_WIDTH) >= Math.abs(yDiff / MAP_HEIGHT)) {
      if (xDiff > 0) {
        if (this.squareMovable(1, 0)) {
          return this.moveEast();
        }
        // This is bad Logic but works for the current case
      }
      if (this.squareMovable(-1, 0)) {
        return this.moveWest();
      }
      console.log("Not Movable South");
      // This is bad Logic but works for the current case
      return this.moveSouth();
    }
    if (yDiff > 0) {
      if (this.squareMovable(0, -1)) {
        return this.moveSouth();
      }
      // This is bad Logic but works for the current case
      console.log("Not Movable East");
      return this.moveEast();
    }
    if (this.squareMovable(0, 1)) {
      return this.moveNorth();
    }
    console.log("Not Movable West");

    // This is bad Logic but works for the current case
    return this.moveWest();
  }

  movePlayerOneStepCloserToDestination(): Coordinates {
    if (!this.currentDestination) {
      return this.currentLocation;
    }

    let mapMatrix = this.mapStore.getMapMovableMatrix();
    if (this.playerStore.currentStatus.isDrowning()) {
      mapMatrix = this.mapStore.getAllMapMovableMatrix();
    }

    const aStarInstance = new AStarFinder({
      grid: {
        matrix: mapMatrix,
      },
    });

    console.log(this.mapStore.getMapMovableMatrix());
    console.log(
      `Moving from CurrentLocation: ${this.currentLocation.X}, ${this.currentLocation.Y} to ${this.currentDestination.X}, ${this.currentDestination.Y}`
    );

    let startPos = { x: this.currentLocation.X, y: this.currentLocation.Y };
    let goalPos = {
      x: this.currentDestination.X,
      y: this.currentDestination.Y,
    };

    console.log(startPos);
    console.log(goalPos);
    let myPathway = aStarInstance.findPath(startPos, goalPos);
    console.log(myPathway);

    if (
      myPathway !== undefined &&
      myPathway[0] !== undefined &&
      myPathway[1] !== undefined
    ) {
      console.log(
        `Moving from ${JSON.stringify(
          this.currentLocation
        )} to ${JSON.stringify(myPathway[1])}`
      );
      let newX = myPathway[1][0];
      let newY = myPathway[1][1];

      if (newX !== undefined && newY !== undefined) {
        console.log(`newX: ${newX} newY: ${newY}`);
        return new Coordinates(newX, newY);
      }
    }

    return this.currentLocation;
  }

  movePlayerSparse(): Coordinates {
    console.log("Moving Player according to Sparse Planting Strategy");
    if (!this.currentDestination) {
      this.setCurrentDestination(RANDOM_DESTINATION_STRATEGY);
    }
    let destination = this.movePlayerOneStepCloserToDestination();
    return destination;
  }

  movePlayerDense(possibleDirections: Coordinates[]) {
    console.log("Moving Player according to Dense Planting Strategy");

    let movePlace: Coordinates | undefined =
      possibleDirections[Math.floor(Math.random() * possibleDirections.length)];

    if (movePlace) {
      return new Coordinates(movePlace.X, movePlace.Y);
    } else {
      return new Coordinates(this.currentLocation.X, this.currentLocation.Y);
    }
  }

  getNewLocation(
    currentLocation: Coordinates,
    plantingStrategy: "DENSE" | "SPARSE"
  ): Coordinates {
    this.currentLocation = currentLocation;
    let possibleDirections: Coordinates[] =
      this.getPossibleDirections() as Coordinates[];

    if (this.currentDestination) {
      let destination = this.movePlayerOneStepCloserToDestination();
      return destination;
    }

    switch (plantingStrategy) {
      case SPARSE_PLANTING_STRATEGY:
        return this.movePlayerSparse();

      case DENSE_PLANTING_STRATEGY:
        return this.movePlayerDense(possibleDirections);

      default:
        return this.movePlayerDense(possibleDirections);
    }
  }

  constructor(
    private mapStore: MapStore,
    private currentLocation: Coordinates,
    private playerStore: PlayerStore
  ) {}
}
