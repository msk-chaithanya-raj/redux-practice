import { createStore } from "redux";
import pizzaReducer from "./pizza/PizzaReducers";

const store = createStore(pizzaReducer);

export default store;
