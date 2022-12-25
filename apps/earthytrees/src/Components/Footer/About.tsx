import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import { observer } from "mobx-react-lite";
import { useTheme } from "@mui/material/styles";

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

const About = observer((): React.ReactElement => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  console.log(theme);
  console.log(theme);
  console.log(theme);
  console.log(theme);

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
        About
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
            Trees
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Trees is a meditative incremental game about building a homestead in
            the wilderness. The game is currently in Alpha stage, please look
            around, provide feedback (
            <a href="https://mastodon.social/@mikkergp">
              @mikkergp on mastodon.social
            </a>
            ) and have fun!
          </Typography>
        </Box>
      </Modal>
    </React.Fragment>
  );
});

export default About;
