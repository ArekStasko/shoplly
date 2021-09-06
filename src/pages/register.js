import React from "react";
import { RegisterAdressData } from "../data/login_slides";
import PlacePicker from "../components/placePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { register } from "../actions/index";
import {
  emailValidation,
  phoneNumberValidation,
  repeatPassword,
  requiredValue,
  imageValidation,
} from "../validation";
import {
  faArrowRight,
  faArrowLeft,
  faCheck,
  faUser,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      registerStep: 0,
      password: "",
      repeatPassword: "",
      nickname: "",
      contact: {
        number: "",
        email: "",
        province: "",
        city: "",
      },
      image: [],
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

  imageUpload = (e) => {
    const uploadImage = e.target.files;
    if (imageValidation(uploadImage)) {
      this.setState({
        image: [...this.state.image, ...Object.values(uploadImage)],
      });
    }
    e.target.value = "";
  };

  imageDelete = (e, elementIndex) => {
    let newArray = this.state.image.filter(
      (item, index) => index !== elementIndex
    );
    this.setState({
      image: newArray,
    });
  };

  setInfo = (e) => {
    const element = e.target;
    this.setState({
      contact: {
        ...this.state.contact,
        [element.name]: element.value,
      },
    });
  };

  setPass = (e) => {
    const element = e.target;
    this.setState({
      [element.name]: element.value,
    });
  };

  registerSubmit = (e) => {
    e.preventDefault();
    const data = this.state;
    if (
      requiredValue(
        data.nickname,
        data.password,
        data.contact.city,
        data.contact.province
      ) &&
      emailValidation(data.contact.email) &&
      phoneNumberValidation(data.contact.number) &&
      repeatPassword(data.password, data.repeatPassword)
    ) {
      this.props.register(
        data.nickname,
        data.password,
        data.contact,
        data.image
      );
    }
  };

  render() {
    return (
      <div className="register">
        <div className="register__photos">
          <input
            id="add-product-image"
            type="file"
            onChange={(e) => this.imageUpload(e)}
            ref={this.imageInput}
          />
          {this.state.image.length > 0 ? (
            this.state.image.map((item, index) => (
              <div className="register__photos--image" key={index}>
                <div>
                  <span onClick={(e) => this.imageDelete(e, index)}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                  <img
                    src={URL.createObjectURL(item)}
                    alt={item.name}
                    key={index}
                  />
                </div>
              </div>
            ))
          ) : (
            <label
              className="register__photos--addPhoto"
              htmlFor="add-product-image"
            >
              <span className="register__photos--addPhoto--icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span>Choose image</span>
            </label>
          )}
        </div>
        {this.state.registerStep === 1 ? (
          <div
            ref={this.registerDataWrapper}
            className="register__contact-data"
          >
            <form
              onSubmit={(e) => this.registerSubmit(e)}
              className="register__contact-data--form"
            >
              <div>
                <label htmlFor="register-number">Your number</label>
                <input
                  value={this.state.contact.number}
                  onChange={(e) => this.setInfo(e)}
                  name="number"
                  id="register-number"
                  type="number"
                />
              </div>
              <div>
                <label htmlFor="register-email">Your email</label>
                <input
                  value={this.state.contact.email}
                  onChange={(e) => this.setInfo(e)}
                  name="email"
                  id="register-email"
                  type="text"
                />
              </div>
              <PlacePicker
                placeData={this.state.contact}
                selectProvince={this.provinceSelect}
                selectCity={this.citySelect}
              />
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
                <input
                  value={this.state.nickname}
                  onChange={(e) => this.setPass(e)}
                  name="nickname"
                  id="register-nick"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="register-password">Password</label>
                <input
                  value={this.state.password}
                  onChange={(e) => this.setPass(e)}
                  name="password"
                  id="register-password"
                  type="password"
                />
              </div>
              <div>
                <label htmlFor="register-repPassword">
                  Repeat the password
                </label>
                <input
                  value={this.state.repeatPassword}
                  onChange={(e) => this.setPass(e)}
                  name="repeatPassword"
                  id="register-repPassword"
                  type="password"
                />
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

const mapDispatchToProps = (dispatch) => ({
  register: (username, password, contact, image) =>
    dispatch(register(username, password, contact, image)),
});

export default connect(null, mapDispatchToProps)(Register);
