import React, { useState } from "react";
import { buyCake } from "../redux";
import { sellCake } from "../redux";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <>
      <h1>Number of Cakes : {props.cake.numOfCakes}</h1>
      <button onClick={()=>props.buyCake()}>Decrease Cake</button>
      <button onClick={()=>props.sellCake()}>Increase Cake</button>
      <br />
      <input
        type='text'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={()=>props.sellCake(number)}>Increase {number} cakes</button>
      <button onClick={()=>props.buyCake(number)}>Increase {number} cakes</button>
    </>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);

  return {
    ...state,
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
    sellCake: (number) => dispatch(sellCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
