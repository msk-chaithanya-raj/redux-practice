import React from "react";
import { connect } from "react-redux";
import "@fontsource/poppins"; // Importing the font
import { orderPizza } from "./redux";

const PizzaBox = (props) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center w-80">
        <h1 className="text-2xl font-semibold font-[Poppins] text-gray-800 mb-4">
          🍕 Pizzas Available: {props.pizzaBase}
        </h1>
        <button
          className="bg-red-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300 hover:cursor-pointer"
          onClick={props.orderPizza}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pizzaBase: state.pizzaBase,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderPizza: () => dispatch(orderPizza()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBox);
