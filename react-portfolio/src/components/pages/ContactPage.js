import React from "react";
import "materialize-css";

const ContactPage = () => {
  return (
    <div>
      <div className="row-auth-wrapper">
        <div className="form-wrapper z-depth-3">
          <form id="create-account-form" className="form">
            <h5 className="center-align form-header">Contact Me</h5>
            <div className="input-field">
              <input
                id="first-name"
                type="text"
                className="validate"
                placeholder="First Name"
                required
              ></input>
              <label for="first-name"></label>
            </div>
            <div className="input-field">
              <input
                id="last-name"
                type="text"
                className="validate"
                placeholder="Last Name"
              ></input>
              <label for="last-name"></label>
            </div>
            <div className="input-field">
              <input
                id="email"
                type="email"
                className="validate"
                placeholder="Email"
                required
              ></input>
              <label for="email"></label>
            </div>
            <div className="input-field">
              <input
                id="message"
                type="text"
                className="validate"
                placeholder="Message"
                required
              ></input>
              <label for="password"></label>
            </div>
            <button
              id="create-account-button"
              className="waves-effect btn submit-button center-align"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
