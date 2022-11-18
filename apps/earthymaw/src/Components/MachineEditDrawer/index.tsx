import * as React from "react";
import { observer } from "mobx-react-lite";

import Drawer from "@mui/material/Drawer";

import { useStore } from "../../stores/useStore";
import Track from "../../stores/Track";

import { useUIStore } from "../../stores/UI/useUIStore";
import MachineEditDrawerContent from "./MachineEditDrawerContent";

type Anchor = "top" | "left" | "bottom" | "right";

const DRAWER_WIDTH = "24vw";

const MachineEditDrawer = observer((): React.ReactElement => {
  const store = useStore();
  const uiStore = useUIStore();

  const {
    toggleObjectEdit,
    objectEditTrack,
    objectEditType,
    objectEditIsOpen,
  } = uiStore;

  let anchor: Anchor = "right";

  let trackMachine;

  if (objectEditTrack !== undefined && objectEditType && objectEditIsOpen) {
    switch (objectEditType) {
      case "arranger":
        trackMachine = store.trackStore.tracks.find(
          (track: Track) => track.id === objectEditTrack
        )!.arranger;
        break;
      case "gateSequencer":
        trackMachine = store.trackStore.tracks.find(
          (track: Track) => track.id === objectEditTrack
        )!.gateSequencer;
        break;
      case "sequencer":
        trackMachine = store.trackStore.tracks.find(
          (track: Track) => track.id === objectEditTrack
        )!.sequencer;
        break;
      case "synthesizer":
        trackMachine = store.trackStore.tracks.find(
          (track: Track) => track.id === objectEditTrack
        )!.synthesizer;
        break;
    }
  }

  return (
    <Drawer anchor={anchor} open={uiStore.objectEditIsOpen} sx={{ p: 4 }}>
      <MachineEditDrawerContent
        trackMachine={trackMachine}
        toggleOpen={toggleObjectEdit}
        contentWidth={DRAWER_WIDTH}
      />
    </Drawer>
  );
});

export default MachineEditDrawer;
