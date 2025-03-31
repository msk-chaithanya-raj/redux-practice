const redux = require("redux");

// creating a store in redux ( for practice only)
const createStore = redux.createStore;
const combineReducers = redux.combineReducers; // newly learned topic

const ORDER_POMEGRANATE = "ORDER_POMEGRANATE";
const ORDER_ORANGE = "ORDER_ORANGE";
const CANCEL_ORDER_POMEGRANATE = "CANCEL_ORDER_POMEGRANATE";
const CANCEL_ORDER_ORANGE = "CANCEL_ORDER_ORANGE";

// Action Creator
function orderPomegranate() {
  return {
    type: ORDER_POMEGRANATE,
  };
}

function orderOrange() {
  return {
    type: ORDER_ORANGE,
  };
}

function cancelOrderPomegranate() {
  return {
    type: CANCEL_ORDER_POMEGRANATE,
  };
}
function cancelOrderOrange() {
  return {
    type: CANCEL_ORDER_ORANGE,
  };
}

const promegranateStockState = {
  pomegranteStock: 50,
};
const orangeStockState = {
  orangeStock: 20,
};

// Reducer
const promegranateStockReducer = (state = promegranateStockState, action) => {
  switch (action.type) {
    case ORDER_POMEGRANATE:
      console.log("\nOrdering Pomegrante...... Thanks for waiting ;)");

      return {
        ...state,
        pomegranteStock: state.pomegranteStock - 1,
      };
    case CANCEL_ORDER_POMEGRANATE:
      console.log("\nCanceling your Order...... visit again :(");
      return {
        ...state,
        pomegranteStock: state.pomegranteStock + 1,
      };
    default:
      return state;
  }
};

const orangeStockReducer = (state = orangeStockState, action) => {
  switch (action.type) {
    case ORDER_ORANGE:
      console.log("\nOrdering Orange...... Thanks for waiting ;)");

      return {
        ...state,
        orangeStock: state.orangeStock - 1,
      };
    case CANCEL_ORDER_ORANGE:
      console.log("\nCanceling your Order...... visit again :(");
      return {
        ...state,
        orangeStock: state.orangeStock + 1,
      };
    default:
      return state;
  }
};

// create and store our application state in redux

const reducer = combineReducers({
  promegranate: promegranateStockReducer,
  orange: orangeStockReducer,
});
const store = createStore(reducer);

// get current state
console.log("Intital state : ", store.getState());

// registering listeners via subscriber(listener)
// subscriber reutrns unsubscriber for disconnecting
const unsubscribe = store.subscribe(() =>
  console.log("stock left - ", store.getState())
);

store.dispatch(orderPomegranate());
store.dispatch(orderPomegranate());
store.dispatch(orderPomegranate());
store.dispatch(cancelOrderPomegranate());

store.dispatch(orderOrange());
store.dispatch(orderOrange());
store.dispatch(cancelOrderOrange());

unsubscribe();

//IMP*  UNSUBSCRIBED ... so no updates in application!! ( state is updated internally )

store.dispatch(orderPomegranate());
console.log(
  "State after dispatching post-unsubscribe: ",
  store.getState(),
  "\n"
);
