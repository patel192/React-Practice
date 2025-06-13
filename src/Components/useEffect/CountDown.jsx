import React, { useEffect, useState } from "react";

export const CountDown = () => {
  const [count, setCount] = useState(60); // Renamed to setCount for consistency

  useEffect(() => {
    if (count <= 0) {
      return;
    }

    const timerId = setTimeout(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [count]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-6 font-sans">
      <h1
        className={`
          text-9xl font-extrabold drop-shadow-xl select-none // Base styles
          ${
            count > 10
              ? "text-green-600"
              : count > 0 //
              ? "text-orange-500 animate-pulse"
              : "text-red-600 animate-bounce"
          }
          transition-all duration-500 ease-in-out transform // Smooth transitions
        `}
      >
        {count > 0 ? count : "Time's Up!"}
      </h1>
    </div>
  );
};
