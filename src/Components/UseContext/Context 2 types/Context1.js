import React, { useContext } from "react";

// 1st method
import { formContext } from "./App";

function Trails() {
  // `1st` method
  const name2 = useContext(formContext);

  return (
    <div>
      <formContext.Consumer>
        {(anyvalue) => {
          return <div>using Arrow funciton -- {anyvalue}</div>;
        }}
      </formContext.Consumer>
      <div>Name2 const is displaying here -- {name2}</div>
    </div>
  );
}

export default Trails;