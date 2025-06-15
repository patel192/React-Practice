// UseContext1.js
import React, { useContext } from "react";
import { UserContext } from "./Usercontext";

export const UseContext1 = () => {
  const user = useContext(UserContext);

  return (
    <div style={{ border: "2px solid red", padding: "10px", margin: "10px" }}>
      <h4>UseContext1 (The Consumer)</h4>
      {user ? (
        <h1>{`Hello ${user} welcome`}</h1>
      ) : (
        <p>User not found in context.</p>
      )}
      <p>I accessed the user value directly from the context!</p>
    </div>
  );
};
