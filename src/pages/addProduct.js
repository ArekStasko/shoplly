import React from "react";

class AddProducts extends React.Component {
  render() {
    return (
      <div className="addForm">
        <div className="addForm__photos">Photos section</div>
        <div className="addForm__form">
          <form>
            <div>
              <label htmlFor="product-title">Product title</label>
              <input id="product-title" type="text" />
            </div>
            <div>
              <label htmlFor="product-place">Place of product</label>
              <input id="product-place" type="text" />
              <label htmlFor="product_place-checkbox">
                Check if the product place is the same as yours
              </label>
              <input id="product_place-checkbox" type="checkbox" />
            </div>
            <div>
              <label htmlFor="product-category">Product category</label>
              <select id="product-category"></select>
              <label htmlFor="product-subcategory">Product subcategory</label>
              <select id="product-subcategory"></select>
            </div>
            <div>
              <label htmlFor="product-ship">Shimpent</label>
              <input id="product-ship" type="checkbox" />
              <label htmlFor="product-negotiation">Negotiations</label>
              <input id="product-negotiation" type="checkbox" />
              <label htmlFor="product-condition">Product condition</label>
              <select id="product-condition"></select>
            </div>
            <div>
              <label htmlFor="product-description">Product description</label>
              <input id="product-description" type="text"></input>
            </div>
            <div>
              <label htmlFor="product_phone-number">
                Phone number to contact
              </label>
              <input id="product_phone-number" type="text" />
              <label htmlFor="product_email">Email to contact</label>
              <input id="product_email" type="text" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddProducts;
