import React from "react";

const ReadMeGeneratorCard = () => {
  return (
    <div class="row">
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img
              src="./images/ReadMeGenerator.png"
              alt="Project README Generator"
            />
          </div>
          <div class="card-content">
            <p class="center-align">
              This is an application that uses the Inquirer NPM. The inquirer
              NPM utilizes the command line to prompt the user to answer
              questions. The README generator asks the user to input information
              about a project, and then the README generator creates a new
              README.md file and sticks the users input into that file.
            </p>
          </div>
          <div class="card-action hoverable center-align">
            <a href="https://github.com/PamtheHam/README-Generator">
              README Generator on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMeGeneratorCard;
