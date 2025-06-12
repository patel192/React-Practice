import { useState } from "react";
export const UseState2 = () => {
  const [text, settext] = useState("")
  return (
    <div>
      <div>{text}</div>
      <label>Change the Text Please</label><br />
      <input type="text" onChange={(event)=>settext(event.target.value)}/>
    </div>
  );
};
