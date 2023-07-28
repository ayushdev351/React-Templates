import { UserContext } from "../App";
import { useContext } from "react";

import ChangeName from "./ChangeName";

function Profile() {
  const value = useContext(UserContext);

  return (
    <div className="page">
      <h1> Profile </h1>
      <h2>Hello {value.userName}</h2>
      <br />
      <ChangeName />
    </div>
  );
}

export default Profile;
