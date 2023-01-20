import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decAge, incAge } from "../redux";

const NewHooksAgeContainer = () => {
  const [number, setNumber] = useState(1);
  const age = useSelector((state) => state.age.age);
  const dispatch = useDispatch();
  return (
    <div className="container my-5">
      <h1>Age : {age}</h1>
      <button className="my-5" onClick={() => dispatch(incAge())}>
        Increase Age
      </button>
      <button onClick={() => dispatch(decAge())}>Decrease Age</button>
      <br />
      <input
        type="number"
        value={number}
        min="0"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(incAge(number))}>
        Increase {number} Age
      </button>
      <button onClick={() => dispatch(decAge(number))}>
        Decrease {number} Age
      </button>
    </div>
  );
};

export default NewHooksAgeContainer;
