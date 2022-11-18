import React from "react";

import { observer } from "mobx-react-lite";
import { Droppable } from "react-beautiful-dnd";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import LaunchIcon from "@mui/icons-material/Launch";
import SearchIcon from "@mui/icons-material/Search";

import FullGridIconButton from "../../TightBorderedGrid/FullGridIconButton";
import GridBottomRightCorner from "../../TightBorderedGrid/GridBottomRightCorner";
import GridBottomLeftCorner from "../../TightBorderedGrid/GridBottomLeftCorner";
import GridTopRightCorner from "../../TightBorderedGrid/GridTopRightCorner";
import GridTopLeftCorner from "../../TightBorderedGrid/GridTopLeftCorner";
import TightBorderedPaper from "../../TightBorderedGrid/TightBorderedPaper";
import MachinePlaceholder from "./MachinePlaceholder";

import { UniqueColors } from "../../Decorations";
import { useUIStore } from "../../../stores/UI/useUIStore";
import { useStore } from "../../../stores/useStore";

import { IMachineTypeSlug } from "../../../stores/Machines/MachineTypes/IMachineType";

import SearchPopover from "./SearchPopover";

interface DroppableTrackElementProps {
  title: "Synthesizer" | "Sequencer" | "Arranger" | "Gate Sequencer";
  slug: IMachineTypeSlug;
  track_id: string;
  machine: any;
}

interface PresetsProps {}

const Presets = observer((_props: PresetsProps) => {
  return <div></div>;
});

const LoadingPlaceHolder = observer(
  ({
    machine,
    placeholder,
    slug,
  }: {
    machine: any;
    placeholder: any;
    slug: IMachineTypeSlug;
  }): React.ReactElement => {
    return machine && machine.loading ? (
      <Box>Loading...</Box>
    ) : (
      <MachinePlaceholder placeholder={placeholder} machineType={slug} />
    );
  }
);

const DroppableTrackElement = observer(
  ({ track_id, machine, title, slug }: DroppableTrackElementProps) => {
    const uiStore = useUIStore();
    const stores = useStore();

    const { toggleObjectEdit } = uiStore;

    let placeholder = `Drop ${title} Here`;

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
      null
    );

    const toggleSearchPopover = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      console.log("Toggle Search Popover");
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleChange = (_ev: any, value: any) => {
      setAnchorEl(null);
      let track = stores.trackStore.fromID(track_id);
      if (track && value) {
        track.assignMachine(slug, value.slug);
      }
    };

    return (
      <Droppable
        // index={track_id + 11}
        droppableId={`track-${track_id}-${slug}`}
      >
        {(provided, _snapshot) => (
          <TightBorderedPaper>
            <Card
              ref={provided.innerRef}
              // {...provided.draggableProps}
              // {...provided.dragHandleProps}
              sx={{
                minWidth: "90%",
                minHeight: "100%",
                borderRadius: 0,
                gap: 0,
                borderTop: 0,
                borderBottom: 0,
              }}
            >
              <Box>
                {machine &&
                machine.name !== "" &&
                machine.name !== undefined ? (
                  <Grid container spacing={0}>
                    <GridTopLeftCorner item xs={10}>
                      <Typography
                        color="neutral.500"
                        fontWeight={700}
                        sx={{
                          fontSize: "12px",
                          textTransform: "uppercase",
                          letterSpacing: ".1rem",
                        }}
                      >
                        {machine.name}
                      </Typography>
                    </GridTopLeftCorner>
                    <GridTopRightCorner item xs={2}>
                      <FullGridIconButton
                        aria-label={`edit ${machine.name}`}
                        size="small"
                        onClick={() =>
                          toggleObjectEdit(true, track_id, slug, machine.slug)
                        }
                      >
                        <LaunchIcon fontSize="small" />
                      </FullGridIconButton>
                    </GridTopRightCorner>
                  </Grid>
                ) : (
                  <LoadingPlaceHolder
                    machine={machine}
                    placeholder={placeholder}
                    slug={slug}
                  />
                )}
                {provided.placeholder}
              </Box>
              {machine && machine.name !== "" ? (
                <Grid container>
                  <GridBottomLeftCorner item xs>
                    <UniqueColors
                      name={`${machine.machineType}${machine.name}`}
                    />
                  </GridBottomLeftCorner>
                  <GridBottomRightCorner item xs>
                    <Typography style={{ fontFamily: "Source Code Pro" }}>
                      {title}
                    </Typography>
                  </GridBottomRightCorner>
                </Grid>
              ) : (
                ""
              )}
              {slug !== undefined ? (
                <Grid container>
                  <GridBottomLeftCorner item xs={10}>
                    <Presets />
                  </GridBottomLeftCorner>
                  <GridBottomRightCorner item xs={2}>
                    <FullGridIconButton
                      aria-label={`Search`}
                      size="small"
                      onClick={toggleSearchPopover}
                    >
                      <SearchIcon fontSize="small" />
                    </FullGridIconButton>
                    <SearchPopover
                      title={title}
                      type={slug}
                      open={Boolean(anchorEl)}
                      anchorEl={anchorEl}
                      handleChange={handleChange}
                      handleClose={handleClose}
                    />
                  </GridBottomRightCorner>
                </Grid>
              ) : (
                <div></div>
              )}
            </Card>
          </TightBorderedPaper>
        )}
      </Droppable>
    );
  }
);

export default DroppableTrackElement;
