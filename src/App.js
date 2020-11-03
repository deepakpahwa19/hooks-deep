/** @format */

import React from 'react';
import './App.css';
import ParentComponent from './component/ParentComponent';
import UseRefHooks from './useRefHooks/UseRefHooks';
import BasicExample from './useStateHooks/UseStateBasic';

function App() {
  return (
    <div className='App'>
      {/* <UseEffectHooks /> */}
      {/* <ParentComponent/> */}
      {/* <UseRefHooks/> */}
      <BasicExample />
    </div>
  );
}

export default App;
