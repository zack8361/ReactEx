import "./App.css";

// ImageComponent 불러오기.
import ImgComponent from "./components/ImgComponent";
// mainHeader component 불러오기.
import MainHeader from "./components/MainHeader";
// 네이버 이동 버튼 불러오기.
import BtnToNaver from "./components/BtnToNaver";
// 함수형 컴포넌트
import FunctionComponent from "./components/FunctionComponent";

// userState 데이터
import { useState } from "react";
import colorData from "./data/color-data.json";

function App() {
  const [colors] = useState(colorData);
  return (
    <div className="App">
      <MainHeader></MainHeader>
      <ImgComponent></ImgComponent>
      <BtnToNaver></BtnToNaver>
      <FunctionComponent />
      <ColorList color={colors} />
    </div>
  );
}

export default App;
