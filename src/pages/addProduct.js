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
} from "../validation";
import styled from "styled-components";

const AddedImages = styled.div`
  justify-content: ${({ images }) => (images ? "flex-start" : "center")};
`;

class AddProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {
        category: "",
        subCategory: "",
        condition: "",
        phoneNumber: this.props.user.phoneNumber,
        email: this.props.user.email,
        place: this.props.user.place,
        description: "",
        shipment: false,
        negotiations: false,
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
    const data = this.state;
    if (
      requiredValue(
        data.details.description,
        data.details.place,
        data.details.subCategory,
        data.details.category
      ) &&
      emailValidation(this.state.details.email) &&
      phoneNumberValidation(this.state.details.phoneNumber) &&
      this.state.images.length <= 3
    ) {
      this.props.addProduct(this.state.details, this.state.images);
    }
  };

  render() {
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
              <div className="addForm__form-title">
                <label htmlFor="product-title">Product title:</label>
                <input
                  onChange={(e) => this.setInfo(e)}
                  name="title"
                  className="input"
                  id="product-title"
                  type="text"
                />
              </div>
              <div className="addForm__form-description">
                <label className="label" htmlFor="product-description">
                  Product description
                </label>
                <textarea
                  onChange={(e) => this.setInfo(e)}
                  name="description"
                  id="product-description"
                ></textarea>
              </div>
              <div className="addForm__form-contact">
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
                    value={this.state.details.email}
                    name="email"
                    className="input"
                    id="product_email"
                    type="text"
                  />
                </div>
              </div>
            </section>

            <section className="addForm__form-section">
              <div className="addForm__form-place">
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
              </div>
              <div className="addForm__form-category">
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
                    {Object.entries(ProductsCategories[0]).map((item) => (
                      <option key={item[0]} value={item[0]}>
                        {item[0]}
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
                        (item) => (
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
              </div>
              <div className="addForm__form-additional">
                <div>
                  <label className="label" htmlFor="product-ship">
                    Shipment
                  </label>
                  <input
                    onChange={(e) =>
                      this.setState({
                        details: {
                          ...this.state.details,
                          shipment: e.target.checked,
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
                    onChange={(e) =>
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
              </div>
              <button className="btn btn-background" type="submit">
                Buy
              </button>
            </section>
          </form>
        </section>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addProduct: (details, images) => dispatch(addProduct(details, images)),
});

const mapStateToProps = ({ userExample }) => ({ userExample });

export default connect(mapStateToProps, mapDispatchToProps)(AddProducts);
