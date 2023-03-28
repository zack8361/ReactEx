import React from "react";

export default function PropsHeader({ text, href, userId }) {
  return (
    <div>
      <h1>{userId} 님 반갑습니다.</h1>
      <a href={href}>{text}</a>
    </div>
  );
}
