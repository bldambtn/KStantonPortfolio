// Import React and necessary hooks
import React, { useState } from "react";
// Import Onsen UI icons
import { Icon } from "react-onsenui";

// Define the Project component
function Project({ title, image, deployedLink, githubLink }) {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  // Toggle overlay visibility on mobile
  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  return (
    <div
      className="project"
      onMouseEnter={() => setOverlayVisible(true)} // Show overlay on hover (desktop)
      onMouseLeave={() => setOverlayVisible(false)} // Hide overlay on hover out (desktop)
      onClick={toggleOverlay} // Toggle overlay on click (mobile)
    >
      {/* Project Image */}
      <img src={image} alt={title} />

      {/* Overlay content */}
      <div className={`project-overlay ${isOverlayVisible ? "visible" : ""}`}>
        {/* Project title */}
        <div className="project-title">{title}</div>

        {/* GitHub link using Onsen UI icon */}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-github-icon"
        >
          <Icon icon="fa-github" />
        </a>

        {/* Deployed project link or backend-only message */}
        <div className="project-links">
          {deployedLink ? (
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          ) : (
            <p>
              This project is a backend application without a deployed
              front-end.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// Export the Project component
export default Project;
