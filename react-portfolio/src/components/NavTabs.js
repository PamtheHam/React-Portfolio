import React from "react";
import "materialize-css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
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
              className={currentPage === "Home" ? "nav-link" : "nav-link"}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={currentPage === "About" ? "nav-link" : "nav-link"}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={currentPage === "Portfolio" ? "nav-link" : "nav-link"}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={currentPage === "Contact" ? "nav-link" : "nav-link"}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
