/** @format */

import React, { useEffect, useState } from 'react';

const UseEffectHooks = props => {
  const [count, setCount] = useState(0);
  console.log('UseEffectHooks rendering...');
  useEffect(() => console.log('second useEffoect'));
  useEffect(() => {
    // console.log(count);
    console.log('first useEffect');

    return () => console.log('clearning UseEffectHooks...');
  });

  const renderMessage = () => console.log('RENDERING message...');

  return (
    <>
      <div>Nothing to display: {renderMessage()}</div>
      <button onClick={() => setCount(count => count + 1)}>Click</button>
    </>
  );
};

export default React.memo(UseEffectHooks);
