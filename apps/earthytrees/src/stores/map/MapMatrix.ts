import { TBuildingSlug } from "stores/buildings/buildings";
import Coordinates from "./Coordinates";
import MapSquare, {
  IMapSquare,
  MapSquareType,
  MapSquareFeatures,
  MapSquareImmutableType,
  MapSquareImprovementType,
} from "./MapSquare";

import { MAP_HEIGHT, MAP_WIDTH } from "./constants";

function rand(max: number) {
  return Math.floor(Math.random() * max);
}

class MapLoadError extends Error {}

class MapOutOfBoundsError extends Error {}

export default class MapMatrix {
  _map: MapSquare[][] = [];
  directions: number[][] = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  get map(): MapSquare[][] {
    return this._map;
  }

  mapSquare(coordinates: Coordinates): MapSquare | undefined {
    return this._map[coordinates.Y]![coordinates.X];
  }

  breadthFirstSearch(
    startingLocation: Coordinates,
    searchType: "Feature" | "ImmutableType" | "ImprovementType",
    searchObject:
      | MapSquareFeatures
      | MapSquareImmutableType
      | MapSquareImprovementType
  ): Coordinates | undefined {
    let matrix = this._map;

    if (!matrix.length) throw new Error(`No Matrix Length -- ${matrix}`);
    // store all visited element and finally returned this
    const values = [];
    // BFS uses queue to process data, Initially store first element
    const queue = [[startingLocation.Y, startingLocation.X]];
    // created 2-d matrix same as given matrix with falsy values
    const seen: boolean[][] = new Array(matrix.length)
      .fill("")
      .map(() => new Array(matrix[0]!.length).fill(false));
    while (queue.length) {
      const currentPos = queue.shift();
      const row: number | undefined = currentPos![0];
      const col: number | undefined = currentPos![1];

      if (row === undefined) {
        throw new Error(
          `row undefined in breadth first search, currentPos: ${currentPos} -- ${
            currentPos![0]
          }`
        );
      }
      if (col === undefined) {
        throw new Error(
          `col undefined in breadth first search, currentPos: ${currentPos} -- ${
            currentPos![1]
          }`
        );
      }

      if (!matrix[0]) throw new Error(`Matrix[0] undefined -- ${matrix}`);
      // row should not be less then 0
      // row should not be greater then matrix.length
      // col should not be less then 0
      // col should not be greater then matrix.length
      // element should not be visited (seen[row][col])
      const invalidRow = row < 0 || row >= matrix.length;
      const invalidCol = col < 0 || col >= matrix[0].length;

      if (invalidRow || invalidCol || (seen[row] && seen[row]![col])) {
        continue; // continue while loop
      }

      if (this._map[row]![col]!.features.length > 1) {
        console.log(this._map[row]![col]!.features.length);
        console.log(this._map[row]![col]!.features);
      }

      let thisSquare = new Coordinates(col, row);

      if (
        searchType === "Feature" &&
        this.squareIsContext(new Coordinates(col, row)).includes(
          searchObject as MapSquareFeatures
        ) &&
        this.squareMovable(thisSquare)
      ) {
        return new Coordinates(col, row);
      }

      if (
        searchType === "ImmutableType" &&
        this._map[row]![col]!.hasImmutableType(
          searchObject as MapSquareImmutableType
        ) &&
        this.squareMovable(thisSquare)
      ) {
        return new Coordinates(col, row);
      }

      if (
        searchType === "ImprovementType" &&
        this._map[row]![col]!.hasImprovementType(
          searchObject as MapSquareImprovementType
        ) &&
        this.squareMovable(thisSquare)
      ) {
        return new Coordinates(col, row);
      }

      seen[row]![col] = true; // marked true so that not to visit this again
      values.push(matrix[row]![col]); // push visited element into values array
      // Push adjacent item in to queue
      for (let dir of this.directions) {
        queue.push([row + dir[0]!, col + dir[1]!]);
      }
    }
    return new Coordinates(0, 0);
  }

  randomSearch(
    searchType: "Feature" | "ImmutableType" | "ImprovementType",
    searchObject:
      | MapSquareFeatures
      | MapSquareImmutableType
      | MapSquareImprovementType
  ): Coordinates | undefined {
    for (let x = 0; x <= 10; x++) {
      let row = rand(MAP_HEIGHT);
      let col = rand(MAP_WIDTH);

      if (
        searchType === "Feature" &&
        this.squareIsContext(new Coordinates(row, col)).includes(
          searchObject as MapSquareFeatures
        )
      ) {
        return new Coordinates(row, col);
      }

      if (
        searchType === "ImmutableType" &&
        this._map[row]![col]!.hasImmutableType(
          searchObject as MapSquareImmutableType
        )
      ) {
        return new Coordinates(row, col);
      }

      if (
        searchType === "ImprovementType" &&
        this._map[row]![col]!.hasImprovementType(
          searchObject as MapSquareImprovementType
        )
      ) {
        return new Coordinates(row, col);
      }
    }
    return new Coordinates(0, 0);
  }

  uniqByFilter<T>(array: T[]) {
    return array.filter((value, index) => array.indexOf(value) === index);
  }

