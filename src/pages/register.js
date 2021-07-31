import React from "react";
import { RegisterAdressData } from "../data/login_slides";
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
      contact: {
        number: "",
        email: "",
        province: "Province",
        city: "",
      },
    };
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
    console.log(this.state.contact);
    return (
      <div className="register">
        {this.state.registerStep === 1 ? (
          <div className="register__contact-data">
            <form className="register__contact-data--form">
              <div>
                <label htmlFor="register-number">Your number</label>
                <input id="register-number" type="number" />
              </div>
              <div>
                <label htmlFor="register-email">Your email</label>
                <input id="register-email" type="text" />
              </div>
              <div className="register__contact-data--form--place">
                <div>
                  <label htmlFor="register_adress-province">
                    Choose your province
                  </label>
                  <select
                    onChange={(e) => this.provinceSelect(e)}
                    id="register_adress-province"
                  >
                    {Object.entries(RegisterAdressData[0]).map((item) => (
                      <option key={item[0]} value={item[0]}>
                        {item[0]}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="register_adress-city">Choose your city</label>
                  <select
                    onChange={(e) => this.citySelect(e)}
                    id="register_adress-city"
                  >
                    {RegisterAdressData[0][this.state.contact.province].map(
                      (item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      )
                    )}
                  </select>
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
