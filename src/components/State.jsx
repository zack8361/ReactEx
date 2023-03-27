import React from "react";
import { useState } from "react";

// let 이라는 변수는 변경이 안되서 State 를 쓴다.
export default function State() {
  // teacher 의 초기값 : 이찬호. -> setTeacher 라는 함수 호출가능.
  const [teacher, setEng] = useState("이찬호");
  return (
    <div>
      <button onClick={() => setEng("chanho")}> 영어로 변경!</button>
      <br />
      <span id="eng">{teacher}</span>
    </div>
  );
}
