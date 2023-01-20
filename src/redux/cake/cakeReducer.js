/* eslint-disable default-case */
import { BUY_CAKE } from "./cakeType";
import { SELL_CAKE } from "./cakeType";

export const intialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes -  action.payload,
      };
    case SELL_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    default:
      return state;
  }
};

export default cakeReducer;
