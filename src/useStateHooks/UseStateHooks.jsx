/** @format */
import React, { useState } from 'react';

import UseStateChild from './useStateChild';

console.log('Inside outside');
const UseStateHooks = () => {
  const [count, setCount] = useState(0);
  const [secondoryCounter, setSecondoryCounter] = useState(100);
  const updateCounter = () => {
    setSecondoryCounter(secondoryCounter + 1);
    setName('Deepak' + count);
  };
  const [name, setName] = useState('Deepak');
  const renderUseStateHooks = x => x * 10;
  setCount(count + 1);
  return (
    <>
      <br />
      <div>{renderUseStateHooks(count)}</div>
      <div>secondoryCounter: {secondoryCounter}</div>
      <button onClick={updateCounter}>Click</button>
      <div>Counter: {count}</div>
      <UseStateChild name={name} age={33} value='deepak' />
    </>
  );
};

export default UseStateHooks;