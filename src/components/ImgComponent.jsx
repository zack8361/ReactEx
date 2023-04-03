import React from 'react';

import anoying from '../images/anoying.png';
export default function ImgComponent() {
  return (
    <>
      <h1>퍼블릭 폴더</h1>
      <img src="/images/anoying.png" alt="인영"></img>
      <h1>SRC 폴더</h1>
      <img src={anoying} alt="인영"></img>
    </>
  );
}
