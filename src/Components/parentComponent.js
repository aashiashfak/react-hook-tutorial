import React, {useState} from "react";
import "./CounterHooks.css"; 
import CounterHooks from "./CounterHooks";


function ParentComponent() {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <div>
      <button className="button" onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
      {showCounter && <CounterHooks />}
    </div>
  );
}

export default ParentComponent;
