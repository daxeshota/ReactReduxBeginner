import React from "react";
import { buyCake } from "../redux";
import { sellCake } from "../redux";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  return (
    <>
      <h1>Number of Cakes : {props.cake.numOfCakes}</h1>
      <button onClick={props.buyCake}>Decrease Cake</button>
      <button onClick={props.sellCake}>Increase Cake</button>
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
    buyCake: () => dispatch(buyCake()),
    sellCake: () => dispatch(sellCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
