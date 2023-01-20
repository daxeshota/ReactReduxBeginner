import React from "react";
import { buyCake } from "../redux";
import { sellCake } from "../redux";
import { connect } from "react-redux";

const ItemContainer = (props) => {
  return (
    <>
      <h1>Item : {props.item}</h1>
      <button onClick={props.buyCake}>BUTTON</button>
      {/* <button onClick={props.sellCake}>Increase Cake</button> */}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const itemState = ownProps.c
    ? state.cake.numOfCakes
    : state.cake.numOfCakes + 1;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunc = ownProps.c
    ? () => dispatch(buyCake())
    : () => dispatch(sellCake());
  return {
    buyCake: dispatchFunc,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
