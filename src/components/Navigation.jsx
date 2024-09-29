// Import React to use JSX
import React from "react";
// Import Link for navigation
import { Link } from "react-router-dom"; 

// Define the Navigation component, which displays the navigation bar with links
function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

// Export the Navigation component so it can be used in other parts of the app
export default Navigation;
