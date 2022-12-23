import { TBuildingSlug } from "stores/buildings/buildings";
import Coordinates from "./Coordinates";
import MapSquare, {
  MapSquareType,
  MapSquareImmutableType,
  MapSquareImprovementType,
} from "./MapSquare";

export default class MapMatrix {
  _map: MapSquare[][] = [];

  get map() {
    return this._map;
  }

  setMap(_map: MapSquare[][]) {
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
          return 1;
        }
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

  squareMovable(coordinates: Coordinates): boolean {
    return this._map[coordinates.Y]![coordinates.X]!.isMovable;
  }

  squareType(coordinates: Coordinates): MapSquareType | undefined {
    return this._map[coordinates.Y]![coordinates.X]!.type;
  }

  terraform(x: number, y: number, mapSquareType: MapSquareImmutableType) {
    console.log(`Terraforming ${mapSquareType}`);
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
