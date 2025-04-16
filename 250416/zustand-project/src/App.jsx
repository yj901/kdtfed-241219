//import { useState } from "react";
import "./App.css";

import counterStore from "./stores/counterStores";

function App() {
  // const [count, setCount] = useState(1);
  const { count, increase, decrease, increaseBy } = counterStore();

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={() => increaseBy(10)}>10씩 증가+</button>
      <button onClick={decrease}>-</button>
    </>
  );
}

export default App;
