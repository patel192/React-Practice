import React from 'react'

export const Props1 = (props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50 p-6 font-sans">
      <h1 className="text-5xl font-extrabold text-purple-700 mb-8 drop-shadow-md">
        Car Details 🚗
      </h1>
      
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4">
        <div className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
          Make: <span className="text-blue-600">{props.make}</span>
        </div>
        <div className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
          Year: <span className="text-green-600">{props.year}</span>
        </div>
        <div className="text-2xl font-semibold text-gray-800">
          Color: <span className="text-red-600">{props.color}</span>
        </div>
      </div>
    </div>
  )
}