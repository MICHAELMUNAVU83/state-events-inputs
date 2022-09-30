import React, { useState } from "react";

function Change() {
  // import use State
  // define your state
  // set value of your input to the initial state
  //  onChange for the input should set the state to e.target.value
  const [name, setName] = useState("jojo");
  return (
    <div>
      <input
        value={name}
        onChange={(e) => {
          console.log(e.target.value);
          setName(e.target.value);
        }}
        type="text"
      />
      <p>{name}</p>
    </div>
  );
}

export default Change;
