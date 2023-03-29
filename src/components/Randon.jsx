import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
export default function Randon() {
  const arr = ['+', '-', 'x'];

  const [num1, num1State] = useState(parseInt(Math.random() * 10));
  const [num2, num2State] = useState(parseInt(Math.random() * 10));
  const [state, numState] = useState(arr[num1 % arr.length]);
  const inputEl = useRef();

  //숫자 다시 세팅
  const stateNew = () => {
    alert('맞았습니다.');
    inputEl.current.value = '';
    num1State(parseInt(Math.random() * 10));
    num2State(parseInt(Math.random() * 10));
    numState(arr[num1 % arr.length]);
  };
  const calCulate = () => {
    const num = parseInt(inputEl.current.value);
    if (state === '-' && num1 - num2 === num) {
      stateNew();
    } else if (state === '+' && num1 + num2 === num) {
      stateNew();
    } else if (state === 'x' && num1 * num2 === num) {
      stateNew();
    } else {
      alert('틀렸습니다.');
    }
  };
  return (
    <div>
      <h1>
        {num1}
        {state}
        {num2}
      </h1>
      <input ref={inputEl} />
      <button onClick={calCulate}>정답 제출!</button>
    </div>
  );
}
