import React, { useState } from "react";
import "./index.css";
const DEFAULT_VALUES = {};
export function AdvanceCounter() {
  const [counterValue, setCounterValue] = useState(0);
  const [lowerLimit, setLowerLimit] = useState(-1000);
  const [upperLimit, setUpperLimit] = useState(1000);
  const [loading, setLoading] = useState(false);
  const [range, setRange] = useState(3);
  const [limit, setLimit] = useState(1);

  function handleClick({ e, type }) {
    if (type == "decrease") {
      if (lowerLimit <= counterValue - limit) setCounterValue((s) => s - limit);
    } else if (type == "increase") {
      if (upperLimit >= counterValue + limit) setCounterValue((s) => s + limit);
    } else if (type == "async-decrease") {
      setLoading(true);
      setTimeout(() => {
        if (lowerLimit <= counterValue - limit)
          setCounterValue((s) => s - limit);
        setLoading(false);
      }, [range * 1000]);
    } else if (type == "async-increase") {
      setLoading(true);
      setTimeout(() => {
        if (upperLimit >= counterValue + limit)
          setCounterValue((s) => s + limit);
        setLoading(false);
      }, [range * 1000]);
    }
  }

  function handleChange({ e, type }) {
    let value;
    if (!e.target.value) value = 1;
    else value = parseInt(e.target.value.replace(/\D/g, ""));
    if (type == "limit") {
      setLimit(value);
    } else if (type == "range") {
      setRange(value);
    } else if (type == "lower") {
      if (lowerLimit <= upperLimit) setLowerLimit(value);
    } else if (type == "upper") {
      if (lowerLimit <= upperLimit) setUpperLimit(value);
    }
  }

  return (
    <div className="container">
      <div>Counter {counterValue}</div>
      <div className={"buttons-in-dec"}>
        <button onClick={(e) => handleClick({ e, type: "decrease" })}>-</button>
        <button onClick={(e) => handleClick({ e, type: "increase" })}>+</button>
      </div>
      <div className={`buttons-async-in-dec ${loading ? "pointernone" : ""}`}>
        <button
          style={{ cursor: loading ? "not-allowed" : "default" }}
          onClick={(e) => handleClick({ e, type: "async-decrease" })}
          disabled={loading}
        >
          Async -
        </button>
        <button
          style={{ cursor: loading ? "not-allowed" : "default" }}
          onClick={(e) => handleClick({ e, type: "async-increase" })}
          disabled={loading}
        >
          Async +
        </button>
      </div>
      <div>
        <label htmlFor="delay">Delay :</label>
        <input
          type={"range"}
          value={range}
          step={1}
          min={1}
          max={3}
          onChange={(e) => handleChange({ e, type: "range" })}
        />
        {range}s
      </div>
      <div style={{ margin: "10px", padding: "10px" }}>
        <label htmlFor="limit">Inc/ Dec By :</label>
        <input
          name="limit"
          value={limit}
          min={1}
          type="number"
          onChange={(e) => handleChange({ e, type: "limit" })}
        />
      </div>
      <div style={{ margin: "10px", padding: "10px" }}>
        <label htmlFor="lower">lower</label>
        <input
          name="lower"
          value={lowerLimit}
          type="number"
          min={-1000}
          onChange={(e) => handleChange({ e, type: "lower" })}
        />
        <br />
        <label htmlFor="lower">Upper</label>
        <input
          name="upper"
          max={1000}
          value={upperLimit}
          onChange={(e) => handleChange({ e, type: "upper" })}
        />
      </div>
      <div>
        <button onClick={(e) => handleClick({ e, type: "reset" })}>
          reset
        </button>
      </div>
    </div>
  );
}
