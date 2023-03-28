import React from "react";

export default function Example3(props) {
  const { name, price } = props;
  return (
    <div>
      <h1>품목명 :{name}</h1>
      <p>가격 : {price}</p>
    </div>
  );
}
