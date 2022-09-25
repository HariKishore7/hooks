import React, { Component, useEffect, useRef } from 'react'

export const ref=React.createRef();

class App extends Component{
  componentDidMount(){
    ref.current.focus();
  }
  render(){
    return(
      <>
      <input ref={ref}></input>
        <div>Hi Harry</div>
      </>
    )
  }
}

export default App;