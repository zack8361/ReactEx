import { useState } from 'react';

import { useRef } from 'react';

export default function TesRef() {
  const [text, setText] = useState('초기 값 세팅');

  // useRef() 선언 -> input 태그값의 변경을 감지.
  const inputValue = useRef();

  const onChangeRef = () => {
    console.log(inputValue.current.value);
    setText(inputValue.current.value);
  };
  return (
    <div>
      <h1>{text}</h1>
      <input ref={inputValue} onChange={onChangeRef} />
    </div>
  );
}
