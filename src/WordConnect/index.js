import React, { useState, useEffect } from "react";
import { connectedTwoWords } from "./data";
import "./styles.css";

// 6:37  // 7:51. 1 hour
const columnsCount = 3;

export function WordConnect() {
  const [array, setArray] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  function shuffleArray(array, n) {
    let inde = Math.floor((Math.random() * 10) % 5);
    for (let i = 0; i < n; i++)
      [array[i], array[inde]] = [array[inde], array[i]];
    return array;
  }

  useEffect(() => {
    if (connectedTwoWords?.length > 0) {
      let tempArray = [];
      connectedTwoWords.map((arr, index) => {
        tempArray.push({ value: arr[0], id: tempArray.length + 1 });
        tempArray.push({ value: arr[1], id: tempArray.length + 1 });
      });
      shuffleArray(tempArray, tempArray?.length);
      setArray(tempArray);
    }
  }, []);

  useEffect(() => {
    let timeout;
    if (status) {
      timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [status]);

  function handleSelect(e) {
    let value = e.target.dataset.value;
    setSelected((s) => [...s, value]);
    if (selected?.length > 1) {
      setLoading(true);
      let group = connectedTwoWords.find((group) => group.has(selected[0]));
      if (!group) setStatus("Failure");
      if (selected.every((item) => group.has(item))) setStatus("Success");
    }
  }
  //   console.log("sected ", selected);
  return (
    <div className="word-connect-container">
      <div
        className="columns"
        style={{ gridTemplateColumns: `repeat(${columnsCount}, auto)` }}
      >
        {array.map(({ id, value }, index) => (
          <div
            data-value={value}
            onClick={handleSelect}
            className={`data ${loading ? "pointerNone" : ""}`}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}
