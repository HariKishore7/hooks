import React,{useReducer} from 'react'

const intialValue=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return intialValue;
        default:
            return state;
    }
}

function UseReducer1() {
   const [count, dispatch] = useReducer(reducer,intialValue)
  return (
    <>
    <div>Count - {count}</div>
    <button onClick={()=>dispatch('increment')}>Increment</button>
    <button onClick={()=>dispatch('decrement')}>Decrement</button>
    <button onClick={()=>dispatch('reset')}>Reset</button>
    </>
  )
}

export default UseReducer1