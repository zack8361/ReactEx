import React from "react";
import { useState } from "react";

export default function FunctionalState() {
  let [state, setState] = useState(0);
  let [variable, setVariable] = useState(0);
  return (
    <div>
      {state} / {variable}
      <button
        onClick={() => {
          setState(state + 1);
          setVariable(variable + 1);
        }}
      >
        눌러봐
      </button>
    </div>
  );
}
