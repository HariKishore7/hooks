import "./App.css";
import React from "react";
import UseRef1 from "./Components/useRef/UseRef1";
// import UseContext1 from './Components/UseContext/UseContext1';
// import UseContext2 from './Components/UseContext/UseContext2';
// import UseContext3 from './Components/UseContext/UseContext3';
// import UseReducer1 from './Components/useReducer/UseReducer1';
// import UseCallbackDemo from './Components/UseCallback/UseCallbackDemo';
// import UseMemoDemo from './Components/UseMemo/UseMemoDemo';
// import UseEffectDataFetch from './Components/UseEffectDataFetch';
// import UseEffect from './Components/UseEffect';
// import UseEffect2 from './Components/UseEffect2';
// import UseEffect3 from './Components/UseEffect3';
// import UseEffect4 from './Components/UseEffect4';
// import UseStateArray from './Components/UseStateArray';
// import UseStateObject from './Components/UseStateObject';
// import UseState from './Components/UseState';
export const userContext = React.createContext();
export const otherContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UseState/> */}
      {/* <UseStateObject/> */}
      {/* <UseStateArray/> */}
      {/* <UseEffect/> */}
      {/* <UseEffect2/> */}
      {/* <UseEffect4/> */}
      {/* <UseEffectDataFetch/> */}

      <userContext.Provider value="Hari1">
        <otherContext.Provider value="Kishore2">
          <UseContext3 />
        </otherContext.Provider>
      </userContext.Provider>

      {/* <UseReducer1/> */}
      {/* <UseCallbackDemo/> */}
      {/* <UseMemoDemo/> */}
      <UseRef1 />
    </div>
  );
}

export default App;
