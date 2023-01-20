import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake,sellCake } from "../redux";

const HooksCakeContainer = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes);
    const dispatch = useDispatch()
  return (
    <div>
      <h1>Num of Cakes - {numOfCakes}</h1>
      <button onClick={()=>dispatch(buyCake())}>Decrease Cake</button>
      <button onClick={()=>dispatch(sellCake())}>Increase Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
