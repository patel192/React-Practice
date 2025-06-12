import React from "react";

export const ConditionalRendering = () => {
  const array = [1, 2, 3, 4, 5, 6];
  const array2 = [6, 5, 4, 3, 2, 1];
  const buttons = array.map((item) => {
    return <button>{item}</button>;
  });
  let slicedbuttons;
  slicedbuttons = array.length === array2.length && array.map((item)=>{
    return <button>{item}</button>
  })
    
  return (
    <div>
      <div>{buttons}</div>
      <div>{slicedbuttons}</div>
    </div>
  );
};
