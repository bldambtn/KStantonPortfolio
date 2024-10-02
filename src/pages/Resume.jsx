// Import React to use JSX
import React from "react";

// Define the Resume component, which displays a downloadable resume link and a list of proficiencies
function Resume() {
  return (
    <div className="resume-section">
      {/* Downloadable resume link */}
      <a href="/kstantonresume.pdf" download className="resume-download-link">
        Download my Resume (PDF)
      </a>

      {/* Container for the proficiencies in three columns */}
      <div className="proficiency-columns">
        {/* Front-end Proficiencies */}
        <div>
          <h2>Front-end Proficiencies:</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        {/* Back-end Proficiencies */}
        <div>
          <h2>Back-end Proficiencies:</h2>
          <ul>
            <li>APIs</li>
            <li>Insomnia, Postman</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>PostgreSQL</li>
          </ul>
        </div>

        {/* Additional Proficiencies */}
        <div>
          <h2>Additional Proficiencies:</h2>
          <ul>
            <li>Manual Testing</li>
            <li>Test Planning</li>
            <li>Jira</li>
            <li>Xray</li>
            <li>Agile Methodologies</li>
            <li>Research</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Export the Resume component so it can be used in other parts of the app
export default Resume;
