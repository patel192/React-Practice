// Component1.js
import React from "react";
import { Component2 } from "./Component2";
import { UserContext } from "./Usercontext"; //

export const Component1 = () => {
  const user = "Muhammad";

  return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
      <h2>Component1 (The Provider)</h2>
      <p>
        I'm providing the user: <strong>{user}</strong>
      </p>

      <UserContext.Provider value={user}>
        <Component2 />
      </UserContext.Provider>
    </div>
  );
};
