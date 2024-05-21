import React, {useState} from "react";

function CounterHooks() {
  const initialCount = 0;
  const [count, setCount] = useState(0);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1);
    }
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button
        onClick={() => setCount(count > 0 ? count - 1 : count)}
        disabled={count === 0}
      >
        -
      </button>
      <button onClick={incrementFive}>+5</button>
      <br />
      <button onClick={() => setCount(initialCount)} disabled={count===0}>Reset</button>
    </div>
  );
}

export default CounterHooks;
