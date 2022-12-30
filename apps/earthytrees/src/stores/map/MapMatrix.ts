import { TBuildingSlug } from "stores/buildings/buildings";
import Coordinates from "./Coordinates";
import MapSquare, {
  IMapSquare,
  MapSquareType,
  MapSquareFeatures,
  MapSquareImmutableType,
  MapSquareImprovementType,
} from "./MapSquare";

export default class MapMatrix {
  _map: MapSquare[][] = [];
  directions: number[][] = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  get map() {
    return this._map;
  }

  breadthFirstSearch(
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
    const queue = [[0, 0]];
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

      if (
        searchType == "Feature" &&
        this.squareIsContext(new Coordinates(row, col)).includes(
          searchObject as MapSquareFeatures
        )
      ) {
        return new Coordinates(row, col);
      }

      if (
        searchType == "ImmutableType" &&
        this._map[row]![col]!.hasImmutableType(
          searchObject as MapSquareImmutableType
        )
      ) {
        return new Coordinates(row, col);
      }

      if (
        searchType == "ImprovementType" &&
        this._map[row]![col]!.hasImprovementType(
          searchObject as MapSquareImprovementType
        )
      ) {
        return new Coordinates(row, col);
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

  uniqByFilter<T>(array: T[]) {
    return array.filter((value, index) => array.indexOf(value) === index);
  }

  /*
   * Square Is Context tells you the features the square has based on it's adjacencies.
   * For example, water near land or land near water.
   */
  squareIsContext(coordinate: Coordinates): MapSquareFeatures[] {
    let thisSquareType = this.squareType(coordinate);
    let mapSquareFeatures: MapSquareFeatures[] = ["LAND"];
    if (thisSquareType === "lake") {
      mapSquareFeatures = ["WATER"];
    }

    let mapSquareType: MapSquareType | undefined;

    let tX = coordinate.X;
    let tY = coordinate.Y;
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
          mapSquare.improve(mS.improvementType);
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

  improveSquare(
    coordinates: Coordinates,
    improvementType: MapSquareImprovementType
  ) {
    this._map[coordinates.Y]![coordinates.X]!.improve(improvementType);
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

  squareBuildable(
    coordinates: Coordinates,
    buildingType: TBuildingSlug
  ): boolean {
    return this._map[coordinates.Y]![coordinates.X]!.isBuildable(buildingType);
  }

  squareMovable(coordinates: Coordinates): boolean {
    return this._map[coordinates.Y]![coordinates.X]!.isMovable;
  }

  squareType(coordinates: Coordinates): MapSquareType | undefined {
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
