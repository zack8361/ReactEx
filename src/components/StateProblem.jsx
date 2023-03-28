import React from "react";
import { useState } from "react";
export default function StateProblem() {
  const [state, setState] = useState({ teacher: "이찬호" });

  return (
    <div>
      {state.teacher}
      <br />
      <button
        onClick={() => {
          state.teacher = "zack";
          const copyObj = { ...state };
          setState(copyObj);
          console.log(copyObj);
        }}
      >
        여기도 눌러봐
      </button>
    </div>
  );
}
