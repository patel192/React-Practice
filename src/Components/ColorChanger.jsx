import React from "react";
import { useState } from "react";

export const ColorChanger = () => {
  // Initialize Color state with 'red' to match the default selected option
  const [color, setColor] = useState('red'); 

  const handleChange = (event) => { 
    setColor(event.target.value);
    // console.log(setColor) is not needed here as setColor is the state setter function
    // console.log(event.target.value) would log the actual color value
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 font-sans">
      <h1 
        className="text-4xl sm:text-5xl font-extrabold text-white p-8 rounded-xl shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 text-center mb-12 w-full max-w-2xl"
        style={{ backgroundColor: color }}
      >
        Please Select a Color For Me!
      </h1>
      
      <select 
        name="color-selector" 
        id="color-selector" 
        onChange={handleChange}
        value={color} // Bind the select value to the state
        className="block w-full max-w-xs px-6 py-4 border border-gray-300 rounded-lg shadow-md text-2xl font-semibold text-gray-800 bg-white appearance-none focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out cursor-pointer hover:border-gray-400"
      >
        <option value="red">RED</option>
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