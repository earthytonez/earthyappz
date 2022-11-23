import * as React from "react";

import { observer } from "mobx-react-lite";

import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import Track from "../../stores/Track";

import DroppableTrackElement from "./MachineComponent/DroppableTrackElement";
import TrackSettingsComponent from "./TrackSettings/TrackSettingsComponent";
import StepSequencerAnimation from "./StepSequencerAnimation";

import { useUIStore } from "../../stores/UI/useUIStore";

interface TrackComponentProps {
  track: Track;
  sectionLength: number;
}

const TRACK_GRID_STYLE = {
  paddingTop: "0px",
  paddingBottom: "0px",
  paddingLeft: "2px",
  height: "8rem",
  maxHeight: "8rem",
};

const TRACK_GRID_SX = {
  margin: 0,
  pt: 0,
  pb: 0,
  mb: 0,
  pl: 0,
  width: "20%",
  height: "100%",
};

const TrackComponent = observer(
  ({ track, sectionLength }: TrackComponentProps): React.ReactElement => {
    const uiStore = useUIStore();

    const { toggleTrackEdit } = uiStore;

    return (
      <Grid
        container
        direction="row"
        spacing={1}
        p={2}
        style={{
          backgroundColor: "#000",
          marginTop: "3px",
          padding: 0,
          paddingLeft: "1em",
          paddingTop: "0",
          height: "8rem",
        }}
      >
        <Grid item p={0} style={TRACK_GRID_STYLE} sx={TRACK_GRID_SX}>
          <TrackSettingsComponent
            track={track}
            toggleTrackEdit={toggleTrackEdit}
          />
        </Grid>
        {/* <Grid
            sx={TRACK_GRID_SX}
          >
            <DroppableTrackElement
              track_id={track.id}
              machine={track.arranger}
              slug="arranger"
              title="Arranger"
              placeholder="Drop Arranger Here"
            ></DroppableTrackElement>
          </Grid> */}
        <Grid item style={TRACK_GRID_STYLE} sx={TRACK_GRID_SX}>
          <DroppableTrackElement
            track_id={track.id!}
            machine={track.gateSequencer}
            slug="gateSequencer"
            title="Gate Sequencer"
          ></DroppableTrackElement>
        </Grid>

        <Grid item style={TRACK_GRID_STYLE} sx={TRACK_GRID_SX}>
          <DroppableTrackElement
            track_id={track.id!}
            machine={track.sequencer}
            slug="sequencer"
            title="Sequencer"
          ></DroppableTrackElement>
        </Grid>

        <Grid item style={TRACK_GRID_STYLE} sx={TRACK_GRID_SX}>
          <DroppableTrackElement
            track_id={track.id!}
            machine={track.synthesizer}
            slug="synthesizer"
            title="Synthesizer"
          ></DroppableTrackElement>
        </Grid>
        <Grid item style={TRACK_GRID_STYLE} sx={TRACK_GRID_SX}>
          <StepSequencerAnimation
            gateSequencer={track.gateSequencer}
            sequencer={track.sequencer}
            synthesizer={track.synthesizer}
            sectionLength={sectionLength}
          />
        </Grid>
        <Divider sx={{ m: 0 }} />
      </Grid>
    );
  }
);

export default TrackComponent;
