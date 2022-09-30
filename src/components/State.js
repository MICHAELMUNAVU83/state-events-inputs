import React, { useState } from "react";

function State() {
  const [count, setCount] = useState(0);
  function subtract() {
    setCount(count - 1);
  }
  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button onClick={subtract}>-</button>
    </div>
  );
}

export default State;
