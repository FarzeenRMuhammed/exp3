import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <h2>TechFest 2026</h2>

      <Link to="/">Home</Link>
      <Link to="/events">Events</Link>
      <Link to="/register">Register</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/contact">Contact</Link>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"}
      </button>
    </nav>
  );
}

export default Navbar;