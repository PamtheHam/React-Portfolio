import React from "react";

const NoteTakerCard = () => {
  return (
    <div class="row">
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img
              src="./images/ExpressNoteTaker.png"
              alt="Project Express Note Taker"
            />
          </div>
          <div class="card-content">
            <p class="center-align">
              Created using Express.js, in this project I refactored existing
              code to save and retrieve note data from a JSON file. Use this
              application to create and save notes so that you can organize your
              thoughts and keep track of tasks that you need to accomplish!
            </p>
          </div>
          <div class="card-action hoverable center-align">
            <a href="https://github.com/PamtheHam/Express-Note-Taker">
              Express Note Taker on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteTakerCard;
