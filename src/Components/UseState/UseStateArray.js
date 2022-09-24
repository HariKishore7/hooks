import React,{useState} from 'react'

function UseStateArray() {
    const [value, setValue] = useState([])

    const addItem = ()=>{
        setValue([...value, {
            id: value.length,
            values: Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <>
    <button onClick={addItem}>Add items</button>
    <ul>
        <li>
            {value.map(item=>(
                <li key={item.id}>{item.values}</li>
            ))}
        </li>
    </ul>
    </>
  )
}

export default UseStateArray