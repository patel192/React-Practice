import React from "react";
import { useState } from "react";
export const ConditionalRendering = () => {   
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>{count}</div>
      <div><button onClick={()=>setCount(count+1) }>ClickMe</button></div>
    </div>
  );
};
