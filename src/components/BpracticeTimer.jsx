import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function BpracticeTimer() {
  const [render, setRender] = useState(false);
  const time = useRef(0);
  console.log(time.current);
  useEffect(() => {
    const timer = setInterval(() => {
      time.current += 1;
      console.log(time.current);
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log('timer 종료');
    };
  }, []);
  return (
    <div>
      <h1>{time.current}</h1>
      <button onClick={() => setRender((cur) => !cur)}>시작</button>
    </div>
  );
}
