import "./App.css";

import * as React from "react";
import { styled } from "@mui/material/styles";

import Grove from "./Components/Grove";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { observer } from "mobx-react-lite";

import { useStore } from "./stores/useStore";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const Footer = observer(
  (): React.ReactElement => {
    const rootStore = useStore();
    const playerStore = rootStore.playerStore;
    const playerAction = playerStore.currentAction;

    return (
      <React.Fragment>
        <AppBar
          position="fixed"
          color="primary"
          sx={{ top: "auto", bottom: 0 }}
        >
          <Toolbar>
            <Stack direction="row" spacing={3} alignItems="center">
              <Typography
                style={{ fontFamily: "Courier New", fontSize: "12px" }}
              >
                You are {playerAction.name}
              </Typography>
              <Stack direction="column" spacing={0} alignItems="center">
                <Typography
                  style={{ fontFamily: "Courier New", fontSize: "12px" }}
                >
                  <b>Location</b>: [{playerStore.currentLocation.X},{" "}
                  {playerStore.currentLocation.Y}]{" "}
                </Typography>
                <Typography
                  style={{ fontFamily: "Courier New", fontSize: "12px" }}
                >
                  <b>Destination</b>:{" "}
                  {playerStore.currentDestination ? (
                    <span>
                      [{playerStore.currentDestination.X},{" "}
                      {playerStore.currentDestination.Y}]
                    </span>
                  ) : (
                    <span>None</span>
                  )}
                </Typography>
              </Stack>
              <FormGroup>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontFamily: "Courier New",
                      fontSize: "12px",
                    }}
                  >
                    Dense
                  </Typography>
                  <AntSwitch
                    onChange={(
                      _ev: React.ChangeEvent<HTMLInputElement>,
                      _checked: boolean
                    ) => {
                      playerStore.togglePlantingStrategy();
                    }}
                    defaultChecked={playerStore.plantingStrategy == "SPARSE"}
                    inputProps={{ "aria-label": "ant design" }}
                  />
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontFamily: "Courier New",
                      fontSize: "12px",
                    }}
                  >
                    Sparse
                  </Typography>
                </Stack>
                <Typography
                  style={{ fontFamily: "Courier New", fontSize: "12px" }}
                >
                  Tree Planting Strategy
                </Typography>
              </FormGroup>
            </Stack>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
);

const App = observer(() => {
  const rootStore = useStore();

  return (
    <div className="App">
      <Grove map={rootStore.mapStore.map}></Grove>
      <Footer></Footer>
    </div>
  );
});

export default App;
