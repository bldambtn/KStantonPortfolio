// Import React to use JSX
import React from "react";
// Import the Project component for reuse
import Project from "../components/Project";

// Define the Portfolio component, which renders multiple Project components
function Portfolio() {
  return (
    <div>
      <h1>My Work</h1>

      {/* Portfolio grid */}
      <div className="portfolio-grid">
        {/* Render individual Project components with images and links */}
        <Project
          title="note_a_wriety"
          image="../../src/assets/01_note_a_wriety.jpg"
          deployedLink="https://note-a-wriety.onrender.com/"
          githubLink="https://github.com/bldambtn/note_a_wriety"
        />
        <Project
          title="Who Does No. 2 Work For?"
          image="../../src/assets/02_WhoDoesNo2WorkFor.jpg"
          deployedLink=""
          githubLink="https://github.com/bldambtn/WhoDoesNoTwoWorkFor"
        />
        <Project
          title="Backend On A Budget"
          image="../../src/assets/03_backendOnABudget.jpg"
          deployedLink=""
          githubLink="https://github.com/bldambtn/BackendOnABudget"
        />
        <Project
          title="Unnecessary Acronyms"
          image="../../src/assets/04_UnnecessaryAcronyms.png"
          deployedLink="https://unnecessaryacronyms.onrender.com/"
          githubLink="https://github.com/bldambtn/UnnecessaryAcronyms"
        />
        <Project
          title="No Social Network"
          image="../../src/assets/05_no_social_network.jpg"
          deployedLink=""
          githubLink="https://github.com/bldambtn/NoSocialNetwork"
        />
        <Project
          title="Reader-Reply"
          image="../../src/assets/06_Reader_Reply.png"
          deployedLink="https://reader-reply.onrender.com/"
          githubLink="https://github.com/JacqMcQ/Reader-Reply"
        />
      </div>
    </div>
  );
}

export default Portfolio;
