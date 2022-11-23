import React from "react";

import { observer } from "mobx-react-lite";

// import Button from "@mui/material/Button";

import GridTopLeftCorner from "Components/TightBorderedGrid/GridTopLeftCorner";
import { Grid } from "@mui/material";
// import { useUIStore } from "../../../stores/UI/useUIStore";

import { IMachineTypeSlug } from "../../../stores/Machines/MachineTypes/IMachineType";
import { Typography } from "@mui/material";

interface IMachinePlaceholderProps {
  machineType: IMachineTypeSlug;
  placeholder: string;
}

export default observer(
  ({ placeholder }: IMachinePlaceholderProps): React.ReactElement => {
    // const uiStore = useUIStore();

    return (
      <Grid container spacing={0}>
        <GridTopLeftCorner item xs={12} style={{ textOverflow: "ellipsis" }}>
          <Typography
            color="neutral.500"
            fontWeight={700}
            sx={{
              float: "left",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: ".1rem",
              marginRight: ".5rem",
            }}
          >
            {placeholder}
          </Typography>
        </GridTopLeftCorner>
      </Grid>
    );
  }
);

//     {/* <Button
//       id="browse-machines"
//       variant="outlined"
//       onClick={(_ev: any) => uiStore.browseMachines(machineType)}
//     >
//       Browse {machineType}s
//     </Button> */}
//   </Box>
// </Box>
