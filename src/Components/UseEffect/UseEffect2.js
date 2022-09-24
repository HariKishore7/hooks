import React, { useEffect, useState } from 'react'

function UseEffect2() {
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)

    const logMousePosition = e =>{
        console.log("Mouse event")
        setx(e.clientX)
        sety(e.clientY)
    }

    useEffect(()=>{
        console.log("Rendered")
        window.addEventListener('mouseover', logMousePosition)

        return(()=>{
            console.log("Unmounting done")
            window.removeEventListener('mouseover', logMousePosition)
        })
    },[])
    
  return (
    <div>
        x - {x} y - {y}
    </div>
  )
}

export default UseEffect2