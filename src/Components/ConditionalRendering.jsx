import React from "react";

export const ConditionalRendering = () => {
  const array = [1, 2, 3, 4, 5, 6];
  const array2 = [6, 5, 4, 3, 2, 1];
  const buttons = array.map((item) => {
    return <button>{item}</button>;
  });
  let slicedbuttons;
  slicedbuttons =
    array.length && array2.length != 0
      ? array.map((item) => {
          return (
            <button>{item}</button> &&
            array2.map((item2) => {
            return <button>{item2}</button>;
            })
          );
        })
      : [<h1>Not Applicable</h1>]
  return (
    <div>
      <div>{buttons}</div>
      <div>{slicedbuttons}</div>
    </div>
  );
};
