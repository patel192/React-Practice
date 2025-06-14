import React from "react";
import { useState } from "react";

export const UseState = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-6 tracking-wide">
        {props.year}Counter <span role="img" aria-label="watch">⌚</span>
      </h1>
      <div className="text-8xl font-bold text-gray-800 mb-10">
        {count}
      </div>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          className="px-8 py-4 bg-blue-600 text-white font-semibold text-2xl rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-800"
        >
          Click Me!
        </button>
      </div>
    </div>
  );
};