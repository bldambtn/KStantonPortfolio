// Import React to use JSX
import React from "react";
import { Icon } from "react-onsenui"; // Import Onsen UI icons

// Define the Footer component, which displays the footer with social links
function Footer() {
  return (
    <footer>
      {/* Social media icons with links */}
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "15px" }}
        >
          <Icon
            icon="fa-linkedin"
            size={30}
            style={{ color: "var(--creamColor)" }}
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
            size={30}
            style={{ color: "var(--creamColor)" }}
          />
        </a>
        <a
          href="https://fullstack.com/your-fullstack-profile" // Replace with your actual FullStack link
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="fa-code"
            size={30}
            style={{ color: "var(--creamColor)" }}
          />
        </a>
      </div>

      <p>© 2024 Krystal Stanton. All rights reserved.</p>
    </footer>
  );
}

// Export the Footer component so it can be used in other parts of the app
export default Footer;
