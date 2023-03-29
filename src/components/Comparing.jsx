import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
export default function Comparing() {
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const [render, setRender] = useState(true);
  const countUpState = () => {
    setCountState(countState + 1);
    console.log('State', countState);
  };
  const countUpRef = () => {
    countRef.current += 1;
    console.log('ref', countRef);
  };

  const countUpVar = () => {
    countVar += 1;
    console.log('Variable;', countUpVar);
  };
  const reRender = () => {
    setRender(!render);
  };
  return (
    <div>
      <h1>state : {countState}</h1>
      <h1>Ref : {countRef.current}</h1>
      <h1>var : {countVar}</h1>
      <button onClick={countUpState}>State up</button>
      <button onClick={countUpRef}>Ref up</button>
      <button onClick={countUpVar}>Var up</button>
      <button onClick={reRender}>Rerender</button>
    </div>
  );
}
