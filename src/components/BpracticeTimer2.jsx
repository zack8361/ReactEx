import React from 'react';
import { useState } from 'react';
import BpracticeTimer from './BpracticeTimer';

export default function BpracticeTimer2() {
  const [show, setShow] = useState(false);
  const [button, setButton] = useState('보이기');
  const mount = () => {
    button === '보이기' ? setButton('숨기기') : setButton('보이기');
    setShow(!show);
    console.log(show);
  };
  return (
    <div>
      <button onClick={mount}>{button}</button>
      {show && <BpracticeTimer />}
    </div>
  );
}
