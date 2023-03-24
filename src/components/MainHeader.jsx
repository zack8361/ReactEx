// 특정 기능을 하는 html 의 집합 -> 함수로 만들어줄거다

// const MainHeader = () => {
//   const array = [1, 2, 3, 4, 5];
//   // html 와 js 를 섞을수 있는 jsx
//   return <h1>hello, components world {array.map((el) => el)}</h1>;
// };

import React, { Component } from "react";
class MainHeader extends Component {
  constructor() {
    super();
    this.cas = true;
  }
  render() {
    return <h1>Hello, {this.cas ? "카" : "노맛"}</h1>;
  }
}
// es6 방식의 export 방식.
export default MainHeader;
