// Component1.js
import React from "react";
import { Component2 } from "./Component2";
import { UserContext } from "./Usercontext"; // Import the UserContext you created

export const Component1 = () => {
  const user = "Muhammad"; // The data you want to share

  return (
    <div style={{ border: '2px solid blue', padding: '10px', margin: '10px' }}>
      <h2>Component1 (The Provider)</h2>
      <p>I'm providing the user: <strong>{user}</strong></p>
      
      {/* The UserContext.Provider wraps all components that need access to the context.
        The 'value' prop is where you pass the actual data you want to share.
      */}
      <UserContext.Provider value={user}>
        <Component2 />
      </UserContext.Provider>
    </div>
  );
};