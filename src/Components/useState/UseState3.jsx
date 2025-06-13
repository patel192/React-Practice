import React from 'react';
import { useState } from 'react';

export const UseState3 = () => {
  const text = "Hello, Btw I am React State Management Hook There! 😊😊";
  const [status, setstatus] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      {status && (
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 text-center mb-8 px-4 py-3 bg-white rounded-lg shadow-xl animate-fade-in-down transition-all duration-500 ease-out">
          {text}
        </h1>
      )}

      <button
        onClick={() => setstatus(!status)}
        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 active:from-blue-600 active:to-indigo-700"
      >
        {status ? "Hide Text" : "Show Text"}
      </button>
    </div>
  );
};