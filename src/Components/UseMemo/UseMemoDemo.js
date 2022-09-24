import React,{useMemo, useState} from 'react'

function UseMemoDemo() {
    const [count, setCount]=useState(0)

    // const incrementOne =()=>{
    //     setCount(count+1);
    // }

    const incrementOne = useMemo(()=>{
        setCount(count+1);
    },[count])

  return (
    <button onClick={incrementOne}>Click here - {count}</button>
  )
}

export default UseMemoDemo