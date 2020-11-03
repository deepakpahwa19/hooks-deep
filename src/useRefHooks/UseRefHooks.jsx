/** @format */
import React, { useRef } from 'react';
import useClickOutside from './useClickOutside';

const UseRefHooks = props => {
  const inputRef = useRef();
  const buttonRef = React.useRef();
  const dropdownRef = React.useRef();
  const dropdownRefHandler = useClickOutside(dropdownRef, () =>
    console.log('outside of dropdown clicked ')
  );
  const [selectedValue, setSelectedValue] = React.useState();
  return (
    <form
      onSubmit={() => {
        console.log('Submit clicked');
      }}
    >
      <input ref={inputRef}
        onClick={() => dropdownRefHandler}
      />
      
      <input ref={inputRef}
        onClick={() => dropdownRefHandler}
      />
       
       <input ref={inputRef}
        onClick={() => dropdownRefHandler}
      />
       <select
        value={selectedValue}
        onChange={event => setSelectedValue(event.target.value)}
        ref={dropdownRef}
      >
        
        <option>Female</option>
        <option>Don't want to answer psd</option>
        <option>Male</option>
      </select>
      <select
        value={selectedValue}
        onChange={event => setSelectedValue(event.target.value)}
        ref={dropdownRef}
      >
        
        <option>Female</option>
        <option>Don't want to answer ds</option>
        <option>Male</option>
      </select>

      <select
        value={selectedValue}
        onChange={event => setSelectedValue(event.target.value)}
        ref={dropdownRef}
      >
        <option>Male</option>
        <option>Female</option>
        <option>Don't want to answer asdfasdfasdf</option>
      </select>
      
         <button
          ref={buttonRef}
          onClick={() => {
            console.log(buttonRef.current.textContent);
            inputRef.current.value = 'Deepak';
          }}
        >
        Deepak
        </button>
        <button
          ref={buttonRef}
          onClick={() => {
            console.log(buttonRef.current.textContent);
            inputRef.current.value = 'Deepak';
          }}
        >
          Deepak
      <div>
        <button
          onClick={() => {
            inputRef.current.value = 'Indu';
          }}
        >
          Indu
        </button>
      
      </div>
    </form>
  );
};

export default UseRefHooks;
 