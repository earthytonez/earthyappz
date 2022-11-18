import * as React from "react";
import { observer } from "mobx-react-lite";

import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

export default observer(
  ({
    edit,
    field,
    fieldOptions,
  }: {
    edit: Function;
    field: string;
    fieldOptions: any;
  }): React.ReactElement => {
    if (!fieldOptions) {
      return <Box sx={{ mt: 2 }}></Box>;
    }

    const { options, current } = fieldOptions;
    return (
      <Box sx={{ mt: 2 }}>
        <RadioGroup
          name={field}
          defaultValue={current}
          onChange={(event) => {
            console.log((event.target as HTMLInputElement).value);
            edit(field, (event.target as HTMLInputElement).value);
          }}
        >
          {options.map((option: any, i: number) => {
            return (
              <FormControlLabel
                key={i}
                value={option}
                control={<Radio />}
                label={option}
              />
            );
          })}
        </RadioGroup>
      </Box>
    );
  }
);
