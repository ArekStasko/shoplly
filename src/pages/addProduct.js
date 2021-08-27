import React from "react";
import { ProductsCategories } from "../data/login_slides";

class AddProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "",
      subCategory: "",
      condition: "",
      images: [],
    };
  }

  imageUpload = e => {
      const uploadImages =  e.target.files
      this.setState({
          images: [...this.state.images, ...Object.values(uploadImages) ]
      })
  }

  render() {
console.log(this.state.images)
    return (
      <div className="addForm">
        <div className="addForm__photos">
            <input type='file' onChange={e=>this.imageUpload(e)} multiple />
        </div>
        <div className="addForm__wrapper">
          <form className="addForm__wrapper--form">
            <div className="addForm__wrapper--form--title">
              <label htmlFor="product-title">Product title:</label>
              <input className="basic-input" id="product-title" type="text" />
            </div>
            <div className="addForm__wrapper--form--place">
              <div>
                <label htmlFor="product-place">Place of product</label>
                <input className="basic-input" id="product-place" type="text" />
              </div>
              <div>
                <label htmlFor="product_place-checkbox">
                  Product place is the same as yours :
                </label>
                <input id="product_place-checkbox" type="checkbox" />
              </div>
            </div>
            <div className="addForm__wrapper--form--category">
              <div>
                <label htmlFor="product-category">Product category</label>
                <select
                  onChange={(e) => {
                    this.setState({
                      category: e.target.value,
                    });
                  }}
                  value={this.state.category}
                  className="basic-select"
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
                <label htmlFor="product-subcategory">Product subcategory</label>
                <select
                  onChange={(e) => {
                    this.setState({
                      subCategory: e.target.value,
                    });
                  }}
                  value={this.state.subCategory}
                  className="basic-select"
                  id="product-subcategory"
                >
                  {this.state.category ? (
                    ProductsCategories[0][this.state.category].map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))
                  ) : (
                    <option>First choose category</option>
                  )}
                </select>
              </div>
            </div>
            <div className="addForm__wrapper--form--additional">
              <div>
                <label htmlFor="product-ship">Shimpent</label>
                <input id="product-ship" type="checkbox" />
              </div>
              <div>
                <label htmlFor="product-negotiation">Negotiations</label>
                <input id="product-negotiation" type="checkbox" />
              </div>
              <div>
                <label htmlFor="product-condition">Product condition</label>
                <select
                  onChange={(e) =>
                    this.setState({
                      condition: e.target.value,
                    })
                  }
                  value={this.state.condition}
                  className="basic-select"
                  id="product-condition"
                >
                  <option value="new">New</option>
                  <option value="damaged">Damaged</option>
                  <option value="used">Used</option>
                </select>
              </div>
            </div>
            <div className="addForm__wrapper--form--description">
              <label htmlFor="product-description">Product description</label>
              <textarea id="product-description"></textarea>
            </div>
            <div className="addForm__wrapper--form--contact">
              <div>
                <label htmlFor="product_phone-number">
                  Phone number to contact
                </label>
                <input
                  className="basic-input"
                  id="product_phone-number"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="product_email">Email to contact</label>
                <input className="basic-input" id="product_email" type="text" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddProducts;
