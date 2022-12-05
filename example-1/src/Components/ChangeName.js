import { useState, useContext } from "react";

import { UserContext } from "../App";

function ChangeName() {
  const value = useContext(UserContext);
  const [newUser, setNewUser] = useState("");
  const takeInput = (e) => {
    setNewUser(e.target.value);
  };

  const updateUser = () => {
    value.setUserName(newUser);
  };
  return (
    <div>
      <input className="input" placeholder="Enter" onChange={takeInput} />
      <button className="btn" onClick={updateUser}>
        Submit
      </button>
    </div>
  );
}

export default ChangeName;
