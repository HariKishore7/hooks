import React, { useContext } from "react";

// 2nd method
import { context1 } from "./App";

function Trails() {
  //2nd method
  const name1 = useContext(context1);
  // const { name1 } = useContext(context1);

  return (
    <div>
      <context1.Consumer>
        {(anyvalue) => {
          return <div>Arrow function -- {anyvalue}</div>;
        }}
      </context1.Consumer>
      <div>name1 const is displaying here -- {name1}</div>
    </div>
  );
}

export default Trails;