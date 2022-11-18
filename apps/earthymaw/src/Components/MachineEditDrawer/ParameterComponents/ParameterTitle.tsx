import { observer } from "mobx-react-lite";

import { Typography } from "@mui/material";

export default observer(({ name }: { name: string }) => {
  return (
    <Typography
      style={{
        fontFamily: "Source Code Pro",
        fontSize: "14px",
        textTransform: "uppercase",
        textAlign: "center",
        textDecoration: "underline",
        textDecorationStyle: "dotted",
      }}
      id="track-false-slider"
      gutterBottom
    >
      {name}
    </Typography>
  );
});
