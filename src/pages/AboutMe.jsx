// Import React to use JSX
import React from "react";

// Define the AboutMe component, which displays personal information
function AboutMe() {
  return (
    <div className="aboutme">
      {/* Heading for the About Me section */}
      <h1>About Me</h1>

      {/* Add a headshot or avatar below the header */}
      <img
        src="/me.jpg"
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
        and outcomes.
      </p>
      <p>
        I view technology as an art form—a creative and analytical process that,
        when executed correctly, results in seamless user experiences. My
        interest in automation and test-driven development allows me to reduce
        repetitive tasks while maintaining the highest standards of quality.
      </p>
      <p>
        My certifications include ISTQB Foundation Level, and I’ve completed
        courses in CSS, HTML, Vlocity Platform Foundations, and Transact-SQL,
        ensuring I stay up-to-date with the latest technologies and
        methodologies. I’m always looking to expand my skill set, particularly
        in the realms of automation and test-driven development.
      </p>
    </div>
  );
}

// Export the AboutMe component so it can be used in other parts of the app
export default AboutMe;
