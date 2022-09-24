import React, {useState} from 'react'

function UseState() {
    const intialCount = 0;
    const [count, setCount] = useState(intialCount);
  return (
    <>
    <div>Count {count}</div>
    <button onClick={()=>setCount(intialCount)}>Reset</button>
    <button onClick={()=>setCount(prevCount => prevCount+1)}>Increment</button>
    <button onClick={()=>setCount(prevCount => prevCount-1)}>Decrement</button>
    <button onClick={()=>setCount(prevCount => prevCount+5)}>Increment5</button>
    <button onClick={()=>setCount(prevCount => prevCount-5)}>Decrement5</button>
    
    </>
  )
}

export default UseState