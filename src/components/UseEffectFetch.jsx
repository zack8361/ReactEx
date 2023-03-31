import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import UseEffectFetch1 from './UseEffectFetch1';

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]);

  async function fetchData() {
    const resFetch = await fetch('http://localhost:4000/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (resFetch.status !== 200) return '망했어요';
    const data = await resFetch.json();

    setDataArr((cur) => data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {dataArr.map((el) => {
        return (
          <UseEffectFetch1
            name={el.name}
            age={el.age}
            nickName={el.nickName}
            key={el.name}
          />
        );
      })}
    </div>
  );
}
