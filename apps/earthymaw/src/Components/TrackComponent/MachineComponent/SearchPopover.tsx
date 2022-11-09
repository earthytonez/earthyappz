import { Autocomplete, Popover, TextField, Typography } from "@mui/material";
import { useStore } from "../../../stores/useStore";

interface SearchPopoverProps {
  anchorEl: any;
  handleClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
  handleChange: (event: any, value: any, reason: any, details?: any) => void;
  open: boolean;
  title: string;
  type: string;
}

function SearchPopover({
  anchorEl,
  handleClose,
  handleChange,
  open,
  title,
  type,
}: SearchPopoverProps) {
  const stores = useStore();

  let options: any[] = [];

  switch (type) {
    case "synthesizer":
      options = stores.synthTypeStore.getAll();
      break;
    case "sequencer":
      options = stores.sequencerTypeStore.getAll();
      break;
    case "gateSequencer":
      options = stores.gateSequencerTypeStore.getAll();
      break;
    case "arranger":
      options = stores.arrangerTypeStore.getAll();
      break;
  }

  options = options.map((option: any) => {
    return {
      label: option.name,
      slug: option.slug,
    };
  });

  return (
    <Popover
      id="search-box-popover"
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      sx={{
        height: "200%",
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Typography sx={{ p: 2 }}>Search for a</Typography>
      <Autocomplete
        autoHighlight
        id="combo-box-demo"
        options={options}
        onChange={handleChange}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={title} />}
      />
    </Popover>
  );
}

export default SearchPopover;
