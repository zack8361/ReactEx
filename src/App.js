import './App.css';
import React, { useState } from 'react';

import UsinguseMemo from './components/UsinguseMemo';
import TestStyled from './components/TestStyled';
import ReactCode from './components/ReactCode';
import TestScss from './components/TestScss';
import ImgComponent from './components/ImgComponent';
import FancyBorder from './components/FancyBorder';
function App() {
  return (
    <div className="App">
      <FancyBorder color="blue">
        <h1>Hello </h1>
        <span>하이</span>
      </FancyBorder>
    </div>
  );
}

export default App;
