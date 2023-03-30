import React from 'react';
import { useState } from 'react';

import AconditionState1 from './AconditionState1';

export default function AconditionalState() {
  const [condition, setCondition] = useState('보이기');

  const onChange = () => {
    condition === '보이기' ? setCondition('감추기') : setCondition('보이기');
  };

  const conditionalRender = condition === '감추기' && <AconditionState1 />;

  return (
    <>
      {conditionalRender}
      <button onClick={onChange}>{condition}</button>
    </>
  );
}
