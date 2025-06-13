import React from "react";
import { useState } from "react";
export const ColorChanger = () => {
  const [Color, setColor] = useState('');
  const Handlechange =(event)=>{ 
    setColor(event.target.value)
    console.log(setColor)

  }
  return (
    <div>
      <h1 style={{backgroundColor:Color}}>Please Select Color For Me</h1>
        <select name="" id="" onChange={Handlechange}>
          <option value="red" selected>RED</option>
          <option value="green">GREEN</option>
          <option value="blue">BLUE</option>
          <option value="white">WHITE</option>
          <option value="purple">PURPLE</option>
          <option value="black">BLACK</option>
          <option value="orange">ORANGE</option>
        </select>
    </div>
  );
};
