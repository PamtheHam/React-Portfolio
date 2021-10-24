import React from "react";

const ReactTaskTracker = () => {
  return (
    <div class="row">
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img
              src="./images/ReactTaskTracker.png"
              alt="Project React Task Tracker"
            />
          </div>
          <div class="card-content">
            <p class="center-align">
              This task tracker was created using React and is deployed on
              Heroku. This application allows a user to save the title and day
              and time of a task and select the option to set a reminder. If the
              user selects the option to set a reminder, their task is saved in
              the form with a green bar. If the user does not select the option
              to set a reminder, the task is saved in the form without a green
              bar.
            </p>
          </div>
          <div class="card-action hoverable center-align">
            <a href="https://pamtheham-task-tracker.herokuapp.com/">
              React Task Tracker on Heroku
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactTaskTracker;
