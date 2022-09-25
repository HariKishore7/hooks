import React, { useEffect, useRef } from "react";

//2nd method
export const inputRef = React.createRef();

function UseRef1() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <input ref={inputRef}></input>
    </>
  );
}

export default UseRef1;
