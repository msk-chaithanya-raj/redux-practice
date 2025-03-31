import { ORDER_PIZZA } from "./PizzaTypes";

const pizzaState: { pizzaBase: number } = {
  pizzaBase: 100,
};

const pizzaReducer = (state = pizzaState, action: { type: string }) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state,
        pizzaBase: state.pizzaBase - 1,
      };
    default:
      return state;
  }
};

export default pizzaReducer;
