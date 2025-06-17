import React, { useState, useCallback, useMemo } from "react";

const ItemList = React.memo(({ items, onSelectItem }) => {
  console.log("ItemList rendered"); // Log to observe re-renders
  return (
    <div className="mt-4 p-4 border border-gray-300 rounded-md bg-gray-50 shadow-sm w-full max-w-md">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Items</h2>
      <ul className="space-y-2">
        {items.length > 0 ? (
          items.map((item) => (
            <li
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="p-2 bg-white rounded-md shadow-sm cursor-pointer hover:bg-blue-50 transition-colors duration-200 flex justify-between items-center"
            >
              <span className="font-medium text-gray-800">{item.name}</span>
              <span className="text-sm text-gray-600">({item.category})</span>
            </li>
          ))
        ) : (
          <p className="text-gray-500 italic">
            No items found for the current filter.
          </p>
        )}
      </ul>
    </div>
  );
});

// UseCallbackFilterExample Component
export function UseCallbackFilterExample() {
  const [query, setQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [items] = useState([
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Banana", category: "Fruit" },
    { id: 3, name: "Carrot", category: "Vegetable" },
    { id: 4, name: "Broccoli", category: "Vegetable" },
    { id: 5, name: "Milk", category: "Dairy" },
    { id: 6, name: "Cheese", category: "Dairy" },
  ]);

  // useMemo to memoize the filtered items list.
  // This list will only be re-calculated if 'items' or 'query' changes.
  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]);

  // useCallback to memoize the onSelectItem function.
  // This function will not be recreated on every render of UseCallbackFilterExample
  // unless its dependencies (setSelectedItem) change.
  const handleSelectItem = useCallback(
    (item) => {
      setSelectedItem(item);
      console.log("Selected item:", item.name);
    },
    [setSelectedItem]
  ); // Dependency: setSelectedItem (from useState, typically stable)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center w-full max-w-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          UseCallback with Filtering
        </h1>

        <input
          type="text"
          placeholder="Filter items..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />

        <ItemList items={filteredItems} onSelectItem={handleSelectItem} />

        {selectedItem && (
          <p className="mt-6 text-lg text-green-700 font-medium">
            Currently selected: {selectedItem.name} ({selectedItem.category})
          </p>
        )}

        <p className="mt-8 text-sm text-gray-500">
          Observe the console logs for "ItemList rendered" and "Filtering
          items...". "ItemList rendered" should only appear when `query` changes
          or when an item is selected (due to `setSelectedItem`). "Filtering
          items..." should only appear when `query` changes. Without
          `useCallback` on `onSelectItem` and `React.memo` on `ItemList`,
          `ItemList` would re-render even if only the `query` changed, because
          `onSelectItem` would be a new function instance.
        </p>
      </div>
    </div>
  );
}

export default UseCallbackFilterExample;
