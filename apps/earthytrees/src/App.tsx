import "./App.css";

import Grove from "./Components/Grove";

import Footer from "./Components/Footer";

import { observer } from "mobx-react-lite";

import { useStore } from "./stores/useStore";

const App = observer(() => {
  const rootStore = useStore();

  return (
    <div className="App">
      <Grove map={rootStore.mapStore.map}></Grove>
      <Footer></Footer>
    </div>
  );
});

export default App;
