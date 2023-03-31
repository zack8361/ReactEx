import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import styled, { keyframes } from 'styled-components';

const appLogoSpin = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  
`;
const MyDiv = styled.div`
  text-align: center;
`;
// header
const MyHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
// img
const MyImg = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${appLogoSpin} infinite 20s linear;
`;
const MyP = styled.p``;
const MyA = styled.a`
  color: #61dafb;
`;
export default function ReactCode() {
  return (
    <MyDiv>
      <MyHeader>
        <MyImg src={logo} alt="logo" />
        <MyP>
          Edit <code>src/App.js</code> and save to reload!!!!!!
        </MyP>
        <MyA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </MyA>
      </MyHeader>
    </MyDiv>
  );
}
