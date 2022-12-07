import "./App.css";

import {useState, useMemo} from "react";

function App() {
  const [input, setInput] = useState(0);
  const [counter, setCounter] = useState(0);

  // DOM manipulation function
  // Called only when corresponding DOM element changes
  const changeHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    console.log("Input function");
  }

  // DOM manipulation function
  // Called only when corresponding DOM element changes
  const increment = () => {
    setCounter(counter + 1);
    console.log("Counter function");
  }

  // Normal Function
  // Will be recreated on every render
  // Each render happen when any state change

  const calculation = (n) => {
    console.log("Fucking Calculated");
    return n * n * n;
  }

  // So we create a memo to memoise the result of the function
  // And recalculate only when dependecy (input) changes

  const memoisedCalculation = useMemo(() => calculation(input), [input])

  return (
    <div className="App">
      <input onChange = {changeHandler} />
      <h1>Your Input : {input}</h1>
      <br/>
      <h1>Calculation Result : {memoisedCalculation}</h1>
      <br/>
      <button onClick = {increment}>Click</button>
      <h1>You clicked {counter} times</h1>
    </div>
  )
}

export default App;
