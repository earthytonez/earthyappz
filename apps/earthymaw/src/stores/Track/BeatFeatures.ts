import { BeatMarker } from "../MusicFeatures/BeatMarker";
import { DEFAULT_STEP_INTERVAL } from "config/constants";
export default class BeatFeatures {
  constructor(
    public beatMarker: BeatMarker,
    public time: number,
    public stepInterval: number = DEFAULT_STEP_INTERVAL
  ) {}
}
