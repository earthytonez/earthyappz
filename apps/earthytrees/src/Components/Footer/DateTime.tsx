import * as React from "react";
import Typography from "@mui/material/Typography";

import { observer } from "mobx-react-lite";
import TimeStore from "stores/time/Store";

const DateTime = observer(
  (params: { timeStore: TimeStore }): React.ReactElement => {
    return (
      <React.Fragment>
        <Typography style={{ fontFamily: "Courier New", fontSize: "14px" }}>
          {params.timeStore.formattedMonth} {params.timeStore.formattedDay},{" "}
          {params.timeStore.formattedYear} {params.timeStore.formattedHour}:
          {params.timeStore.formattedMinute} {params.timeStore.formattedAMPM}
        </Typography>
      </React.Fragment>
    );
  }
);

export default DateTime;
