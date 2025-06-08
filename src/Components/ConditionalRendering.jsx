import React from "react";

export const ConditionalRendering = () => {
  const array = [1, 2, 3, 4, 5, 6];
  const buttons = array.map((item) => {
    return <button>{item}</button>;
  });
  const slicedbuttons = array.slice(0, 3).map((Element) => {
    return <button>{Element}</button>;
  });

  return (
    <div>
      <div>{buttons}</div>

      <div>
        (if ({array.length === 6}) {{ slicedbuttons }})
      </div>
    </div>
  );
};
