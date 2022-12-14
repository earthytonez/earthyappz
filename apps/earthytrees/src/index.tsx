import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { StoreProvider } from "./stores/useStore";
import { UIStoreProvider } from "./stores/useUIStore";

import mixpanel from "mixpanel-browser";

mixpanel.init("71c4f2e2d7bce2d394dec58b19a14a88", { debug: true });
mixpanel.track("EarthyTrees Landing Page");

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StoreProvider>
    <UIStoreProvider>
      <App />{" "}
    </UIStoreProvider>
  </StoreProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
