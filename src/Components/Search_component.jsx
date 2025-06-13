import React, { useState } from "react";

export const Search_component = () => {
  const items = [
    "Apple",
    "Banana",
    "Carrot",
    "Date",
    "Eggplant",
    "Fig",
    "Grape",
    "Honeydew",
    "Iceberg Lettuce",
    "Jalapeño",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Pineapple",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tomato",
    "Ugli Fruit",
    "Vanilla Bean",
    "Watermelon",
    "Xigua", // A type of watermelon
    "Yellow Bell Pepper",
    "Zucchini"
  ];
  const [search, setSearch] = useState("");

  function handleInputChange(event) {
    setSearch(event.target.value);
  }

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6 font-sans">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 mt-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          Item Search 🔍
        </h1>
        <input
          type="text"
          value={search}
          onChange={handleInputChange}
          className="w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-3 focus:ring-blue-400 focus:border-blue-400 text-lg text-gray-800 placeholder-gray-500 transition duration-200 ease-in-out mb-6"
          placeholder="Search for an item..."
        />
        
        {filteredItems.length === 0 && search.length > 0 ? (
          <p className="text-center text-lg text-red-500 font-medium">No items found.</p>
        ) : (
          <ul className="max-h-60 overflow-y-auto custom-scrollbar border border-gray-200 rounded-md p-2">
            {filteredItems.map((item, index) => (
              <li 
                key={index} 
                className="p-3 my-1 bg-gray-50 hover:bg-blue-100 rounded-md text-lg text-gray-700 font-medium transition duration-150 ease-in-out cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};