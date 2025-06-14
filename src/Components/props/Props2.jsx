import React from 'react';

export const Props2 = (props) => {
  const { dataArray } = props;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 p-6 font-sans">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-10 drop-shadow-lg">
        List of Items 📋
      </h1>

      {dataArray && dataArray.length > 0 ? (
        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
          <ul className="space-y-4">
            {dataArray.map((item, index) => (
              <li
                key={index} // It's often better to use a unique ID if available, otherwise index is a fallback
                className="text-xl font-medium text-gray-700 bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-blue-500 hover:bg-blue-100 transition duration-200 ease-in-out"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-xl text-gray-600 italic">No items to display.</p>
      )}
    </div>
  );
};