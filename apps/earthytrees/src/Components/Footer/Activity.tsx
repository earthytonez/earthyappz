import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";

import { observer } from "mobx-react-lite";
import { useStore } from "stores/useStore";

import { ScheduleSlot } from "stores/schedule/Store";
import { Table, TableRow, TableCell, TableBody } from "@mui/material";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const grid = 8;

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid,
  margin: `0 0 ${grid}px 0`,
  width: "100%",
  // change background colour if dragging
  background: isDragging ? "lightgreen" : "inherit",
  "&:hover": {
    background: "lightgrey !important",
    margin: `1px 0 ${grid}px 0`,
  },

  // styles we need to apply on draggables
  ...draggableStyle,
  top: "80px",
  left: 0,
  borderBottom: undefined,
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const tableCellStyle = {
  padding: 2,
  fontFamily: "Courier New",
  fontSize: "12px",
};

const Activity = observer((): React.ReactElement => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const rootStore = useStore();

  const onBeforeCapture = (_props: any) => {
    console.log("onBeforeCapture");
  };

  const onBeforeDragStart = (_props: any) => {
    console.log("onBeforeDragStart");
  };

  const onDragStart = (_props: any) => {
    console.log("onDragStart");
  };

  const onDragUpdate = (_props: any) => {
    console.log("onDragUpdate");
  };

  const onDragEnd = async (props: any) => {
    if (
      props.destination.droppableId === "track-list" &&
      props.source.droppableId !== "track-list"
    ) {
      console.warn("Can't drop a module onto the track list");
      return;
    }

    console.log("Dropping!");
    console.log(props);

    rootStore.scheduleStore.setIndexActivity(
      parseInt(props.destination.droppableId) + 1,
      props.draggableId
    );
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        size="small"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpen}
        color="inherit"
      >
        Schedule
      </Button>
      <DragDropContext
        onBeforeCapture={onBeforeCapture}
        onBeforeDragStart={onBeforeDragStart}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container>
              <Grid item xs={6} p={1}>
                <Table>
                  {rootStore.scheduleStore.activities.map(
                    (activity: any, i: number) => (
                      <Droppable droppableId={`${activity.slug}`} key={i}>
                        {(provided, _snapshot) => (
                          <TableBody ref={provided.innerRef}>
                            <Draggable
                              key={i}
                              draggableId={activity.slug}
                              index={i}
                            >
                              {(draggableProvided, _draggableSnapshot) => (
                                <TableRow
                                  ref={draggableProvided.innerRef}
                                  {...draggableProvided.draggableProps}
                                  {...draggableProvided.dragHandleProps}
                                  style={getItemStyle(
                                    _draggableSnapshot.isDragging,
                                    draggableProvided.draggableProps.style
                                  )}
                                >
                                  <TableCell style={tableCellStyle}>
                                    {activity.name}
                                  </TableCell>
                                </TableRow>
                              )}
                            </Draggable>
                          </TableBody>
                        )}
                      </Droppable>
                    )
                  )}
                </Table>
              </Grid>
              <Grid item xs={6} p={1}>
                <Table>
                  <TableBody>
                    {rootStore.scheduleStore.schedule.map(
                      (scheduleSlot: ScheduleSlot, i: number) => (
                        <Droppable
                          // index={track_id + 11}
                          key={i}
                          droppableId={`${i}`}
                        >
                          {(provided, _snapshot) => (
                            <TableRow ref={provided.innerRef}>
                              <TableCell style={tableCellStyle}>
                                {rootStore.scheduleStore.timeFor(i)}
                              </TableCell>
                              <TableCell style={tableCellStyle}>
                                <b>{scheduleSlot.activityDesc}</b>
                              </TableCell>
                            </TableRow>
                          )}
                        </Droppable>
                      )
                    )}
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </DragDropContext>
    </React.Fragment>
  );
});

export default Activity;
