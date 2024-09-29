// Import React to use JSX
import React from "react";
// Import the Project component for reuse
import Project from "../components/Project"; 

// Define the Portfolio component, which displays a list of projects
function Portfolio() {
  return (
    <div>
      {/* Heading for the Portfolio section */}
      <h1>Portfolio</h1>

      {/* Example usage of the Project component to display individual projects */}
      <Project title="Project 1" description="Description of project 1" />
      <Project title="Project 2" description="Description of project 2" />
      <Project title="Project 3" description="Description of project 3" />
    </div>
  );
}

// Export the Portfolio component so it can be used in other parts of the app
export default Portfolio;
