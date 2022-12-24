import Coordinates from "stores/map/Coordinates";
import MapStore from "stores/map/Store";

import { MAP_HEIGHT, MAP_WIDTH } from "../map";

import { AStarFinder } from "astar-typescript";

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

    // const xDiff = this.currentDestination.X - this.currentLocation.X;
    // const yDiff = this.currentDestination.Y - this.currentLocation.Y;

    // console.log(
    //   `movePlayerOneStepCloserToDestination ${xDiff / MAP_WIDTH} ${
    //     yDiff / MAP_HEIGHT
    //   }`
    // );

    // const movePlace:
    //   | Coordinates
    //   | undefined = this.oneStepCloserMovementDirection(xDiff, yDiff);

    const aStarInstance = new AStarFinder({
      grid: {
        matrix: this.mapStore.getMapMovableMatrix(),
      },
    });

    let startPos = { x: this.currentLocation.X, y: this.currentLocation.Y };
    let goalPos = {
      x: this.currentDestination.X,
      y: this.currentDestination.Y,
    };

    let myPathway = aStarInstance.findPath(startPos, goalPos);

    console.log(myPathway);

    if (myPathway && myPathway[0] && myPathway[1]) {
      console.log(
        `Moving from ${JSON.stringify(
          this.currentLocation
        )} to ${JSON.stringify(myPathway[1])}`
      );
      let newX = myPathway[1][0];
      let newY = myPathway[1][1];
      if (newX && newY) {
        return new Coordinates(newX, newY);
      }
    }

    return this.currentLocation;
  }

  movePlayerSparse(): Coordinates {
    if (!this.currentDestination) {
      this.setCurrentDestination(RANDOM_DESTINATION_STRATEGY);
    }
    return this.movePlayerOneStepCloserToDestination();
  }

  movePlayerDense(possibleDirections: Coordinates[]) {
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
    private currentLocation: Coordinates
  ) {}
}