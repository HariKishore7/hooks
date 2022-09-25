import React from "react";
import "./styles.css";
import Trails from "./Trails";

//1st method
import { createContext } from "react";
export const formContext = createContext();

//2nd method
export const context1 = React.createContext();

function App() {
  const name1 = "Hari Kishore";
  return (
    <div className="App">
      {/* 1st method */}
      <formContext.Provider value="yuva">
        <Trails />
      </formContext.Provider>

      {/* 2nd method */}
      <context1.Provider value={name1}>
        <Trails />
      </context1.Provider>
    </div>
  );
}

export default React.memo(App);