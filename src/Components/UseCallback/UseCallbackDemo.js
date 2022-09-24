import React, { useState, useCallback } from 'react'

function UseCallbackDemo() {

    const [count, setCount] = useState(1);

    // const incrementCount = ()=>{
    //     setCount(count+1);
    //     // setCount(prevState=>prevState+1)
    // }

    //useCallback is same as Higher order components and React.memo, used to check for rendering only whatever updated.
    //wrap the arrow function inside the useCallback function to make it work like HOC and memo.
    const incrementCount = useCallback(()=>{
        setCount(count+1);
    },[count])

  return (
    <>
    <button onClick={incrementCount}>Update</button>
    <div>{count}</div>
    </>
  )
}

export default React.memo(UseCallbackDemo)