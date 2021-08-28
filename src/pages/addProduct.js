import React from "react";
import { ProductsCategories } from "../data/login_slides";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components'

const AddedImages = styled.div`
justify-content: ${({images}) => (images?'flex-start':'center')}
`

class AddProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "",
      subCategory: "",
      condition: "",
      phoneNumber: "",
      email: "",
      place: "",
      description: "",
      shipment: false,
      negotiations: false,
      images: [],
    };
    this.imagesInput = React.createRef(null);
  }

  imageUpload = (e) => {
    const uploadImages = e.target.files;
    this.setState({
      images: [...this.state.images, ...Object.values(uploadImages)],
    });
    e.target.value = ''
  };

  imageDelete = (e, elementIndex) => {
   let newArray = this.state.images.filter(
      (item, index) => index !== elementIndex
    );
   this.setState({
      images: newArray,
    });
  };

  setInfo = e => {
      const element = e.target
      this.setState({
          [element.name]: element.value
      })
  }

  submitFunction = e => {
      e.preventDefault()
      console.log(this.state)
  }

  render() {
    return (
      <div className="addForm">
        <div className="addForm__photos">
          <input
            id="add-product-image"
            type="file"
            onChange={(e) => this.imageUpload(e)}
            ref={this.imagesInput}

            multiple
          />
          <label
            uploaded={this.state.images.length > 0}
            className="addForm__photos--addPhoto"
            htmlFor="add-product-image"
          >
            <span className="addForm__photos--addPhoto--icon">
              <FontAwesomeIcon icon={faImages} />
            </span>
            <span>Choose images</span>
          </label>
          <AddedImages 
          images={this.state.images.length > 0}
          className="addForm__photos--addedImages"
          >
            {this.state.images.length > 0
              ? this.state.images.map((item, index) => (
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
                ))
              : <p>No photos</p>}
          </AddedImages>
        </div>
        <div className="addForm__wrapper">
          <form
          onSubmit={e=>this.submitFunction(e)}
          className="addForm__wrapper--form">
            <div className='form-section'>
            <div className="addForm__wrapper--form--title">
              <label htmlFor="product-title">Product title:</label>
              <input 
              onChange={e=>this.setInfo(e)}
              name='title'
              className="basic-input" id="product-title" type="text" />
            </div>
            <div className="addForm__wrapper--form--description">
              <label htmlFor="product-description">Product description</label>
              <textarea 
              onChange={e=>this.setInfo(e)}
              name='description'
              id="product-description"></textarea>
            </div>
            <div className="addForm__wrapper--form--contact">
              <div>
                <label htmlFor="product_phone-number">
                  Phone number to contact
                </label>
                <input
                  name='phoneNumber'
                  onChange={e=>this.setInfo(e)}
                  className="basic-input"
                  id="product_phone-number"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="product_email">Email to contact</label>
                <input 
                onChange={e=>this.setInfo(e)}
                name='email'
                className="basic-input" id="product_email" type="text" />
              </div>
            </div>
            </div>

            <div className='form-section'>
            <div className="addForm__wrapper--form--place">
                <label htmlFor="product-place">Place of product</label>
                <input
                onChange={e=>this.setInfo(e)}
                name='place'
                className="basic-input" id="product-place" type="text" />
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
                <label htmlFor="product-ship">Shipment</label>
                <input onChange={e=>this.setState({shipment: e.target.checked})} id="product-ship" type="checkbox" />
              </div>
              <div>
                <label htmlFor="product-negotiation">Negotiations</label>
                <input onChange={e=>this.setState({negotiations: e.target.checked})} name='negotiations' id="product-negotiation" type="checkbox" />
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
            <button
            type='submit'
            >Buy</button>
        </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddProducts;
