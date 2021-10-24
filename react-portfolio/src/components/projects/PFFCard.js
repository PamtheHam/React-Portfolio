import React from "react";

const PFFCard = () => {
  return (
    <div class="row">
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img
              src="./images/PFF.png"
              alt="Project Platonic Friends Forever"
            />
          </div>
          <div class="card-content">
            <p class="center-align">
              A simple way to meet like-minded people in your area, PFF matches
              people based on their shared interests. Whether you like to attend
              major-league baseball games or play video games, this full-stack
              application helps you find your Platonic Friends Forever. (Still
              in progress!)
            </p>
          </div>
          <div class="card-action hoverable center-align">
            <a href="https://pfforever.herokuapp.com">
              Platonic Friends Forever on Heroku
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PFFCard;
