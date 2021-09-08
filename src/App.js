import Home from "views/home/HomeEngine";
import { createStore } from "redux";
import { Provider } from "react-redux";
import store from "./store/store";

const storeState = createStore(store);

function App() {
  return (
    <Provider store={storeState}>
      <Home />
    </Provider>
  );
}

export default App;
