import React from 'react';
import { useEffect } from 'react';

export default function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 실행중');
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('타이머 종료!');
    };
  }, []);
  return <div>Timer 실행중</div>;
}
