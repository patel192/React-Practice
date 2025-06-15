// Component2.js
import React from "react";
import { UseContext1 } from "./UseContext1"; // Corrected casing for consistency

export const Component2 = () => {
  return (
    <div style={{ border: '2px solid green', padding: '10px', margin: '10px' }}>
      <h3>Component2 (Intermediate)</h3>
      <p>I don't need the user value directly, but I render UseContext1.</p>
      <UseContext1 />
    </div>
  );
};