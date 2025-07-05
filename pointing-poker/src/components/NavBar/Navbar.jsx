import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-header">Pointing Poker</div>
      <div className="navbar-buttons">
        <Link to="/about" className="btn btn-primary">
          About
        </Link>
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </nav>
  );
}
