import React, {useEffect, useState} from "react";
import "./CounterHooks.css"; // Import the CSS file

function CounterHooks() {
  const initialCount = 0;
  const [count, setCount] = useState(0);
  const [dynamicColor, setColor] = useState("white");
  const [boom, setBoom] = useState(false);

  useEffect(() => {
    setBoom(false);
    const timee = setInterval(() => {
      setBoom(true);
    }, count * 1000);

    console.log("inside useEffect");
    return () => clearTimeout(timee);
  }, [count]);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1);
    }
  };

  return (
    <div className="component-container">
      <div className="counter-container" style={{background: dynamicColor}}>
        <h1 className="count-display">{count}</h1>
        <div className="button-container">
          <button className="button" onClick={() => setCount(count + 1)}>
            +
          </button>
          <button
            className="reset-button"
            onClick={() => setCount(count > 0 ? count - 1 : count)}
            disabled={count === 0}
          >
            -
          </button>
          <button className="button" onClick={incrementFive}>
            +5
          </button>
        </div>
        <br />
        <button
          className="reset-button"
          onClick={() => setCount(initialCount)}
          disabled={count === 0}
        >
          Reset
        </button>
        <div className="button-container">
          <button className="button" onClick={() => setColor("#425c84")}>
            hash
          </button>
          <button className="button" onClick={() => setColor("#461b46")}>
            violet
          </button>
        </div>
      </div>
      <div className="boom-container">
        {boom && count ? <span className="boom-text">BOOM</span> : null}{" "}
      </div>
    </div>
  );
}

export default CounterHooks;
