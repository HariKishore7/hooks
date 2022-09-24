import React,{useState} from 'react'

function UseStateObject() {
    const [name, setName] = useState({firstName:'', lastName:''})

  return (
    <>
    <input type="text" value={name.firstName} onChange={(e)=>setName({...name, firstName: e.target.value})}></input>
    <input type="text" value={name.lastName} onChange={(e)=>setName({...name,lastName: e.target.value})}></input>
    <div>FirstName:{name.firstName}</div>
    <div>LastName:{name.lastName}</div>
    </>
  )
}

export default UseStateObject