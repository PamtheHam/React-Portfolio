import React from "react";

const Footer = () => {
  return (
    <footer class="footer">
      <div>
        <h2 class="nav-link">Contact Me</h2>
        <div class="icon-size">
          <a href="tel:816-678-1651">
            <span class="icon">
              <i class="fas fa-phone"></i>
            </span>
          </a>
        </div>

        <div class="icon-size">
          <a href="mailto:hammondpamelac@gmail.com">
            <span class="icon">
              <i class="fas fa-at"></i>
            </span>
          </a>
        </div>

        <div class="icon-size">
          <a href="https://github.com/PamtheHam">
            <span class="icon">
              <i class="fab fa-github"></i>
            </span>
          </a>
        </div>

        <div class="icon-size">
          <a href="https://www.linkedin.com/in/pamelahammond94/">
            <span class="icon">
              <i class="fab fa-linkedin-in"></i>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
