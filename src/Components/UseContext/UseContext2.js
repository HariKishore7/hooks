import React, { useContext } from 'react'
// import UseContext3 from './UseContext3'
import { userContext, otherContext } from '../../App'


function UseContext2() {
    const ch1 = useContext(userContext)
    const ch2 = useContext(otherContext)
    return (
        <>
        {/* // <UseContext3/> */}
        { ch1 } - { ch2 }
        </>
    )
}

export default UseContext2