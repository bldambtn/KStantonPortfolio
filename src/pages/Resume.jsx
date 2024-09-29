// Import React to use JSX
import React from "react";

// Define the Resume component, which displays a downloadable resume link and a list of proficiencies
function Resume() {
  return (
    <div>
      {/* Heading for the Resume section */}
      <h1>Resume</h1>

      {/* Downloadable resume link */}
      <a href="/path-to-your-resume.pdf" download>
        Download my Resume
      </a>

      {/* Heading for the Proficiencies list */}
      <h2>Proficiencies:</h2>

      {/* List of proficiencies */}
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>CSS</li>
      </ul>
    </div>
  );
}

// Export the Resume component so it can be used in other parts of the app
export default Resume;
