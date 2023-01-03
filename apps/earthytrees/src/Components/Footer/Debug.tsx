import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import { observer } from "mobx-react-lite";

import { useStore } from "../../stores/useStore";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Debug = observer((props: any): React.ReactElement => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const rootStore = useStore();

  return (
    <React.Fragment>
      <Button
        variant="text"
        size="small"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpen}
        color="inherit"
        style={{ padding: 0, margin: 0 }}
      >
        {props.children}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            color="black"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Debug Info
          </Typography>
          <List>
            <ListItem>
              Scheduled Activity is{" "}
              {rootStore.scheduleStore.getCurrentActivity()}
            </ListItem>
            <ListItem>
              Status is{" "}
              {JSON.stringify(rootStore.playerStore.currentStatus.status)}
            </ListItem>
            <ListItem>
              Task is{" "}
              {JSON.stringify(rootStore.playerStore.currentTask.taskName)}
            </ListItem>
            <ListItem>
              Current Square is{" "}
              {JSON.stringify(
                rootStore.mapStore.getSquare(
                  rootStore.playerStore.currentLocation
                )
              )}
            </ListItem>
            <ListItem>
              {rootStore.playerStore.hasDestination
                ? `Have a destination, it is: ${rootStore.playerStore.currentDestination}`
                : "No Destination"}
            </ListItem>
            <ListItem>
              Action is {rootStore.playerStore.currentTask.getAction()}
            </ListItem>
          </List>
        </Box>
      </Modal>
    </React.Fragment>
  );
});

export default Debug;
