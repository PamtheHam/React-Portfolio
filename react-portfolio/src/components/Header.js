import React from "react";

const Header = () => {
  return (
    <header class="header">
      <nav class="navbar">
        <div class="nav-wrapper">
          <a href="#header-name" id="header-name" class="nav-link left">
            PCH
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a class="nav-link" href="./index.html">
                Home
              </a>
            </li>
            <li>
              <a class="nav-link" href="./bio.html">
                About
              </a>
            </li>
            <li>
              <a class="nav-link" href="https://github.com/PamtheHam">
                GitHub
              </a>
            </li>
            <li>
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
