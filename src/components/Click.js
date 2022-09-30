import React from "react";

function Click() {
  // first way to write event listener
  // es5 syntax
  function consoleHello() {
    console.log("hello");
  }
  // second way to write event listener
  // es6 syntax
  const console123 = () => {
    console.log(123);
  };

  return (
    <div>
      <p
        onClick={() => {
          console.log("I clicked the paragraph");
        }}
      >
        Click me to console log ("i clicked the paragraph")
      </p>
      <button onClick={consoleHello}>console Hello</button>
      <button onClick={console123}>console 123</button>
      {/* // third way to write event listener */}
      <button
        onClick={() => {
          console.log("this is the third way");
        }}
      >
        Third way to add event listener
      </button>
    </div>
  );
}

export default Click;
