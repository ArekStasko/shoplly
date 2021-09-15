import React from "react";
import { loginText } from "../data/login_slides";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authenticate } from "../actions/index";
import { requiredValue } from "../utilities/validation";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      textCount: 0,
      username: "",
      password: "",
      intervalID: this.slideTimer,
    };
  }

  componentDidMount() {
    const slideTimer = setInterval(() => {
      if (this.state.textCount === loginText.length - 1) {
        this.setState({ textCount: 0 });
      } else {
        this.setState({ textCount: this.state.textCount + 1 });
      }
    }, 3000);
    this.setState({ intervalID: slideTimer });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }

  setPass = (e) => {
    const pass = e.target;
    this.setState({
      [pass.name]: pass.value,
    });
  };

  loginAction = (e) => {
    e.preventDefault();
    const data = this.state;
    if (requiredValue(data.password, data.username)) {
      this.props.authenticate(data.username, data.password);
    }
  };

  render() {
    return (
      <main className="login">
        <section className="login__description">
          <div className="login__slide">
            <div>
              <h2>{loginText[this.state.textCount].title}</h2>
              <p>{loginText[this.state.textCount].description}</p>
            </div>
            <img
              src={loginText[this.state.textCount].icon}
              alt="login slide icon"
            />
          </div>
        </section>
        <section className="login__form-wrapper">
          <h2>Login to your account</h2>
          <form onSubmit={(e) => this.loginAction(e)} className="login__form">
            <label className="label" htmlFor="username-login">
              Username
            </label>
            <input
              onChange={(e) => this.setPass(e)}
              value={this.state.username}
              name="username"
              className="input"
              id="username-login"
              type="text"
            />
            <label className="label" htmlFor="password-login">
              Password
            </label>
            <input
              onChange={(e) => this.setPass(e)}
              value={this.state.password}
              name="password"
              className="input"
              id="password-login"
              type="password"
            />
            <button className="btn btn--background" type="submit">
              Sign in
            </button>
          </form>
          <div className="login__register">
            <p className="label">Don't have account ?</p>
            <Link className="btn btn--transparent" to="/register">
              Register
            </Link>
          </div>
        </section>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  authenticate: (username, password) =>
    dispatch(authenticate(username, password)),
});

export default connect(null, mapDispatchToProps)(Login);
