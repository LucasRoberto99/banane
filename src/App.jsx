import { useState } from "react";

import "./App.css";
import Decrement from "./components/Decrement";
import Increment from "./components/Increment";
import Button from "./components/Button";

function App() {
  const [counter, setCounter] = useState(0); // je destructure le tableau que me renvoie useState

  console.log("mon composant APP est re render");

  const resetFunc = () => {
    setCounter(0);
  };

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  return (
    <main>
      {/* <Decrement counter={counter} setCounter={setCounter} /> */}
      <Button counter={counter} setCounter={setCounter} sign={"-"} />

      {/* {counter > 0 ? (
        <p className="green">{counter}</p>
      ) : (
        <p className="red">{counter}</p>
      )} */}

      {/* <p className={counter > 0 ? "green" : "red"}>{counter}</p> */}

      {counter > 0 && <p className="green">{counter}</p>}
      {counter === 0 && <p>{counter}</p>}
      {counter < 0 && <p className="red">{counter}</p>}
      {/* <Increment func={increment} /> */}
      <Button counter={counter} setCounter={setCounter} sign={"+"} />
      <button onClick={resetFunc}>reset</button>
    </main>
  );
}

export default App;
