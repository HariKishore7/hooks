import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UseEffectDataFetch() {
    const [postdata, setPostdata]= useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClcik] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then((res)=>{
            console.log(res)
            setPostdata(res.data);
        })
        .catch((err)=>{
            console.log(err,'error not able to fetch the data')
        })
    },[idFromButtonClick])

    const fetchData=()=>{
        setIdFromButtonClcik(id)
    }

  return (
    <>
    <input type="text" value={id} onChange={e=>setId(e.target.value)}></input>
    <button onClick={fetchData}>Get id</button>
    <div>{postdata.title}</div>
    {/* <ul>
        {postdata.map(post=><li key={post.id}>{post.title}</li>)}
    </ul> */}
    </>
  )
}

export default UseEffectDataFetch