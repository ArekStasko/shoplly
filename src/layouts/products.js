import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import example from "../assets/images/example.jpg";
import { RegisterAdressData } from "../data/login_slides";

class Products extends React.Component {

  optionPicker = (e) => {
    e.preventDefault();
    console.log("tak");
  };

  render() {
    return (
      <div className="products">
        <div className="products__sidebar">
          <form onChange={(e) => this.optionPicker(e)}>
          <select></select>
          <select></select>
          <select></select>
          <select></select>
          <input />
          </form>
        </div>
        <div className="products__wrapper">
          {this.props.store.items.length > 0 ? (
            this.props.store.items.map((item, index) => (
              <Link
                to={`product/${item.id}`}
                className="products__wrapper--element"
                key={index}
              >
                <div className="products__wrapper--element--img">
                  <img src={example} alt="example-product_photo" />
                </div>
                <div className="products__wrapper--element--title">
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                </div>
                <p>{item.price} zl</p>
              </Link>
            ))
          ) : (
            <div>
              <h1>No items</h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({ store });

export default connect(mapStateToProps)(Products);
