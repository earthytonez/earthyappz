import "./App.css";

import Footer from "./Components/Footer";
import Grove from "./Components/Grove";

import { observer } from "mobx-react-lite";

import { useStore } from "./stores/useStore";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = observer(() => {
  const rootStore = useStore();

  return (
    <div className="App">
      <Grove map={rootStore.mapStore.map}></Grove>
      <Footer></Footer>
      <ToastContainer position="bottom-right" />
    </div>
  );
});

export default App;
