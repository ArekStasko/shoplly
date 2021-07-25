import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
          <div className="contact__login-data">
            <button
              onClick={() =>
                this.setState({ registerStep: this.state.registerStep - 1 })
              }
            >
              wcześniej
            </button>
          </div>
        ) : (
          <div className="register__login-data">
            <form
              className="register__login-data--form"
              onSubmit={() =>
                this.setState({ registerStep: this.state.registerStep + 1 })
              }
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
