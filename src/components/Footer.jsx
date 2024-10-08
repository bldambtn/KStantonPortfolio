// Import React to use JSX
import React from "react";
// Import Onsen UI icons
import { Icon } from "react-onsenui"; 

// Define the Footer component, which displays the footer with social links
function Footer() {
  return (
    <footer>
      {/* Social media icons with links */}
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <a
          href="https://www.linkedin.com/in/krystalstanton/"
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
          href="https://github.com/bldambtn"
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
          href="https://www.instagram.com/burrowmenag/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="fa-instagram"
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
