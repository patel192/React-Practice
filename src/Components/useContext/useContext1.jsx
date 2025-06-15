// UseContext1.js
import React, { useContext } from 'react';
import { UserContext } from './Usercontext'; // Import the same UserContext object

export const UseContext1 = () => { // Removed 'value' prop as we're using context
  // Use the useContext hook, passing the Context object (UserContext)
  // This will give you direct access to the 'value' prop provided by UserContext.Provider
  const user = useContext(UserContext); 

  return (
    <div style={{ border: '2px solid red', padding: '10px', margin: '10px' }}>
      <h4>UseContext1 (The Consumer)</h4>
      {user ? ( // Conditional rendering in case user is not defined for some reason
        <h1>{`Hello ${user} welcome`}</h1>
      ) : (
        <p>User not found in context.</p>
      )}
      <p>I accessed the user value directly from the context!</p>
    </div>
  );
};