import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('입력하세요');
  const inputValue = useRef();

  const onBtnClick = () => {
    console.log('버튼 클릭');
    setCount(count + 1);
  };

  const onInputChange = () => {
    setText(inputValue.current.value);
  };

  useEffect(() => {
    console.log('렌더링 할때마다 실행되는 useEffect');
  }, []);

  useEffect(() => {
    console.log('숫자 변화 감지');
  }, [count]);

  useEffect(() => {
    console.log('인풋 변화감지');
  }, [text]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onBtnClick}>+ 1버튼</button>
      <h1>{text}</h1>
      <input ref={inputValue} onChange={onInputChange} />
    </>
  );
}
