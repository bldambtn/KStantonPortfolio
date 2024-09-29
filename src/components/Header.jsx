import React from "react"; //The warning you're seeing about React being defined but never used is a common one in React applications, especially with the introduction of React 17. In React 17 and later, you no longer need to import React in every file that uses JSX, as the JSX transform automatically imports it for you.

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
