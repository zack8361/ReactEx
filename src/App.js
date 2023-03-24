import "./App.css";

// ImageComponent 불러오기.
import ImgComponent from "./components/ImgComponent";
// mainHeader component 불러오기.
import MainHeader from "./components/MainHeader";
// 네이버 이동 버튼 불러오기.
import BtnToNaver from "./components/BtnToNaver";

// 함수형 컴포넌트
import FunctionComponent from "./components/FunctionComponent";
// 클래스형 컴포넌트.
import ClassComponent from "./components/ClassComponents";
function App() {
  return (
    <div className="App">
      <MainHeader></MainHeader>
      <ImgComponent></ImgComponent>
      <BtnToNaver></BtnToNaver>
      <ClassComponent />
      <FunctionComponent />
    </div>
  );
}

export default App;
