import "./App.css";

import * as React from "react";

import Grove from "./Components/Grove";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { observer } from "mobx-react-lite";

import { useStore } from "./stores/useStore";

const Footer = observer(
  (params: any): React.ReactElement => {
    return (
      <React.Fragment>
        <AppBar
          position="fixed"
          color="primary"
          sx={{ top: "auto", bottom: 0 }}
        >
          <Toolbar>Player is: {params.playerAction}</Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
);

function App() {
  const rootStore = useStore();

  return (
    <div className="App">
      <Grove map={rootStore.mapStore.map}></Grove>
      <Footer playerAction={rootStore.playerStore.currentAction.name}></Footer>
    </div>
  );
}

export default App;
