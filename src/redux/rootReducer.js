import cakeReducer from "./cake/cakeReducer";
import ageReducer from "./age/ageReducer";
import { combineReducers } from "redux";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  age: ageReducer,
  user: userReducer,
});
export default rootReducer;
