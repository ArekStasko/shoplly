import React from "react";
import { RegisterAdressData } from "../data/login_slides";
import PlacePicker from "../components/placePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      registerStep: 0,
      password: "",
      nickname: "",
      contact: {
        number: "",
        email: "",
        province: "Province",
        city: "",
      },
    };
    this.loginDataWrapper = React.createRef(null);
    this.registerDataWrapper = React.createRef(null);
  }

  componentDidMount() {
    const loginData = this.loginDataWrapper.current;
    gsap.set(loginData, { autoAlpha: 0 });
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.fromTo(
      loginData,
      { x: "-=300" },
      { duration: 1, x: "+=300", autoAlpha: 1 }
    );
  }

  provinceSelect = (e) => {
    this.setState({
      contact: {
        ...this.state.contact,
        province: e.target.value,
        city: RegisterAdressData[0][e.target.value][0],
      },
    });
  };

  citySelect = (e) => {
    this.setState({
      contact: { ...this.state.contact, city: e.target.value },
    });
  };

  render() {
    return (
      <div className="register">
        {this.state.registerStep === 1 ? (
          <div
            ref={this.registerDataWrapper}
            className="register__contact-data"
          >
            <form onSubmit={e => {e.preventDefault(); console.log(this.state)}} className="register__contact-data--form">
              <div>
                <label htmlFor="register-number">Your number</label>
                <input id="register-number" type="number" />
              </div>
              <div>
                <label htmlFor="register-email">Your email</label>
                <input id="register-email" type="text" />
              </div>
              <PlacePicker contact={this.state.contact} selectProvince={this.provinceSelect} selectCity={this.citySelect} />
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
          <div ref={this.loginDataWrapper} className="register__login-data">
            <form
              className="register__login-data--form"
              onSubmit={(e) => {
                e.preventDefault();
                this.setState({ registerStep: this.state.registerStep + 1 });
              }}
            >
              <div>
                <label htmlFor="register-nick">Nickname</label>
                <input id="register-nick" type="text" />
              </div>
              <div>
                <label htmlFor="register-password">Password</label>
                <input id="register-password" type="text" />
              </div>
              <div>
                <label htmlFor="register-repPassword">
                  Repeat the password
                </label>
                <input id="register-repPassword" type="text" />
              </div>
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
