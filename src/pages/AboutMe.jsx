// Import React to use JSX
import React from "react";
// Import Onsen UI components
import { Icon } from "react-onsenui";

// Define the AboutMe component, which displays personal information
function AboutMe() {
  return (
    <div>
      {/* Heading for the About Me section */}
      <h1>About Me</h1>

      {/* Add a headshot or avatar below the header */}
      <img
        src="/path-to-your-image.jpg" // Replace with your actual image path
        alt="Headshot"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          marginBottom: "20px",
        }}
      />

      {/* Short bio or description */}
      <p>
        I’m a dedicated Quality Assurance (QA) professional with expertise in
        manual testing, automated testing, and mobile testing. As a QA
        Engineering Analyst, I lead a team of testers, ensuring product quality,
        reliability, and performance across a variety of platforms. My passion
        for automation drives me to continually explore new ways to streamline
        testing processes, increasing both efficiency and accuracy. With a solid
        foundation in coding, I understand the intricacies of software
        development, which allows me to create more effective testing strategies
        and outcomes. This technical proficiency enhances my ability to design
        automated tests that are both reliable and scalable, leading to more
        efficient issue identification and resolution. A well-grounded coding
        background empowers me to collaborate seamlessly with developers and
        offer more insightful feedback, ultimately improving the overall product
        quality.
      </p>
      <p>
        I view technology as an art form—a creative and analytical process that,
        when executed correctly, results in seamless user experiences. My
        interest in automation and test-driven development allows me to reduce
        repetitive tasks while maintaining the highest standards of quality. I
        thrive in environments that encourage innovation, collaboration, and
        continuous improvement.
      </p>
      <p>
        My certifications include ISTQB Foundation Level, and I’ve completed
        courses in CSS, HTML, Vlocity Platform Foundations, and Transact-SQL,
        ensuring I stay up-to-date with the latest technologies and
        methodologies. I’m always looking to expand my skill set, particularly
        in the realms of automation and test-driven development.
      </p>
      <p>
        Outside of work, I’m fascinated by how technology can be both functional
        and aesthetically pleasing, and I aim to apply this philosophy in every
        project I undertake.
      </p>

      {/* Social media icons with links using Onsen UI icons */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "15px" }}
        >
          <Icon
            icon="fa-linkedin"
            size={40}
            style={{ color: "var(--greenColor)" }}
          />
        </a>
        <a
          href="https://github.com/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "15px" }}
        >
          <Icon
            icon="fa-github"
            size={40}
            style={{ color: "var(--greenColor)" }}
          />
        </a>
        <a
          href="https://fullstack.com/your-fullstack-profile" // Replace with your actual FullStack link
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="fa-code"
            size={40}
            style={{ color: "var(--greenColor)" }}
          />{" "}
          {/* Generic coding icon for FullStack link */}
        </a>
      </div>
    </div>
  );
}

// Export the AboutMe component so it can be used in other parts of the app
export default AboutMe;
