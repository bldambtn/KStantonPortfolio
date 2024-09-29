// Import React to use JSX
import React from "react";

// Define the AboutMe component, which displays personal information
function AboutMe() {
  return (
    <div>
      {/* Heading for the About Me section */}
      <h1>About Me</h1>

      {/* Short bio or description */}
      <p>
        Hi, I'm [Your Name], a web developer specializing in building modern,
        responsive web applications. I have experience with JavaScript, React,
        Node.js, and more. Passionate about creating efficient and user-friendly
        solutions.
      </p>
    </div>
  );
}

// Export the AboutMe component so it can be used in other parts of the app
export default AboutMe;
