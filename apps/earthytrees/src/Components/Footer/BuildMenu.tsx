import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import { observer } from "mobx-react-lite";
import { useUIStore } from "stores/useUIStore";
import { TBuilding } from "stores/UI.store";

const BuildMenu = observer((): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const uiStore = useUIStore();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (
    ev: React.MouseEvent<HTMLElement>,
    building: TBuilding
  ) => {
    console.log(ev);
    uiStore.setBuilding(building);
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Button
        variant="outlined"
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        Build
      </Button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        // onClose={handleClose}
      >
        <MenuItem
          onClick={(ev) => {
            handleClose(ev, "HOUSE");
          }}
        >
          House
        </MenuItem>
      </Menu>
    </Box>
  );
});

export default BuildMenu;
