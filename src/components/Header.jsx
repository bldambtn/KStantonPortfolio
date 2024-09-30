import React from "react";
import { Link } from "react-router-dom";
// Import Navigation component
import Navigation from "./Navigation"; 


// Define the Header component, which now includes the Navigation component
function Header() {
  return (
    <header>
      <h1>Krystal Stanton</h1>
      {/* Render the Navigation component inside the header */}
      <Navigation />
    </header>
  );
}

export default Header;
