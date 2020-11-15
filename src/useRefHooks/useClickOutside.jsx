/** @format */

import React from "react";

const useClickOutside = (ref, callback) => {
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(event);
      if (ref.current && ref.current !== event.target) {
        callback();
      } else {
        console.log("it is clicking on ref itself...");
      }
    };
    console.log("adding event listener");
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      console.log("Removing event listener");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export default useClickOutside;
