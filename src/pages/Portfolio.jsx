// Import React to use JSX
import React from "react";
// Import Onsen UI components
import { Page, Button } from 'react-onsenui'; 
// Import the Project component for reuse
import Project from "../components/Project"; 

// Define the Portfolio component, which renders multiple Project components
function Portfolio() {
  return (
    <div>
      <h1>My Projects</h1>
      
      {/* Render individual Project components */}
      <Project title="Project 1" description="This is a description of Project 1" />
      <Project title="Project 2" description="This is a description of Project 2" />
      <Project title="Project 3" description="This is a description of Project 3" />
    </div>
  );
}

export default Portfolio;