  /*
   * Square Is Context tells you the features the square has based on it's adjacencies.
   * For example, water near land or land near water.
   */
  squareIsContext(coordinates: Coordinates): MapSquareFeatures[] {
    let thisSquare = this.getMapSquare(coordinates);
    let thisSquareType = this.squareType(coordinates);

    let mapSquareFeatures: MapSquareFeatures[] = ["LAND"];
    if (thisSquareType === "lake") {
      mapSquareFeatures = ["WATER"];
    }

    /*
     * TODO: I guess other things could be in progress?  We'll have to
     * figure that out.
     */
    if (thisSquare.improvement && thisSquare.improvement.inProgress()) {
      mapSquareFeatures.push("BUILDING_IN_PROGRESS");
    }

    let mapSquareType: MapSquareType | undefined;

    let tX = coordinates.X;
    let tY = coordinates.Y;
    [
      [tX + 0, tY + 1],
      [tX + 1, tY + 0],
      [tX + 0, tY - 1],
      [tX - 1, tY + 0],
    ].forEach((c: any) => {
      if (c[0] >= 0 && c[1] >= 0) {
        mapSquareType = this.squareType(new Coordinates(c[0], c[1]));
      }

      if (!mapSquareType) return;

      if (mapSquareType !== "lake") {
        mapSquareFeatures.push("ADJACENT_TO_LAND");
      }

      if (mapSquareType === "lake") {
        mapSquareFeatures.push("ADJACENT_TO_WATER");
      }
    });

    return this.uniqByFilter<MapSquareFeatures>(mapSquareFeatures);
  }

  setMap(_map: IMapSquare[][]) {
    this._map = _map.map((mapColumns: any[]) => {
      return mapColumns.map((mS: any) => {
        let mapSquare = new MapSquare(mS.immutableType);
        if (mS.improvementType) {
          mapSquare.newImprovement(mS.improvementType);
        } else if (mS.improvement && mS.improvement.type) {
          mapSquare.improve(mS.improvement);
        }
        return mapSquare;
      });
    });
  }

  initializeRow(rowNum: number) {
    this._map[rowNum] = [];
  }

  clearImprovements(coordinates: Coordinates) {
    this._map[coordinates.Y]![coordinates.X]!.clearImprovements();
  }

  placeBuildingPlans(
    coordinates: Coordinates,
    buildingType: MapSquareImprovementType
  ) {
    let mapSquare = this.getMapSquare(coordinates);
    mapSquare.improve({
      type: buildingType,
      percentComplete: 0,
      age: 0,
      state: "IN_PROGRESS",
    });
  }

  makeBuildingProgress(coordinates: Coordinates) {
    let mapSquare = this.getMapSquare(coordinates);
    mapSquare.makeBuildingProgress();
  }

  improveSquare(
    coordinates: Coordinates,
    improvementType: MapSquareImprovementType
  ) {
    this._map[coordinates.Y]![coordinates.X]!.newImprovement(improvementType);
  }

  improveSquareCompleted(
    coordinates: Coordinates,
    improvementType: MapSquareImprovementType
  ) {
    this._map[coordinates.Y]![coordinates.X]!.newCompleteImprovement(
      improvementType
    );
  }

  squareIs(coordinates: Coordinates, squareType: MapSquareType) {
    try {
      return this._map[coordinates.Y]![coordinates.X]!.type === squareType;
    } catch (err) {
      throw err;
    }
  }

  movableMatrix(): number[][] {
    return this._map.map((mapRows: MapSquare[]) => {
      return mapRows.map((mapSquare: MapSquare) => {
        if (mapSquare.isMovable) {
          return 0;
        }
        return 1;
      });
    });
  }

  allMovableMatrix(): number[][] {
    return this._map.map((mapRows: MapSquare[]) => {
      return mapRows.map(() => {
        return 0;
      });
    });
  }

  squareBuildable(
    coordinates: Coordinates,
    buildingType: TBuildingSlug
  ): boolean {
    return this._map[coordinates.Y]![coordinates.X]!.isBuildable(buildingType);
  }

  getMapSquare(coordinates: Coordinates): MapSquare {
    if (coordinates.Y > MAP_HEIGHT) {
      throw new MapOutOfBoundsError(
        `Trying to get map square Y (${coordinates.Y}) that exceeds map height: ${MAP_HEIGHT}`
      );
    }
    if (this._map) {
      if (this._map[coordinates.Y]) {
        if (this._map[coordinates.Y]![coordinates.X]) {
          return this._map[coordinates.Y]![coordinates.X]!;
        } else {
          console.warn(
            `this._map Square ${coordinates.Y} ${coordinates.X} undefined`
          );
        }
      } else {
        console.warn(`this._map row ${coordinates.Y} undefined`);
      }
    } else {
      throw new MapLoadError("this._map undefined");
    }

    throw new Error(
      `Could not load map square for coordinates [${coordinates.X}, ${coordinates.Y}]`
    );
  }

  /* Square Movable right now checks to see if the square is not water.  This will have to
   * get more nuanced eventually if we want to add swimming or that you can't move onto walls etc.
   */
  squareMovable(coordinates: Coordinates): boolean {
    let mapSquare = this.getMapSquare(coordinates);
    return mapSquare.isMovable;
  }

  squareType(coordinates: Coordinates): MapSquareType | undefined {
    if (this._map[coordinates.Y] === undefined) {
      console.warn(`Map Row ${coordinates.Y} is undefined`);
      return;
    }

    if (this._map[coordinates.Y]![coordinates.X] === undefined) {
      console.warn(
        `Map Square [${coordinates.Y}, ${coordinates.X}] is undefined`
      );
      return;
    }

    return this._map[coordinates.Y]![coordinates.X]!.type;
  }

  terraform(x: number, y: number, mapSquareType: MapSquareImmutableType) {
    if (!this._map[y]) {
      this.initializeRow(y);
    }
    if (!this._map![y]![x]) {
      this._map![y]?.push(new MapSquare(mapSquareType));
      return;
    }
    this._map![y]![x]!.terraform(mapSquareType);
  }
}
