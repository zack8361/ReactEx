import React from "react";

import ListChild from "./ListChild";
export default function List() {
  const dataArr = [
    { title: "리액트 공부하기", detail: "state 사용법 익히기" },
    { title: "코테 문제 풀기", detail: "Lv 0 정복 가즈아" },
  ];
  return (
    <div>
      <h1>오늘 해야할일</h1>
      <hr />
      {dataArr.map((el, index) => {
        return <ListChild text1={el.title} text2={el.detail} key={index} />;
      })}
    </div>
  );
}
