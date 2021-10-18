import React from "react";

const Footer = () => {
  return (
    <footer class="page-footer footer" id="contact">
      <div class="container">
        <div class="row">
          <h2 class="nav-link">Contact Me</h2>

          <div class="col s3">
            <a href="tel:816-678-1651">
              <span class="icon">
                <i class="fas fa-phone icon-size"></i>
              </span>
            </a>
          </div>

          <div class="col s3">
            <a href="mailto:hammondpamelac@gmail.com">
              <span class="icon">
                <i class="fas fa-at icon-size"></i>
              </span>
            </a>
          </div>

          <div class="col s3">
            <a href="https://github.com/PamtheHam">
              <span class="icon">
                <i class="fab fa-github icon-size"></i>
              </span>
            </a>
          </div>

          <div class="col s3">
            <a href="https://www.linkedin.com/in/pamelahammond94/">
              <span class="icon">
                <i class="fab fa-linkedin-in icon-size"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
