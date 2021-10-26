import React from "react";

const NameCard = () => {
  return (
    <div>
      <div className="row">
        <div className="col s6">
          <img
            src={process.env.PUBLIC_URL + "/images/PamelaHammond2.jpeg"}
            className="headshot"
            alt="Pamela Hammond"
          />
        </div>

        <div className="col s6 name-div">
          <h5>Hello, my name is Pamela Hammond.</h5>
          <h5>Full Stack Web Developer</h5>
        </div>
      </div>
    </div>
  );
};

export default NameCard;
