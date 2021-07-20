import React from "react";
import { loginText } from "../data/login_slides";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      textCount: 0,
    };
  }

  componentDidMount() {
    this.slideTimer = setInterval(() => {
      if (this.state.textCount === loginText.length - 1) {
        this.setState({ textCount: 0 });
      } else {
        this.setState({ textCount: this.state.textCount + 1 });
      }
    }, 3000);
  }

  render() {
    return (
      <div className="login">
        <div className="login__description">
          <div className="login__description--slide">
            <div>
              <h2>{loginText[this.state.textCount].title}</h2>
              <p>{loginText[this.state.textCount].description}</p>
            </div>
            <img
              src={loginText[this.state.textCount].icon}
              alt="login slide icon"
            />
          </div>
        </div>
        <div className="login__form">
          <h2>Login to your account</h2>
          <form className="login__form--inputs">
            <label for="username-login">Username</label>
            <input id="username-login" type="text" />
            <label for="password-login">Password</label>
            <input id="password-login" type="password" />
            <button>Sign in</button>
          </form>
          <div className="login__form--register">
            <p>Don't have account ?</p>
            <button>Register</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
