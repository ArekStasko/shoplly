import React from "react";
import { connect } from "react-redux";
import { addProduct } from "../actions/index";
import { ProductsCategories } from "../data/login_slides";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  emailValidation,
  phoneNumberValidation,
  requiredValue,
  imageValidation,
} from "../utilities/validation";
import styled from "styled-components";
import { Redirect } from "react-router";
import Loading from "../components/loading";

const AddedImages = styled.div`
  justify-content: ${({ images }) => (images ? "flex-start" : "center")};
`;

class AddProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {
        title: "",
        category: "",
        subCategory: "",
        condition: "new",
        phoneNumber: this.props.user.phonenumber,
        userEmail: this.props.user.email,
        place: this.props.user.place,
        userName: this.props.user.username,
        description: "",
        ship: false,
        negotiations: false,
        price: "",
      },
      images: [],
    };
    this.imagesInput = React.createRef(null);
  }

  imageUpload = (e) => {
    const uploadImages = e.target.files;
    if (imageValidation(uploadImages)) {
      this.setState({
        images: [...this.state.images, uploadImages[0]],
      });
    }
    e.target.value = "";
  };

  imageDelete = (e, elementIndex) => {
    let newArray = this.state.images.filter(
      (item, index) => index !== elementIndex
    );
    this.setState({
      images: newArray,
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

  submitFunction = (e) => {
    e.preventDefault();
    const product = this.state;
    if (
      requiredValue(
        product.details.description,
        product.details.place,
        product.details.subCategory,
        product.details.category
      ) &&
      emailValidation(this.state.details.userEmail) &&
      phoneNumberValidation(this.state.details.phoneNumber) &&
      this.state.images.length <= 3
    ) {
      const details = Object.keys(product.details);
      const data = new FormData();
      for (let i = 0; i < product.images.length; i++) {
        data.append("images", product.images[i]);
      }
      for (let i = 0; i < details.length; i++) {
        data.append(details[i], product.details[details[i]]);
      }
      this.props.addProduct(data, this.props.user._id);
    }
  };

  render() {
    if (this.props.redirect) {
      return <Redirect to="/products" />;
    }

    return (
      <main className="addForm">
        <section className="addForm__images">
          <input
            id="add-product-image"
            type="file"
            onChange={(e) => this.imageUpload(e)}
            ref={this.imagesInput}
            multiple
          />
          <label className="addForm__add-image" htmlFor="add-product-image">
            <span className="addForm__add-image-icon">
              <FontAwesomeIcon icon={faImages} />
            </span>
            <span>Choose images</span>
          </label>
          <AddedImages
            images={this.state.images.length > 0}
            className="addForm__added-images"
          >
            {this.state.images.length > 0 ? (
              this.state.images.map((item, index) => (
                <div key={index}>
                  <span onClick={(e) => this.imageDelete(e, index)}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                  <img
                    src={URL.createObjectURL(item)}
                    alt={item.name}
                    key={index}
                  />
                </div>
              ))
            ) : (
              <p>No photos</p>
            )}
          </AddedImages>
        </section>
        
        <section className="addForm__wrapper">
          <form
            onSubmit={(e) => this.submitFunction(e)}
            className="addForm__form"
          >
            <section className="addForm__form-section">
              <article className="addForm__form-title">
                <div>
                  <label htmlFor="product-title">Product title:</label>
                  <input
                    onChange={(e) => this.setInfo(e)}
                    name="title"
                    className="input"
                    id="product-title"
                    type="text"
                    value={this.state.details.title}
                  />
                </div>
                <div>
                  <label htmlFor="product-price">Product price:</label>
                  <input
                    onChange={(e) => this.setInfo(e)}
                    name="price"
                    className="input input--number"
                    id="product-price"
                    type="number"
                    value={this.state.details.price}
                  />
                </div>
              </article>
              <article className="addForm__form-description">
                <label className="label" htmlFor="product-description">
                  Product description
                </label>
                <textarea
                  onChange={(e) => this.setInfo(e)}
                  name="description"
                  id="product-description"
                  value={this.state.details.description}
                ></textarea>
              </article>
              <article className="addForm__form-contact">
                <div>
                  <label className="label" htmlFor="product_phone-number">
                    Phone number to contact
                  </label>
                  <input
                    name="phoneNumber"
                    onChange={(e) => this.setInfo(e)}
                    value={this.state.details.phoneNumber}
                    className="input"
                    id="product_phone-number"
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="product_email">Email to contact</label>
                  <input
                    onChange={(e) => this.setInfo(e)}
                    value={this.state.details.userEmail}
                    name="email"
                    className="input"
                    id="product_email"
                    type="text"
                  />
                </div>
              </article>
            </section>

            <section className="addForm__form-section">
              <article className="addForm__form-place">
                <label className="label" htmlFor="product-place">
                  Place of product
                </label>
                <input
                  onChange={(e) => this.setInfo(e)}
                  value={this.state.details.place}
                  name="place"
                  className="input"
                  id="product-place"
                  type="text"
                />
              </article>
              <article className="addForm__form-category">
                <div>
                  <label className="label" htmlFor="product-category">
                    Product category
                  </label>
                  <select
                    onChange={(e) => {
                      this.setState({
                        details: {
                          ...this.state.details,
                          category: e.target.value,
                          subCategory: ProductsCategories[0][e.target.value][0],
                        },
                      });
                    }}
                    value={this.state.details.category}
                    className="select"
                    id="product-category"
                  >
                    {Object.keys(ProductsCategories[0]).map(item => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label" htmlFor="product-subcategory">
                    Product subcategory
                  </label>
                  <select
                    onChange={(e) => {
                      this.setState({
                        details: {
                          ...this.state.details,
                          subCategory: e.target.value,
                        },
                      });
                    }}
                    value={this.state.details.subCategory}
                    className="select"
                    id="product-subcategory"
                  >
                    {this.state.details.category ? (
                      ProductsCategories[0][this.state.details.category].map(
                        item => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        )
                      )
                    ) : (
                      <option>First choose category</option>
                    )}
                  </select>
                </div>
              </article>
              <article className="addForm__form-additional">
                <div>
                  <label className="label" htmlFor="product-ship">
                    Shipment
                  </label>
                  <input
                    onChange={e =>
                      this.setState({
                        details: {
                          ...this.state.details,
                          ship: e.target.checked,
                        },
                      })
                    }
                    id="product-ship"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label className="label" htmlFor="product-negotiation">
                    Negotiations
                  </label>
                  <input
                    onChange={(e) =>
                      this.setState({
                        details: {
                          ...this.state.details,
                          negotiations: e.target.checked,
                        },
                      })
                    }
                    name="negotiations"
                    id="product-negotiation"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label className="label" htmlFor="product-condition">
                    Product condition
                  </label>
                  <select
                    onChange={e =>
                      this.setState({
                        details: {
                          ...this.state.details,
                          condition: e.target.value,
                        },
                      })
                    }
                    value={this.state.details.condition}
                    className="select"
                    id="product-condition"
                  >
                    <option value="new">New</option>
                    <option value="damaged">Damaged</option>
                    <option value="used">Used</option>
                  </select>
                </div>
              </article>
              {this.props.loading ? (
                <Loading />
              ) : (
                <button className="btn btn--background btn--full" type="submit">
                  Add Product
                </button>
              )}
            </section>
          </form>
        </section>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addProduct: (data, userID) => dispatch(addProduct(data, userID)),
});

const mapStateToProps = ({ user, redirect, loading }) => ({
  user,
  redirect,
  loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProducts);
