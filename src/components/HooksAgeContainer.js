import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decAge, incAge } from "../redux";


const AgeContainer = () => {
  const age = useSelector((state) => state.age.age);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Age : {age}</h1>
      <button onClick={() => dispatch(incAge())}>Increase Age</button>
      <button onClick={() => dispatch(decAge())}>Decrease Age</button>
    </div>
  );
};

export default AgeContainer;
