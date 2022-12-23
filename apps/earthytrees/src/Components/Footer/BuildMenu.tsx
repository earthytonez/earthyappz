import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import { observer } from "mobx-react-lite";
import { useUIStore } from "stores/useUIStore";
import { TBuildingSlug } from "../../stores/buildings/buildings";

const BuildMenu = observer((): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const uiStore = useUIStore();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (uiStore.isBuilding) {
      uiStore.clearActions();
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = (
    ev: React.MouseEvent<HTMLElement>,
    building: TBuildingSlug
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
        {uiStore.isBuilding ? "Cancel" : "Build"}
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
            handleClose(ev, "house");
          }}
        >
          House
        </MenuItem>
        <MenuItem
          onClick={(ev) => {
            handleClose(ev, "dock");
          }}
        >
          Dock
        </MenuItem>
      </Menu>
    </Box>
  );
});

export default BuildMenu;
