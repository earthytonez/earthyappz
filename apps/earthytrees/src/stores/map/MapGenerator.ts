import MapMatrix from "./MapMatrix";

import { MAP_WIDTH, MAP_HEIGHT, LAKE_RADIUS } from "./constants";

class MapGenerator {
  generate() {
    var lakeX =
      Math.floor(Math.random() * (MAP_WIDTH - LAKE_RADIUS * 2)) + LAKE_RADIUS;
    var lakeY =
      Math.floor(Math.random() * (MAP_HEIGHT - LAKE_RADIUS * 2)) + LAKE_RADIUS;

    for (var y = 0; y < MAP_HEIGHT; y++) {
      this.mapMatrix.initializeRow(y);
      for (var x = 0; x < MAP_WIDTH; x++) {
        var distance = Math.sqrt(
          Math.pow(x - lakeX, 2) + Math.pow(y - lakeY, 2)
        );
        if (distance < LAKE_RADIUS) {
          this.mapMatrix.terraform(x, y, "lake");
        } else {
          this.mapMatrix.terraform(x, y, "flat_land");
        }
      }
    }

    console.log(this.mapMatrix);

    if (this.mapMatrix.map![0]!.length !== MAP_WIDTH) {
      throw new Error("Map generation Failed");
    }

    return this.mapMatrix;
  }
  constructor(public mapMatrix: MapMatrix) {}
}

export default MapGenerator;
