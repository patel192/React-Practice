import React, { useState, useMemo } from "react";

export const UseMemo1 = () => {
  const [count, setCount] = useState(0);
  const MagicalNumber = 99999;

  // Create a large array. For demonstration, we'll ensure MagicalNumber is present.
  const largeArray = useMemo(() => {
    const arr = Array.from({ length: 1000000 }, (_, i) => i * 2);
    // Ensure the MagicalNumber is in the array for findIndex to find it
    if (!arr.includes(MagicalNumber)) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        arr[randomIndex] = MagicalNumber; // Insert it at a random spot if not present
    }
    return arr;
  }, []); // Dependency array is empty as largeArray is generated once

  // Use useMemo to memoize the result of the computationally expensive findIndex operation.
  // This function will only re-run if 'largeArray' or 'MagicalNumber' changes.
  // Since 'largeArray' is memoized with an empty dependency, and MagicalNumber is a constant,
  // this findIndex operation effectively runs only once on initial render.
  const foundIndex = useMemo(() => {
    console.log('Calculating findIndex...'); // This will show in console when calculation occurs
    return largeArray.findIndex(num => num === MagicalNumber);
  }, [largeArray, MagicalNumber]); // Dependencies for this useMemo

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-inter text-gray-800">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-md border border-gray-200 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">useMemo Example</h1>

        <div className="space-y-4 mb-6 text-center">
          <p className="text-xl font-medium text-blue-600">
            Current Count: <span className="font-bold">{count}</span>
          </p>
          <p className="text-lg text-gray-700">
            Magical Number to Find: <span className="font-semibold text-purple-600">{MagicalNumber}</span>
          </p>
          <p className="text-lg text-gray-700">
            Index of Magical Number: <span className="font-semibold text-green-600">
              {foundIndex !== -1 ? foundIndex : 'Not Found'}
            </span>
          </p>
          <p className="text-sm text-gray-500 italic">
            (Check console to see "Calculating findIndex..." appear only once on initial render.)
          </p>
        </div>

        <button
          onClick={() => setCount(count + 1)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition duration-300 flex items-center justify-center text-lg font-semibold shadow-md hover:shadow-lg"
        >
          Increment Count
          <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
        </button>
      </div>
    </div>
  );
};
