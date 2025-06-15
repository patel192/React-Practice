import React, { use } from "react";
import { Component2 } from "./Component2";
import { createContext ,useContext} from "react";
export const Component1 = () => {
  const user = "Muhammad";
  const Usercontext = createContext();
  return (
    <div>
      Component1
      <Usercontext.Provider value={user}>
        <Component2/>
      </Usercontext.Provider>
    </div>
  );
};
