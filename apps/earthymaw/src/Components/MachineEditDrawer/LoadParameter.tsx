import * as React from "react";
import { observer } from "mobx-react-lite";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import MachineEditDrawerRadioGroup from "./ParameterComponents/MachineEditDrawerRadioGroup";
import MachineEditDrawerDial from "./ParameterComponents/MachineEditDrawerDial";

import KnobParameter from "./ParameterComponents/KnobParameter";
import SliderParameter from "./ParameterComponents/SliderParameter";
import ParameterTitle from "./ParameterComponents/ParameterTitle";

import ArraySelectorComponent from "./ArraySelectorComponent";
import EnumArraySelectorComponent from "./EnumArraySelectorComponent";
import NumericArraySelectorComponent from "./NumericArraySelectorComponent";
import { ParameterFieldTypes } from "stores/Parameter/Base";
import GridMiddleFullWidth from "Components/TightBorderedGrid/GridMiddleFullWidth";

interface ILoadParameterParams {
  edit: Function;
  increment: Function;
  decrement: Function;
  name: string;
  field: string;
  parameterValue: any;
  fieldType: ParameterFieldTypes;
  fieldOptions: any;
  style: any;
}

export default observer(
  ({
    edit,
    name,
    field,
    fieldType,
    fieldOptions,
    increment,
    decrement,
    parameterValue,
    style,
  }: ILoadParameterParams): React.ReactElement => {
    switch (fieldType) {
      case "radio":
        return (
          <Grid item xs={5}>
            <ParameterTitle name={name} />
            <MachineEditDrawerRadioGroup
              edit={edit}
              field={field}
              fieldOptions={fieldOptions}
            ></MachineEditDrawerRadioGroup>
          </Grid>
        );
      case "dial":
        return (
          <Grid item xs={5}>
            <ParameterTitle name={name} />
            <MachineEditDrawerDial
              field={field}
              fieldOptions={fieldOptions}
              edit={edit}
            ></MachineEditDrawerDial>
          </Grid>
        );
      case "slider":
        return (
          <React.Fragment>
            <SliderParameter
              edit={edit}
              field={field}
              min={fieldOptions.min}
              max={fieldOptions.max}
              parameterValue={parameterValue}
              name={name}
              style={style}
            />
          </React.Fragment>
        );
      case "knob":
        return (
          <Grid item xs={6}>
            <KnobParameter
              min={fieldOptions.min}
              max={fieldOptions.max}
              edit={edit}
              field={field}
              style={style}
              parameterValue={parameterValue}
            />
            <ParameterTitle name={name} />
          </Grid>
        );
      case "arraySelector":
        return (
          <Grid item xs={5}>
            <GridMiddleFullWidth>
              <ArraySelectorComponent
                aria-label={name}
                selectableValues={fieldOptions.options}
                currentValue={parameterValue}
                setValue={(value: any) => edit(field, value)}
                incrementValue={() => increment(field)}
                decrementValue={() => decrement(field)}
              />
              <ParameterTitle name={name} />
            </GridMiddleFullWidth>
          </Grid>
        );
      case "enumArraySelector":
        console.log(name);
        return (
          <Grid item xs={6}>
            <GridMiddleFullWidth>
              <ParameterTitle name={name} />
              <EnumArraySelectorComponent
                aria-label={name}
                selectableValues={fieldOptions.options}
                currentValue={parameterValue}
                setValue={(value: any) => edit(field, value)}
              />
            </GridMiddleFullWidth>
          </Grid>
        );
      case "numericArraySelector":
        return (
          <Grid container sx={{ mr: 0, ml: 0, pr: 0, pl: 0 }}>
            <GridMiddleFullWidth>
              <ParameterTitle name={name} />
              <NumericArraySelectorComponent
                aria-label={name}
                currentValue={parameterValue}
                setValue={(value: any) => edit(field, value)}
                // incrementValue={() => increment(field)}
                // decrementValue={() => decrement(field)}
                min={fieldOptions.min}
                max={fieldOptions.max}
              />
            </GridMiddleFullWidth>
          </Grid>
        );

      default:
        return <Box></Box>;
    }
  }
);
