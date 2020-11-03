/** @format */

import React, { useState } from 'react';
  
const useStateChild = (props) => {
  const [gender, setGender] = useState('M');
  console.log(`UseStateChild triggered... ${props.name}`);
  const renderUseStateChild = () => {
    console.log('rendering useStateHooks');
  };

  const updateGender = () => {
    if (gender === 'M') setGender('F');
    else setGender('M');
  };

  return (
    <>
      <div>{renderUseStateChild()}</div>
      <div>Name: {props.name}</div>
      <div>Gender: {gender}</div>
      <button onClick={updateGender}>Update</button>
    </>
  );
};

export default React.memo(useStateChild);
