import React from 'react';
import { useRef } from 'react';

export default function ChangeColor() {
  // query selector 와 같은 느낌.
  const inputEl = useRef();
  const divEl = useRef();

  const clearInput = () => {
    divEl.current.style.backgroundColor = inputEl.current.value;
  };
  return (
    <div ref={divEl}>
      <input ref={inputEl} type="text" />
      <br />
      <button onClick={clearInput}>색 적용</button>
    </div>
  );
}
