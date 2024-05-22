import React, {useReducer} from "react";
import "./CounterHooks.css";

const initialState = 0;
const reducer = (currentState, action) => {
  switch(action){
    case 'increment':
      return currentState + 1
    case 'decrement':
      return currentState -1
    case 'reset':
      return initialState
    default:
      return currentState     
  }
};

function UsereduceCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="component-container">
      <div className="counter-container">
        <h1 className="count-display">{count}</h1>
        <div className="button-container">
          <button className="button" onClick={() => dispatch("increment")}>
            +
          </button>
          <button
            className="reset-button"
            onClick={() => dispatch("decrement")}
            disabled={count === 0}
          >
            -
          </button>
        </div>
        <br />
        <button
          className="reset-button"
          onClick={() => dispatch("reset")}
          disabled={count === 0}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default UsereduceCounter;
