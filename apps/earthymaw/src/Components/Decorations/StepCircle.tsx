import React from "react";

import { observer } from "mobx-react-lite";

import CircleIcon from "@mui/icons-material/Circle";

// import { LOTS_OF_RETRO_COLORS } from "../../config/colors";

// const NUM_CIRCLES = 6;
// const NUM_COLORS = 13;

// var murmur = require("murmurhash-js");

interface IStepCircleProps {
  triggered: boolean;
  color: number;
  volume: number;
}

const StepCircle = observer(
  ({ triggered, color, volume }: IStepCircleProps): React.ReactElement => {
    let colorHSL = `hsl(${color}, ${volume}%, 50%)`;
    console.log(`Color: ${color} -- ${colorHSL}`);
    //(Hue, Saturation, Value?)
    // let murmurHash = murmur(name);
    // let uniqueVal = murmurHash % Math.pow(NUM_COLORS, NUM_CIRCLES);
    // let digits: number[] = [];
    return (
      <CircleIcon
        fontSize="small"
        sx={{ color: triggered ? colorHSL : "gray" }}
      />
    );
  }
);

export default StepCircle;
