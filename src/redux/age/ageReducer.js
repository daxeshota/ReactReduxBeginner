import { INC_AGE } from "./ageType";
import { DEC_AGE } from "./ageType";

const intialState = {
  age: 18,
};

const ageReducer = (state = intialState, action) => {
  // console.log(action)
  switch (action.type) {
    case INC_AGE:
      return {
        ...state,
        age: state.age + action.payload,
      };
    case DEC_AGE:
      return {
        ...state,
        age: state.age - action.payload,
      };
    default:
      return state;
  }
};

export default ageReducer;
