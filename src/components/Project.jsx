// Import React to use JSX
import React from "react";

// Define the Project component, which takes in 'title' and 'description' as props
function Project({ title, description }) {
  return (
    <div className="project">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

// Export the Project component so it can be used in other parts of the app
export default Project;
