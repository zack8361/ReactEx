import "./App.css";

// ImageComponent 불러오기.
import ImgComponent from "./components/ImgComponent";
// mainHeader component 불러오기.
import MainHeader from "./components/MainHeader";
// 네이버 이동 버튼 불러오기.
import BtnToNaver from "./components/BtnToNaver";
// 함수형 컴포넌트
import FunctionComponent from "./components/FunctionComponent";

import FunctionalState from "./components/FunctionalState";
import SecondExercise from "./components/SecondExercise";
import State from "./components/State";
import FirstExercise from "./components/FirstExercise";
import EventHandler from "./components/EventHandler";
import Inline from "./components/Inline";
function App() {
  return (
    <div className="App">
      <Inline></Inline>
      <EventHandler />
      <FirstExercise />
      <State />
      <SecondExercise />
      <FunctionalState />
    </div>
  );
}

export default App;
