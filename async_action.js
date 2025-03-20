const redux = require("redux");
const applyMiddleware = redux.applyMiddleware;
const thunk = require("redux-thunk").thunk;
const axios = require("axios");

// global constants
const FETCH_STATUS = {
  SUCCESS: "SUCCESS",
  REQUEST: "REQUEST",
  ERROR: "ERROR",
};

//State
const initialState = {
  loading: false,
  products: [],
  error: false,
};

// Action Creators
function fetchRequest() {
  return {
    type: FETCH_STATUS.REQUEST,
  };
}

function fetchSuccess(products) {
  return {
    type: FETCH_STATUS.SUCCESS,
    payload: products,
  };
}

function fetchError() {
  return {
    type: FETCH_STATUS.ERROR,
  };
}

// Reducers

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATUS.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_STATUS.REQUEST:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case FETCH_STATUS.REQUEST:
      return {
        ...state,
        loading: false,
        error: true,
      };
  }
};

// Thunk Action Creator
const fetchProducts = () => {
  return function (dispatch) {
    dispatch(fetchRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch(fetchSuccess(products));
      })
      .catch((err) => {
        dispatch(fetchError());
      });
  };
};

// creating redux store

const store = redux.createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchProducts());
