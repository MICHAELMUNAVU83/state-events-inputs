import React, { useState } from "react";

function Change() {
  const [name, setName] = useState("");
  // import use State
  // define your state
  // set value of your input to the initial state
  //  onChange for the input should set the state to e.target.value
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          // why we use state is because we want to have access to this value
          setName(e.target.value);
        }}
        placeholder="enter your name"
      />
      <p>{name}</p>
    </div>
  );
}

export default Change;
