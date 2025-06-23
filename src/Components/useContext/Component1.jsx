
import { Component2 } from "./Component2";
import { UserContext } from "./Usercontext";
export const Component1 = () => {
  const user = {
    name: "Muhammad",
    age: 21,
    gender: "Male",
  };
  return (
    <>
      <div>Component1</div>
      <UserContext.Provider value={user}>
        <Component2 />
      </UserContext.Provider>
    </>
  );
};
