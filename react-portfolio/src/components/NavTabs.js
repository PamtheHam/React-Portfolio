import React from "react";
import "materialize-css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-wrapper">
          <a href="#header-name" id="header-name" className="nav-link left">
            PCH
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <a
                href="#home"
                onClick={() => handlePageChange("Home")}
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={currentPage === "Home" ? "nav-link" : "nav-link"}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === "About" ? "nav-link" : "nav-link"}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => handlePageChange("Projects")}
                // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === "Projects" ? "nav-link" : "nav-link"}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === "Contact" ? "nav-link" : "nav-link"}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavTabs;
