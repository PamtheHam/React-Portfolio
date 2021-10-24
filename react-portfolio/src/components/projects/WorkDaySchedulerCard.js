import React from "react";

const WorkDaySchedulerCard = () => {
  return (
    <div class="row">
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            {/* TO DO: change image of project */}
            <img src="./images/SkyGazer.png" alt="Project Work Day Scheduler" />
          </div>
          <div class="card-content">
            <p class="center-align">
              In this project, I modified starter code on a simple calendar
              application that allows a user to save events for each hour of the
              standard work day. This app will run in the browser and feature
              dynamically updated HTML and CSS powered by jQuery and Bootstrap.
              When the user interacts with the page, they can input text into a
              timeblock which will save the input and hour of the timeblock in
              local storage. Each timeblock is color coded so that past hours
              are grey, present hours are red, and future hours are green.
            </p>
          </div>
          <div class="card-action hoverable center-align">
            <a href="https://pamtheham.github.io/Work-Day-Scheduler/">
              Work Day Scheduler on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDaySchedulerCard;
