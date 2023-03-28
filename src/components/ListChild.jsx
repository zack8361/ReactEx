import React from "react";

export default function ListChild(props) {
  const { text1, text2 } = props;
  return (
    <div>
      <h2>{text1}</h2>
      <p>{text2}</p>
    </div>
  );
}
