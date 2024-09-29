// Import React to use JSX
import React from "react";
// Import Onsen UI components
import { Page, Button } from 'react-onsenui'; 
// Import the Project component for reuse
import Project from "../components/Project"; 

// Define the Portfolio component, which displays a list of projects
function Portfolio() {
  return (
    <Page>
      <h1>My Projects</h1>

      {/* Add a button from Onsen UI */}
      <Button onClick={() => alert("This is an Onsen UI Button!")}>
        Click Me!
      </Button>

      {/* Display your projects using the Project component */}
      <div className="projects-container">
        <Project title="Project 1" description="Description of project 1" />
        <Project title="Project 2" description="Description of project 2" />
        <Project title="Project 3" description="Description of project 3" />
      </div>
    </Page>
  );
}

// Export the Portfolio component so it can be used in other parts of the app
export default Portfolio;
