import React from "react";
import { useState } from "react";
export const ColorChanger = () => {
  const DataHandler = (data) =>{
    console.log(data)
  }
  const [color, setcolor] = useState('')
  return (
    <div>
      <h1>Please Select Color For Me</h1>
      <form action="" onSubmit={DataHandler}>
        <select name="" id="">
          <option value="red">RED</option>
          <option value="green">GREEN</option>
          <option value="blue">BLUE</option>
          <option value="white">WHITE</option>
          <option value="purple">PURPLE</option>
          <option value="black">BLACK</option>
          <option value="orange">ORANGE</option>
        </select>
        <input type="submit" value="Change The Color" />
      </form>
    </div>
  );
};
