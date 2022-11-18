import * as React from "react";

import { observer } from "mobx-react-lite";

import Grid from "@mui/material/Grid";

import { Donut } from "react-dial-knob";

interface ISliderParameterParams {
  edit: Function;
  field: any;
  min: number;
  max: number;
  parameterValue: number;
  style: any;
}

export default observer(
  ({
    edit,
    field,
    min,
    max,
    parameterValue,
    style,
  }: ISliderParameterParams): React.ReactElement => {
    let step = 10;
    if (max - min < 1000) {
      step = 10;
    }
    if (max - min < 100) {
      step = 1;
    }
    if (max - min < 10) {
      step = 0.1;
    }

    console.log(`STYLE: ${style}`);
    if (style) {
      console.log(`STYLE_ORIENTATION: ${style.orientation}`);
    }

    let roundToStep = (val: number) => {
      return Math.ceil(val / step) * step;
    };

    return (
      <Grid container sx={{ mr: 0, ml: 0, pr: 0, pl: 0 }}>
        <Donut
          diameter={100}
          min={min}
          max={max}
          step={step}
          value={roundToStep(parameterValue)}
          theme={{
            donutColor: "blue",
          }}
          onValueChange={(value: any) => {
            edit(field, value);
          }}
          ariaLabelledBy={"my-label"}
        ></Donut>
      </Grid>
    );
  }
);
