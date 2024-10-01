// Import React to use JSX
import React from "react";
// Import NavLink for navigation with active class functionality
import { NavLink } from "react-router-dom";

// Define the Navigation component, which displays the navigation bar with links
function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName="active">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" activeClassName="active">
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

// Export the Navigation component so it can be used in other parts of the app
export default Navigation;
