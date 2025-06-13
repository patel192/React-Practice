import React from "react";
import { useState } from "react";

export const To_Do_List = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit() {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue('');
    }
  }

  function handleDelete(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6 font-sans">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-10 drop-shadow-lg animate-fade-in">
        My To-Do List <span role="img" aria-label="checkmark">✅</span>
      </h1>

      <div className="flex w-full max-w-lg mb-8 space-x-3">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="flex-grow px-5 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 text-lg text-gray-800 placeholder-gray-400 transition duration-200 ease-in-out"
          placeholder="Add a new task..."
        />
        <button
          onClick={handleSubmit}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-800 text-lg"
        >
          Add Todo
        </button>
      </div>

      {todos.length === 0 ? (
        <p className="text-xl text-gray-600 italic">No tasks yet. Start adding some!</p>
      ) : (
        <ul className="w-full max-w-lg space-y-4">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-white p-5 rounded-lg shadow-md border-l-8 border-blue-500 hover:shadow-lg transition-shadow duration-200 ease-in-out transform hover:-translate-y-0.5"
            >
              <span className="text-xl text-gray-800 font-medium break-words pr-4 flex-grow">
                {todo}
              </span>
              <button
                onClick={() => handleDelete(index)}
                className="ml-4 px-5 py-2 bg-red-500 text-white font-semibold rounded-md shadow-sm hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-300 active:bg-red-700 text-base"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};