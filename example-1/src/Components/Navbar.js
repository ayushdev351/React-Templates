import { Link } from "react-router-dom";

import ThemeToggler from "./ThemeToggler";

function Navbar() {
  return (
    <div className="nav">
      <Link to="/" className="list">
        Home
      </Link>
      <Link to="/profile" className="list">
        Profile
      </Link>
      <Link to="/menu" className="list">
        Menu
      </Link>
      <ThemeToggler/>
    </div>
  );
}

export default Navbar;
