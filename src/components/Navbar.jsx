import { NavLink } from "react-router-dom";
import { FaHome, FaFolderOpen } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        title="Home"
      >
        <FaHome size={24} />
      </NavLink>
      <NavLink
        to="/artifacts"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        title="Artifacts"
      >
        <FaFolderOpen size={24} />
      </NavLink>
    </nav>
  );
}

export default Navbar;
