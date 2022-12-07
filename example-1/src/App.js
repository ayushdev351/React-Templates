import "./App.css";

import {useState, useEffect} from "react"

function App() {
  const [user, setUser] = useState("octocat");
  const [data, setData] = useState({});

  const changeHandler = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  }

  useEffect(() => {

    fetch(`https://api.github.com/users/${user}`)
    .then((res) => res.json())
    .then((data) => setData(data));

    console.log("Effected")
  }, [user])

  return (
    <div className="App">
      <h1>User name of </h1>
      <input onChange={changeHandler}></input>
      <button onClick ={changeHandler}>enter</button>
      <h1>is {data.name}</h1>
    </div>
  );
}

export default App;
