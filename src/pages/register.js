import React from "react";
import { RegisterAdressData } from "../data/login_slides";
import PlacePicker from "../components/placePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { register, setFlash } from "../actions/index";
import {
  emailValidation,
  phoneNumberValidation,
  repeatPassword,
  requiredValue,
  imageValidation,
} from "../utilities/validation";
import {
  faArrowRight,
  faArrowLeft,
  faCheck,
  faUser,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Loading from "../components/loading";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      registerStep: 0,
      details:{
        password: "",
        repeatPassword: "",
        username: "",
        phonenumber: "",
        email: "",
        place: "",
        city: "",
      },
      image: [],
    };
  }

  placeSelect = (e) => {
    this.setState({
      details: {
        ...this.state.details,
        place: e.target.value,
        city: RegisterAdressData[0][e.target.value][0],
      },
    });
  };

  citySelect = (e) => {
    this.setState({
      details: { ...this.state.details, city: e.target.value },
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
      details: {
        ...this.state.details,
        [element.name]: element.value,
      },
    });
  };

  registerSubmit = (e) => {
    e.preventDefault();
    const userData = this.state.details;
    if (
      requiredValue(
        userData.username,
        userData.password,
        userData.city,
        userData.place
      ) &&
      emailValidation(userData.email, this.props.setFlash) &&
      phoneNumberValidation(userData.phonenumber, this.props.setFlash) &&
      repeatPassword(userData.password, userData.repeatPassword, this.props.setFlash)
    ) {

      const data = new FormData()
      data.append('image', this.state.image[0])
      const details = Object.keys(this.state.details);
      for (let i = 0; i < details.length; i++) {
        data.append(details[i], this.state.details[details[i]]);
      }
      this.props.register(data);
    } 
  };

  render() {

    if(this.props.user){
      return <Redirect to='/' />
    }

    return (
      <main className="register">
        <section className="register__photos">
          <input
            id="add-product-image"
            type="file"
            name='image'
            onChange={e => this.imageUpload(e)}
            ref={this.imageInput}
          />
          {this.state.image.length > 0 ? (
            this.state.image.map((item, index) => (
              <div className="register__image" key={index}>
                <div>
                  <span onClick={e => this.imageDelete(e, index)}>
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
            <label className="register__add-photo" htmlFor="add-product-image">
              <span className="register__photo-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span>Choose image</span>
            </label>
          )}
        </section>
        {this.state.registerStep === 1 ? (
          <section className="register__contact-wrapper">
            <h2>Register your account</h2>
            <form
              onSubmit={e => this.registerSubmit(e)}
              className="register__contact-form"
            >
            {this.props.loading ? (
              <Loading />
            ) : (
              <>
              <div>
                <label className="label" htmlFor="register-number">
                  Your number
                </label>
                <input
                  className="input input--full input--number"
                  value={this.state.details.phonenumber}
                  onChange={(e) => this.setInfo(e)}
                  name="phonenumber"
                  id="register-number"
                  type="number"
                />
              </div>
              <div>
                <label className="label" htmlFor="register-email">
                  Your email
                </label>
                <input
                  className="input input--full"
                  value={this.state.details.email}
                  onChange={(e) => this.setInfo(e)}
                  name="email"
                  id="register-email"
                  type="text"
                />
              </div>
              <PlacePicker
                placeData={this.state.details}
                selectProvince={this.placeSelect}
                selectCity={this.citySelect}
              />
              <button className="btn btn--transparent btn--full" type="submit">
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button
                className="btn btn--background btn--full"
                onClick={() =>
                  this.setState({ registerStep: this.state.registerStep - 1 })
                }
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              </>
            )}
            </form>
          </section>
        ) : (
          <section className="register__login-wrapper">
            <h2>Register your account</h2>
            <form
              className="register__login-form"
              onSubmit={(e) => {
                e.preventDefault();
                this.setState({ registerStep: this.state.registerStep + 1 });
              }}
            >
              <div>
                <label className="label" htmlFor="register-nick">
                  Nickname
                </label>
                <input
                  value={this.state.details.username}
                  onChange={(e) => this.setInfo(e)}
                  className="input input--full"
                  name="username"
                  id="register-nick"
                  type="text"
                />
              </div>
              <div>
                <label className="label" htmlFor="register-password">
                  Password
                </label>
                <input
                  value={this.state.details.password}
                  onChange={(e) => this.setInfo(e)}
                  name="password"
                  className="input input--full"
                  id="register-password"
                  type="password"
                />
              </div>
              <div>
                <label className="label" htmlFor="register-repPassword">
                  Repeat the password
                </label>
                <input
                  value={this.state.details.repeatPassword}
                  onChange={e => this.setInfo(e)}
                  className="input input--full"
                  name="repeatPassword"
                  id="register-repPassword"
                  type="password"
                />
              </div>
              <button className="btn btn--background btn--full" type="submit">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>
            <div className="register__login">
              <p className="label">Already have account ?</p>
              <Link className="btn btn--transparent" to="/Login">
                Login
              </Link>
            </div>
          </section>
        )}
      </main>
    );
  }
}

const mapStateToProps = ({ user, loading }) => ({ user, loading });

const mapDispatchToProps = (dispatch) => ({
  register: (username, password, contact, image) =>
    dispatch(register(username, password, contact, image)),
  setFlash: message => dispatch(setFlash(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
