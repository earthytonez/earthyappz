import Coordinates from "stores/map/Coordinates";

type FloraType = "deer" | "squirrel" | "wild boar";

export default class Flora {
  constructor(public coordinates: Coordinates, public type: FloraType) {}
}
