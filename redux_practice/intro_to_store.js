console.log("\nRemove comments to run intro_to_store.js - 'Ctrl + /' \n");

// const redux = require("redux");

// // creating a store in redux ( for practice only)
// const createStore = redux.createStore;

// const ORDER_PIZZA = "ORDER_PIZZA";
// const CANCEL_ORDER = "CANCEL_ORDER";

// // Action Creator
// function orderPizza() {
//   return {
//     type: ORDER_PIZZA,
//   };
// }

// function cancelOrder() {
//   return {
//     type: CANCEL_ORDER,
//   };
// }

// // Reducer
// const initialState = {
//   pizzaBase: 100,
// };

// const reducer = (state = initialState, action) => {
//   console.log("\nReducer called with action:", action.type);
//   switch (action.type) {
//     case ORDER_PIZZA:
//       console.log("\nOrdering Pizaa...... Thanks for waiting ;)");

//       return {
//         ...state,
//         pizzaBase: state.pizzaBase - 1,
//       };
//     case CANCEL_ORDER:
//       console.log("\nCanceling your Order...... visit again :(");
//       return {
//         ...state,
//         pizzaBase: state.pizzaBase + 1,
//       };
//     default:
//       return state;
//   }
// };

// // create and store our application state in redux
// const store = createStore(reducer);

// // get current state
// console.log("Intital state : ", store.getState());

// // registering listeners via subscriber(listener)
// // subscriber reutrns unsubscriber for disconnecting
// const unsubscribe = store.subscribe(() =>
//   console.log("Updated State with pizza count - ", store.getState().pizzaBase)
// );

// store.dispatch(orderPizza());
// store.dispatch(orderPizza());
// store.dispatch(orderPizza());
// store.dispatch(cancelOrder());

// unsubscribe();

// //IMP*  UNSUBSCRIBED ... so no updates in application!! ( state in updated internally )

// store.dispatch(orderPizza());
// console.log(
//   "State after dispatching post-unsubscribe: ",
//   store.getState(),
//   "\n"
// );
