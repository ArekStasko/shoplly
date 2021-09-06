import React from "react";
import { loginText } from "../data/login_slides";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authenticate } from '../actions/index'
import { requiredValue } from "../validation";
import gsap from "gsap";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      textCount: 0,
      username: "",
      password: "",
    };
    this.wrapperRef = React.createRef(null);
  }

  slideTimer = () =>
    setInterval(() => {
      if (this.state.textCount === loginText.length - 1) {
        this.setState({ textCount: 0 });
      } else {
        this.setState({ textCount: this.state.textCount + 1 });
      }
    }, 3000);

  componentDidMount() {
    this.slideTimer();

    const [description, login] = this.wrapperRef.current.children;
    gsap.set([description, login], { autoAlpha: 0 });
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.fromTo(
      description,
      { x: "-=300" },
      { duration: 1, x: "+=300", autoAlpha: 1 }
    ).fromTo(
      login,
      { x: "-=200" },
      { duration: 1.1, x: "+=200", autoAlpha: 1 }
    );
  }

  setPass = e => {
    const pass = e.target;
    this.setState({
      [pass.name]: pass.value,
    });
  };

  loginAction = e => {
    e.preventDefault();
    const data = this.state
    if(requiredValue(data.password, data.username)) {
      this.props.authenticate(data.username, data.password)
    }
  };

  render() {
    return (
      <div ref={this.wrapperRef} className="login">
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
          <form
            onSubmit={(e) => this.loginAction(e)}
            className="login__form--inputs"
          >
            <label htmlFor="username-login">Username</label>
            <input
              onChange={(e) => this.setPass(e)}
              value={this.state.username}
              name="username"
              id="username-login"
              type="text"
            />
            <label htmlFor="password-login">Password</label>
            <input
              onChange={(e) => this.setPass(e)}
              value={this.state.password}
              name="password"
              id="password-login"
              type="password"
            />
            <button type="submit">Sign in</button>
          </form>
          <div className="login__form--register">
            <p>Don't have account ?</p>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  authenticate: (username, password) => dispatch(authenticate(username, password))
 })

export default connect(null, mapDispatchToProps)(Login);
