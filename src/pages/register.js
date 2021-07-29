import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      registerStep: 0,
      password: "",
      nickname: "",
      contact: {},
    };
  }

  render() {
    return (
      <div className="register">
        {this.state.registerStep === 1 ? (
          <div className="register__contact-data">
            <form className="register__contact-data--form">
              <label htmlFor="register-number">Your number</label>
              <input id="register-number" type="text" />
              <label htmlFor="register-email">Your email</label>
              <input id="register-email" type="text" />
              <div className="register__contact-data--form--place">
                <div>
                  <label htmlFor="register-adress">Choose your province</label>
                  <input id="register-adress" type="text" />
                </div>
                <div>
                  <label htmlFor="register-adress">Choose your city</label>
                  <input id="register-adress" type="text" />
                </div>
              </div>
              <button type="submit">
                <FontAwesomeIcon icon={faCheck} />
              </button>
            </form>
            <button
              className="register__contact-data--backBtn"
              onClick={() =>
                this.setState({ registerStep: this.state.registerStep - 1 })
              }
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </div>
        ) : (
          <div className="register__login-data">
            <form
              className="register__login-data--form"
              onSubmit={(e) => {
                e.preventDefault();
                this.setState({ registerStep: this.state.registerStep + 1 });
              }}
            >
              <label htmlFor="register-nick">Nickname</label>
              <input id="register-nick" type="text" />
              <label htmlFor="register-password">Password</label>
              <input id="register-password" type="text" />
              <label htmlFor="register-repPassword">Repeat the password</label>
              <input id="register-repPassword" type="text" />
              <button type="submit">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Register;
