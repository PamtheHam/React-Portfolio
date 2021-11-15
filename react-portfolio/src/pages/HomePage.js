import React from "react";

const HomePage = () => {
  return (
    <main>
      <p className="nav-link">Pamela Hammond</p>
      <div className="name-card">
        <div className="headshot-card">
          <img
            src={process.env.PUBLIC_URL + "/images/PamelaHammond2.jpeg"}
            className="headshot"
            alt="Pamela Hammond"
          />
        </div>

        <div className="name-div">
          <h5>Hello, my name is Pamela Hammond.</h5>
          <h5>Full Stack Web Developer</h5>
          <button className="button">
            <a
              href="../../images/PamelaHammondResumePDF.pdf"
              download
              className="home-button"
            >
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
