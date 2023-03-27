import React from "react";
import { useState } from "react";

export default function SecondExercise() {
  // num의 초기값
  const [num, setNum] = useState(1);
  return (
    <div>
      <h1 onClick={() => setNum(num + 1)}>{num < 10 ? "👍" : "😎"}</h1>
      <p>{num}</p>
    </div>
  );
}
