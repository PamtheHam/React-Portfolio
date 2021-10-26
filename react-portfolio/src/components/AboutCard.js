import React from "react";

const AboutCard = () => {
  return (
    <div>
      <div className="row">
        <div className="col s6">
          <img
            src={process.env.PUBLIC_URL + "/images/BaekbeomPark.jpeg"}
            className="about-img center-align"
            alt="Pamela Hammond in Baekbeom Park, Seoul South Korea"
          />
        </div>

        <div className="col s6">
          <h4>About Me</h4>
          <h6 className="about-paragraph">
            After working within technology in higher education, I developed an
            interest in programming and completed the University of North
            Carolina - Chapel Hill’s Coding Bootcamp. Full-stack web developer
            with experience working in student services within higher education
            and the full-stack of web development. With excellent attention to
            detail and organizational skills, I am dedicated to building
            original and efficient web applications from start to finish with
            proficient skills in HTML, CSS, and Javascript. I enjoy being
            challenged and working outside of my comfort zone. Looking for the
            perfect match with a company that will test and further my knowledge
            of web development.
          </h6>
          <br />
          <h6 className="about-paragraph">
            Outside of my professional roles, I enjoy traveling and exploring
            the world. My dream is to live and work abroad, so I can experience
            life from new perspectives. I enjoy spending time with my husband
            Chris, my long-haired chihuahua Rafa, and my chartreux cat Pusheen.
            I have a range of hobbies, including playing tennis, solving jigsaw
            and crossword puzzles, and learning new programming skills.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
