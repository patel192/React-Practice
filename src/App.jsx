import "./App.css";
import { Props1 } from "./Components/props/Props1";
import { Props2 } from "./Components/props/Props2";
import { UseContext1 } from "./Components/useContext/useContext1";
import { CountDown } from "./Components/useEffect/CountDown";
import { Counter } from "./Components/useEffect/Counter";
import { FormValidator } from "./Components/useEffect/FormValidator";
import { ColorChanger } from "./Components/useState/ColorChanger";
import { Drag_Drop } from "./Components/useState/Drag_Drop";
import { Search_component } from "./Components/useState/Search_component";
import { To_Do_List } from "./Components/useState/To_Do_List";

import { UseState } from "./Components/useState/UseState";
import { UseState2 } from "./Components/useState/UseState2";
import { UseState3 } from "./Components/useState/UseState3";
import { UseState4 } from "./Components/useState/UseState4";

function App() {
const Array = ["For","While","Do-while","If-else"]
  return (
    <>
      <UseState />
      <UseState2 />
      <UseState3 />
      <UseState4 />
      <To_Do_List />
      <ColorChanger />
      <Search_component />
      <Drag_Drop />
      <Counter />
      <CountDown />
      <FormValidator />
      <UseContext1 />
      <Props1 make="Honda" color="red" year="2003" />
      <Props2 dataArray={Array}/>
    </>
  );
}

export default App;
