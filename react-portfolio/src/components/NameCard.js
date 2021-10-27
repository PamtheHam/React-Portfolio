import React from "react";

const NameCard = () => {
  return (
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
            href="../images/PamelaHammondResume.pdf"
            download
            className="home-button"
          >
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default NameCard;
