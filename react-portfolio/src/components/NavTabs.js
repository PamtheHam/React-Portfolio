import React from "react";
import "materialize-css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar">
      <p className="nav-link">Pamela Hammond</p>
      <ul>
        <li>
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className="nav-link"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className="nav-link"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className="nav-link"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className="nav-link"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
