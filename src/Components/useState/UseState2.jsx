import { useState } from "react";

export const UseState2 = () => {
  const [text, settext] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-6">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 drop-shadow-md">
        Showcase Your Thoughts <span role="img" aria-label="brain">🧠</span>
      </h1>

      <div className="min-h-[80px] w-full max-w-xl bg-white p-6 rounded-xl shadow-lg flex items-center justify-center text-3xl font-semibold text-purple-700 text-center mb-10 border border-purple-200 break-words">
        {text ? text : "Start typing to see your thoughts appear..."}
      </div>

      <div className="w-full max-w-md">
        <label htmlFor="thought-input" className="block text-xl font-medium text-gray-700 mb-3">
          Change the Text Please
        </label>
        <input
          id="thought-input"
          type="text"
          onChange={(event) => settext(event.target.value)}
          className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-400 text-lg text-gray-800 placeholder-gray-400 transition duration-200 ease-in-out"
          placeholder="Type here..."
        />
      </div>
    </div>
  );
};