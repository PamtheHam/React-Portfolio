import React from "react";

const NameCard = () => {
  return (
    <div>
      <div class="row">
        <div class="col s6">
          <img
            src="./images/Pamela Hammond 2.jpeg"
            class="headshot center-align"
            alt="Photo of Pamela Hammond"
          />
        </div>

        <div class="col s6 name-div">
          <h5>Hello, my name is Pamela Hammond.</h5>
          <h5>Full Stack Web Developer</h5>
        </div>
      </div>
    </div>
  );
};

export default NameCard;
