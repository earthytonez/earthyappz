import * as React from "react";
import { observer } from "mobx-react-lite";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import StepSequencerAnimation from "../StepSequencerAnimation";

import MachineEditDrawerContent from "../../MachineEditDrawer/MachineEditDrawerContent";

import CloseIcon from "@mui/icons-material/Close";

import { useStore } from "../../../stores/useStore";
import Track from "../../../stores/Track";

import { useUIStore } from "../../../stores/UI/useUIStore";
import { Typography } from "@mui/material";

const MODAL_WIDTH = "96vw";
const PANE_WIDTH = "100%";

const TrackEditModal = observer((): React.ReactElement => {
  const store = useStore();
  const uiStore = useUIStore();

  let sectionLength = store.musicFeaturesStore.musicSectionLength.val;

  const { toggleTrackEdit, trackEditID } = uiStore;

  let track = store.trackStore.tracks.find(
    (track: Track) => track.id === trackEditID
  );

  if (track) {
    // let arranger = track.arranger;
    let gateSequencer = track.gateSequencer;
    let sequencer = track.sequencer;
    let synthesizer = track.synthesizer;

    return (
      <Paper>
        <Grid container spacing={2} sx={{ width: MODAL_WIDTH }}>
          {/*} <MachineEditDrawerContent machine={arranger} >*/}
          <Grid item xs={12} alignItems="center" justifyContent="center">
            <StepSequencerAnimation
              gateSequencer={track.gateSequencer}
              sequencer={track.sequencer}
              synthesizer={track.synthesizer}
              sectionLength={sectionLength}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Gate Sequencer {gateSequencer?.name}</Typography>
            <MachineEditDrawerContent
              toggleOpen={undefined}
              trackMachine={gateSequencer}
              contentWidth={PANE_WIDTH}
            />
          </Grid>{" "}
          <Grid item xs={4}>
            <Typography>Sequencer {sequencer?.name}</Typography>
            <MachineEditDrawerContent
              toggleOpen={undefined}
              trackMachine={sequencer}
              contentWidth={PANE_WIDTH}
            />
          </Grid>{" "}
          <Grid item xs={4}>
            <Typography>Synthesizer {synthesizer?.name}</Typography>

            <MachineEditDrawerContent
              toggleOpen={undefined}
              trackMachine={synthesizer}
              contentWidth={PANE_WIDTH}
            />
          </Grid>
          <Button onClick={() => toggleTrackEdit(false)}>
            <CloseIcon fontSize="small" />
          </Button>
        </Grid>
      </Paper>
    );
  }

  return (
    <Paper>
      <Box sx={{ padding: "0em 1em", width: MODAL_WIDTH }}>
        <Button onClick={() => toggleTrackEdit(false)}>
          <CloseIcon fontSize="small" />
        </Button>
      </Box>
    </Paper>
  );
});

export default TrackEditModal;
