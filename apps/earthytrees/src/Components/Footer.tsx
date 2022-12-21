import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import FormGroup from "@mui/material/FormGroup";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import Switch from "@mui/material/Switch";

import BuildMenu from "./Footer/BuildMenu";

import { styled } from "@mui/material/styles";

import { observer } from "mobx-react-lite";
import { useStore } from "../stores/useStore";
import { useUIStore } from "stores/useUIStore";

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

const Footer = observer((): React.ReactElement => {
  const rootStore = useStore();
  const uiStore = useUIStore();
  const playerStore = rootStore.playerStore;
  const playerAction = playerStore.currentAction;

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Grid container>
            <Grid item xs={6}>
              <Stack direction="row" spacing={3} alignItems="center">
                <Typography
                  style={{ fontFamily: "Courier New", fontSize: "12px" }}
                >
                  You are {playerAction.name}{" "}
                  {uiStore.isBuilding
                    ? `and trying to place a ${uiStore.isBuildingType}`
                    : ""}
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
                      defaultChecked={playerStore.plantingStrategy === "SPARSE"}
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
            </Grid>
            <Grid item xs={3} justifyContent="flex-end">
              <Grid item>
                <BuildMenu />
              </Grid>
            </Grid>
            <Grid item xs={3} justifyContent="flex-end">
              <Grid item>
                <a href="https://mastodon.social/@mikkergp">
                  <img src="/mastodon-32.png" alt="Mastodon Icon" />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
});

export default Footer;
