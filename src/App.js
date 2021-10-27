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

/*TODO:
  - Add cookies to save state
  - style skillbar with palette
  - icons to profile 
  - icons to titles
  - Mobile view
*/
