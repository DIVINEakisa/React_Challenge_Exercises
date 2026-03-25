import React, { useReducer, useState } from "react";

const actions = { DECREMENT: "decrement", INCREMENT: "increment" };
function reducer(state, action) {
  switch (action.type) {
    case actions.INCREMENT:
      return { count: state.count + 1 };
    case actions.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
export default function Main() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: actions.INCREMENT });
  }
  function decrement() {
    dispatch({ type: actions.DECREMENT });
  }

  return (
    <>
      <p>{state.count}</p>
      <button
        onClick={increment}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "4px",
          borderRadius: "3px",
        }}
      >
        ADD
      </button>{" "}
      <button
        onClick={decrement}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "4px",
          borderRadius: "3px",
        }}
      >
        SUB
      </button>
    </>
  );
}
