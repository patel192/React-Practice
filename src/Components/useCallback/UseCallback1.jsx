import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent rendered');
  return (
    <div className="mt-4 p-4 border border-gray-300 rounded-md bg-gray-50 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Child Component</h2>
      <button
        onClick={onClick}
        className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-purple-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
      >
        Click Me (Child Button)
      </button>
    </div>
  );
});

export function UseCallback1() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child button clicked!");
  }, []);

  const [lastAction, setLastAction] = useState("");

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
    setLastAction(`Count incremented to ${count + 1}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">UseCallback Example</h1>

        <p className="text-2xl font-medium text-blue-600 mb-4">Count: {count}</p>

        <ChildComponent onClick={handleClick} />

        <button
          onClick={handleIncrement}
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Increment Count
        </button>

        {lastAction && (
          <p className="mt-4 text-green-700 font-medium">{lastAction}</p>
        )}

        <p className="mt-8 text-sm text-gray-500">
          Open your browser's console to observe when "ChildComponent rendered" is logged.
          It should only log once initially, and not when you click "Increment Count".
          If you remove `useCallback` or `React.memo`, it would re-render every time the parent `count` state changes.
        </p>
      </div>
    </div>
  );
}

export default UseCallback1;
