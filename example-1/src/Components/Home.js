import { useContext } from "react";
import { UserContext } from "../App";

function Home() {
  const value = useContext(UserContext);

  return (
    <div className="page">
      <h1> Home </h1>
      <h2>Hello from Home {value.userName}</h2>
    </div>
  );
}

export default Home;
