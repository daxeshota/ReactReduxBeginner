import { INC_AGE } from "./ageType";
import { DEC_AGE } from "./ageType";

export const incAge = (number = 1) => {
  return {
    type: INC_AGE,
    payload: Number(number),
  };
};
export const decAge = (number = 1) => {
  return {
    type: DEC_AGE,
    payload: Number(number),
  };
};
