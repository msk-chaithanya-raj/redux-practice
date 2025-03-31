import React from "react";
import PizzaBox from "./components/PizzaBox.tsx";
import { Provider } from "react-redux";
import store from "./components/redux/store.ts";

const App = () => {
  return (
    <Provider store={store}>
      <PizzaBox />;
    </Provider>
  );
};

export default App;
