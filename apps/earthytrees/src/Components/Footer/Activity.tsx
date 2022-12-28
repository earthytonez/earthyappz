import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import { observer } from "mobx-react-lite";
import { useStore } from "stores/useStore";

import { ScheduleSlot } from "stores/schedule/Store";
import { Table, TableRow, TableCell } from "@mui/material";

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

const tableCellStyle = {
  padding: 2,
  fontFamily: "Courier New",
  fontSize: "12px",
};

const About = observer((): React.ReactElement => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const rootStore = useStore();

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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Table>
            {rootStore.scheduleStore.schedule.map(
              (scheduleSlot: ScheduleSlot, i: number) => (
                <TableRow>
                  <TableCell style={tableCellStyle}>
                    {rootStore.scheduleStore.timeFor(i)}
                  </TableCell>
                  <TableCell style={tableCellStyle}>
                    <b>{scheduleSlot.activityDesc}</b>
                  </TableCell>
                </TableRow>
              )
            )}
          </Table>
        </Box>
      </Modal>
    </React.Fragment>
  );
});

export default About;
