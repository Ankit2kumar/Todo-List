/** @format */

import React, { useEffect } from "react";

function Try() {
  //const [number, setNumber] = React.useState(99);
  const [task, setTask] = React.useState("Hello");
  
  function handleClick(valueFromInput: string) {
    setTask(valueFromInput);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your Todo"
        value={task}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleClick(e.target.value);
        }}
        style={{
          margin: "100px",
          textAlign: "center",
          justifyContent: "center",
        }}
      />
      <button
        onClick={() => {
			     window.alert(task);
        }}
        style={{ border: "2px solid blue" }}
      >
        Click to add
      </button>
    </div>
  );
}

export default Try;
