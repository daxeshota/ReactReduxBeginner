import { BUY_CAKE } from "./cakeType";
import { SELL_CAKE } from "./cakeType";

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: Number(number),
  };
};
export const sellCake = (number = 1) => {
  console.log(number);

  return {
    type: SELL_CAKE,
    payload: Number(number),
  };
};
