import "./App.css";

// ImageComponent 불러오기.
import ImgComponent from "./components/ImgComponent";
// mainHeader component 불러오기.
import MainHeader from "./components/MainHeader";
// 네이버 이동 버튼 불러오기.
import BtnToNaver from "./components/BtnToNaver";
// 함수형 컴포넌트
import FunctionComponent from "./components/FunctionComponent";

import AcustomList from "./components/AcustomList";
import AcustomObj from "./components/AcustomObj";
import StateProblem from "./components/StateProblem";
import FunctionalState from "./components/FunctionalState";
import SecondExercise from "./components/SecondExercise";
import State from "./components/State";
import FirstExercise from "./components/FirstExercise";
import EventHandler from "./components/EventHandler";
import Inline from "./components/Inline";
import List from "./components/list";
import PropsHeader from "./components/PropsHeader";
import ClassProps from "./components/ClassProps";
import Example2 from "./components/Example2";
import Ex5 from "./components/Ex5";
function App() {
  const nameArr = ["뽀로로", "루피", "크롱이"];
  const nameObj = {
    name: "이찬호",
    age: "5",
    nickName: "괴물",
  };
  return (
    <div className="App">
      <Ex5 />
    </div>
  );
}

export default App;
