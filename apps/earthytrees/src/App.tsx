import "./App.css";

import Footer from "./Components/Footer";
import Grove from "./Components/Grove";

import { observer } from "mobx-react-lite";

import { useStore } from "./stores/useStore";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { brown, green, orange } from "@mui/material/colors";
// import { PaletteOptions } from "@material-ui/core/styles/createPalette";

declare module "@mui/material/styles" {
  interface Theme {
    // palette: PaletteOptions;
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: green[900],
    },
    secondary: {
      main: brown[300],
    },
  },
  status: {
    danger: orange[500],
  },
  typography: {
    button: {
      fontSize: "12px",
      fontFamily: "Courier New",
      fontWeight: "bold",
      borderRadius: 0,
    },
  },
});

const App = observer(() => {
  const rootStore = useStore();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grove map={rootStore.mapStore.map}></Grove>
        <Footer></Footer>
        <ToastContainer position="bottom-right" />
      </ThemeProvider>
    </div>
  );
});

export default App;
