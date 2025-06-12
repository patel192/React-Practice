import "./App.css";
import { ColorChanger } from "./Components/ColorChanger";
import { To_Do_List } from "./Components/To_Do_List";

import { UseState } from "./Components/UseState";
import { UseState2 } from "./Components/UseState2";
import { UseState3 } from "./Components/UseState3";
import { UseState4 } from "./Components/UseState4";

function App() {
  return (
    <>
      <UseState />
      <UseState2 />
      <UseState3 />
      <UseState4 />
      <To_Do_List/>
      <ColorChanger/>
    </>
  );
}

export default App;
