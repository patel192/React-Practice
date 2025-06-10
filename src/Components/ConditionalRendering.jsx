import React from "react";

export const ConditionalRendering = () => {
  const array = [1, 2, 3, 4, 5, 6];
  const buttons = array.map((item) => {
    return <button>{item}</button>;
  });
  let slicedbuttons;
  slicedbuttons = array.length === 7 ? array.map((item)=>{
    return <button>{item}</button>
  }) : [<button>NA</button>]
return (
    <div>
      <div>{buttons}</div>
      <div>{slicedbuttons}</div>
    </div>
  );
};
