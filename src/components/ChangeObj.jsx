import { useState } from 'react';

export default function ChangeObj({ objArr }) {
  const [index, Change] = useState(0);

  return (
    <div>
      <h1>{objArr[index].name}</h1>
      <h2>{objArr[index].age}</h2>
      <h2>{objArr[index].nickName}</h2>
      <button
        onClick={() =>
          index < objArr.length - 1 ? Change(index + 1) : Change(0)
        }
      >
        프로필 변경하기
      </button>
    </div>
  );
}
