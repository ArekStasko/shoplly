import React from "react";
import { loginText } from "../data/login_slides";
import gsap from 'gsap'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      textCount: 0,
    };
    this.wrapperRef = React.createRef(null);
  }

  slideTimer = () => setInterval(() => {
    if (this.state.textCount === loginText.length - 1) {
      this.setState({ textCount: 0 });
    } else {
      this.setState({ textCount: this.state.textCount + 1 });
    }
  }, 3000);

  componentDidMount() {
  this.slideTimer()

  const [description, login] = this.wrapperRef.current.children
  gsap.set([description, login], {autoAlpha: 0})
  const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}})

  tl.fromTo(description, {x: '-=300'}, {duration:1, x: '+=300', autoAlpha: 1})
    .fromTo(login, {x: '-=200'}, {duration:1.1, x: '+=200', autoAlpha: 1})
  }

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
          <form className="login__form--inputs">
            <label htmlFor="username-login">Username</label>
            <input id="username-login" type="text" />
            <label htmlFor="password-login">Password</label>
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
