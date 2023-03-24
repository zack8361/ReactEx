import anoying from "../images/anoying.png";
import React, { Component } from "react";
import { render } from "@testing-library/react";

// 1.함수형
const ImgComponent = () => {
  return <img src={anoying} alt="이미지" />;
};

// 2. 클래스형
// class ImgComponent extends Component {
//   render() {
//     return <img src={anoying} alt="이미지" />;
//   }
// }
export default ImgComponent;
