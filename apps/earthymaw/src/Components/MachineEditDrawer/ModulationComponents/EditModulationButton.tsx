import React from "react";

import { observer } from "mobx-react-lite";

import { IconButton } from "@mui/material";
import { SsidChart } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

export default observer(() => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <IconButton
        sx={{
          position: "absolute",
          right: theme.spacing(0),
          top: theme.spacing(0),
        }}
        id="open-machine-drawer"
        color="inherit"
        size="small"
        aria-label="open drawer"
        onClick={() => {}}
      >
        <SsidChart />
      </IconButton>
    </React.Fragment>
  );
});
