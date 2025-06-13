import React from 'react'
import { useState, useEffect } from 'react'

export const Counter = () => {
    const [count, setcount] = useState(0)

    useEffect(() => {
        // console.log(count) is fine for debugging, but not necessary for the component's functionality itself.
        // The return statement without a function does nothing here.
        // It's generally used for cleanup functions (e.g., clearing timers or event listeners).
        // For just logging, you don't need a return.
        console.log(`Current count is: ${count}`);
    }, [count]) // Dependency array ensures this runs only when 'count' changes

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-6 font-sans">
            <h1 className="text-8xl font-extrabold text-gray-800 mb-12 drop-shadow-lg transition-transform duration-300 ease-out transform scale-100 hover:scale-105">
                {count}
            </h1>

            <div className="flex space-x-6">
                <button
                    onClick={() => setcount(prevCount => prevCount + 1)}
                    className="px-8 py-4 bg-blue-600 text-white font-bold text-2xl rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-800"
                >
                    Increment
                </button>
                <button
                    onClick={() => setcount(prevCount => prevCount - 1)}
                    className="px-8 py-4 bg-red-600 text-white font-bold text-2xl rounded-full shadow-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300 active:bg-red-800"
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}