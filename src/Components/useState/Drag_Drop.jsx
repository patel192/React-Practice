import React from 'react';
import { useState } from 'react';

export const Drag_Drop = () => {
  const initialItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  const [items, setItems] = useState(initialItems);
  // draggingIndex will store the index of the item currently being dragged from its original position
  const [draggingIndex, setDraggingIndex] = useState(null); 
  // hoverTargetIndex will store the index of the item being hovered over, indicating a potential drop zone
  const [hoverTargetIndex, setHoverTargetIndex] = useState(null); 

  function handleDragStart(index) {
    setDraggingIndex(index);
    setHoverTargetIndex(index); // Initially, hover target is the item itself
  }

  function handleDragOver(e, index) {
    e.preventDefault(); // Necessary to allow dropping
    if (draggingIndex === null || draggingIndex === index) return;

    setHoverTargetIndex(index); // Update the visual drop target

    // This part handles the actual reordering of the array as you drag
    const newItems = [...items];
    const draggingItemValue = newItems[draggingIndex]; // Get the value of the item originally being dragged
    
    // Remove the item from its current (draggingIndex) position
    newItems.splice(draggingIndex, 1);
    // Insert it into the new position (index being hovered over)
    newItems.splice(index, 0, draggingItemValue);

    // Update the state for the new order and the new "current" position of the dragged item
    setDraggingIndex(index); // The dragged item is now conceptually at 'index'
    setItems(newItems);
  }

  function handleDragEnd() {
    setDraggingIndex(null);
    setHoverTargetIndex(null);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6 font-sans">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-10 drop-shadow-md">
        Drag & Drop List 🤏
      </h1>

      <ul className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            draggable // Makes the element draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragLeave={() => setHoverTargetIndex(null)} // Clear hover state if leaving item
            onDragEnd={handleDragEnd}
            className={`
              p-5 rounded-lg text-lg font-medium cursor-grab
              flex items-center justify-between
              transition-all duration-200 ease-in-out transform
              select-none // Prevent text selection during drag

              ${
                draggingIndex === index // This is the item currently being actively moved
                  ? 'bg-blue-400 text-white shadow-lg scale-[1.02] border-2 border-blue-600' // Visual for the item being dragged
                  : 'bg-gray-100 text-gray-800 shadow-sm border-2 border-transparent hover:bg-blue-100 hover:shadow-md'
              }
              ${
                hoverTargetIndex === index && draggingIndex !== index // This is a target where an item *could* be dropped
                  ? 'border-dashed border-purple-500 bg-purple-50' // Visual for a drop zone
                  : ''
              }
            `}
          >
            {item}
            {/* Optional: Add a grab handle icon */}
            <span className="ml-2 text-gray-400">☰</span> 
          </li>
        ))}
      </ul>
    </div>
  );
};