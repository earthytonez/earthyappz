import { observer } from "mobx-react-lite";

import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";

import CloseIcon from "@mui/icons-material/Close";

import LoadParameter from "./LoadParameter";

import FullGridIconButton from "Components/TightBorderedGrid/FullGridButton";
import GridTopRightCorner from "Components/TightBorderedGrid/GridTopRightCorner";
import GridTopFullWidth from "Components/TightBorderedGrid/GridTopFullWidth";
import TightBorderedPaper from "Components/TightBorderedGrid/TightBorderedPaper";

interface IMachineEditDrawerContentProps {
  trackMachine: any;
  toggleOpen: Function | undefined;
  contentWidth: string;
}

const MachineEditDrawerContent = observer(
  ({
    toggleOpen,
    trackMachine,
    contentWidth,
  }: IMachineEditDrawerContentProps): React.ReactElement => {
    let editParameters = [];
    let editParameter: Function;
    let incrementParameter: Function;
    let decrementParameter: Function;

    if (trackMachine) {
      editParameters = trackMachine.editParameters;
      editParameter = trackMachine.changeParameter;
      incrementParameter = trackMachine.incrementParameter;
      decrementParameter = trackMachine.decrementParameter;
    }

    if (!editParameters) {
      return (
        <Box sx={{ padding: "0em 1em", width: "20vw" }}>
          {toggleOpen ? (
            <Button onClick={() => toggleOpen(false)}>
              <CloseIcon fontSize="small" />
            </Button>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </Box>
      );
    }

    let getEditParametersByPlugin = (editParameters: any): any => {
      let retVal: any = {};
      editParameters.forEach((eP: any) => {
        if (eP.plugin) {
          if (retVal[eP.plugin]) {
            retVal[eP.plugin].push(eP);
          } else {
            retVal[eP.plugin] = [eP];
          }
        } else {
          if (retVal["default"]) {
            retVal["default"].push(eP);
          } else {
            retVal["default"] = [eP];
          }
        }
      });
      return retVal;
    };

    let editParametersByPlugin = getEditParametersByPlugin(editParameters);
    let defaultParameters = editParametersByPlugin["default"];
    delete editParametersByPlugin["default"];

    console.log(editParametersByPlugin);

    if (!defaultParameters) {
      defaultParameters = [];
    }

    console.log(defaultParameters);

    return (
      <Box sx={{ padding: "0em 1em", width: { contentWidth } }}>
        <GridTopRightCorner>
          {toggleOpen ? (
            <FullGridIconButton onClick={() => toggleOpen(false)}>
              <CloseIcon fontSize="small" />
            </FullGridIconButton>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </GridTopRightCorner>
        <List
          sx={{
            width: "100%",
            maxWidth: contentWidth,
            bgcolor: "background.paper",
          }}
        >
          <Grid container sx={{ mb: 0, pr: 0, pl: 0 }}>
            {defaultParameters.map((parameter: any, key: number) => {
              console.log(`MachineEditDrawer: ${JSON.stringify(parameter)}`);
              return (
                <LoadParameter
                  key={key}
                  edit={editParameter}
                  increment={incrementParameter}
                  decrement={decrementParameter}
                  name={parameter.name}
                  parameterValue={parameter.val}
                  field={parameter.field}
                  fieldType={parameter.fieldType}
                  fieldOptions={parameter.fieldOptions}
                  style={parameter.style}
                />
              );
            })}
          </Grid>

          {Object.keys(editParametersByPlugin).map(
            (plugin: any, key: number) => {
              return (
                <TightBorderedPaper key={key} sx={{ mt: 3 }}>
                  <GridTopFullWidth>
                    <Typography variant="h4">{plugin}</Typography>
                  </GridTopFullWidth>
                  <Grid container>
                    {editParametersByPlugin[plugin].map(
                      (parameter: any, _key: number) => {
                        console.log(
                          `MachineEditDrawer: ${JSON.stringify(parameter)}`
                        );
                        return (
                          <LoadParameter
                            key={parameter.slug}
                            edit={editParameter}
                            increment={incrementParameter}
                            decrement={decrementParameter}
                            name={parameter.name}
                            field={parameter.field}
                            parameterValue={parameter.val}
                            fieldType={parameter.fieldType}
                            fieldOptions={parameter.fieldOptions}
                            style={parameter.style}
                          />
                        );
                      }
                    )}
                  </Grid>
                </TightBorderedPaper>
              );
            }
          )}
        </List>
      </Box>
    );
  }
);

export default MachineEditDrawerContent;
