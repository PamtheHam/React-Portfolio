import React from "react";
import "materialize-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactPage = () => {
  return (
    <div>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <FontAwesomeIcon icon="user" />
              {/* figure out how to use fontawesome icons */}
              <input id="icon_prefix" type="text" class="validate" />
              <label for="icon_prefix">First Name</label>
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">phone</i>
              <input id="icon_telephone" type="tel" class="validate" />
              <label for="icon_telephone">Telephone</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
