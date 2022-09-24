import React, { useEffect, useState } from 'react'

function UseEffect4() {
    const [count, setCount]=useState(0);
   const tick=()=>{
        // count=prevCount+1
        // setCount(prevcount=>prevcount+1)
        setCount(count+1)
    }
    useEffect(()=>{
        const interval = setInterval(tick, 1000)

        return()=>{
            clearInterval(interval)
        }
    })
  return (
    <>{count}
    </>
  )
}

export default UseEffect4