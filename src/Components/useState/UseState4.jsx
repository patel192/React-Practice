import { useState } from "react";

export const UseState4 = () => {
  const [textlength, settextlength] = useState(0); // Initialize with 0 for better display

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 p-6">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 drop-shadow-md">
        Length Counter <span role="img" aria-label="road">🛣️</span>
      </h1>

      <h1 className="text-8xl font-bold text-orange-600 mb-12 animate-bounce-in-out">
        {textlength}
      </h1>

      <div className="w-full max-w-lg">
        <input
          type="text"
          onChange={(event) => {
            settextlength(event.target.value.length);
          }}
          className="w-full px-6 py-4 border-4 border-gray-300 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-400 focus:border-orange-400 text-2xl text-gray-800 placeholder-gray-500 transition duration-300 ease-in-out transform hover:scale-[1.01]"
          placeholder="Start typing to count..."
        />
      </div>
    </div>
  );
};