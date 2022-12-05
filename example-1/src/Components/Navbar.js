import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/" className="list">
        Home
      </Link>
      <Link to="/profile" className="list">
        Profile
      </Link>
      <Link to="/menu" className="list">
        Menu
      </Link>
    </div>
  );
}

export default Navbar;
