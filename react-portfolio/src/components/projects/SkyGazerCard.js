import React from "react";

const SkyGazerCard = () => {
  return (
    <div class="row">
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img src="./images/SkyGazer.png" alt="Project Sky Gazer" />
          </div>
          <div class="card-content">
            <p class="center-align">
              In this project, I and 3 individuals used Javascript, HTML, and
              CSS to create Sky Gazer. In Sky Gazer, the user will input a
              location and choose one satellite, among a list of satellites, and
              the site will return the time and dates for the next fly over for
              the course of the next seven days, and will pair with weather data
              to determine if the user will be able to see the satellite when it
              flies over in their chosen location.
            </p>
          </div>
          <div class="card-action hoverable center-align">
            <a href="https://pamtheham.github.io/Password-Generator/">
              Sky Gazer on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkyGazerCard;
