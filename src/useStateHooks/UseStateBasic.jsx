/** @format */

import React, { useState } from 'react';

const BasicExample = props => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </>
  );
};
export default BasicExample;
