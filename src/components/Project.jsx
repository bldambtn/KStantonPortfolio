// Import React to use JSX
import React from "react";

// Define the Project component, which takes title and description as props
function Project({ title, description }) {
  return (
    <div
      className="project"
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

// Export the Project component
export default Project;
