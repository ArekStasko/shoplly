import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import example from "../assets/images/example.jpg";
import PlacePicker from "../components/placePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { RegisterAdressData } from "../data/login_slides";
import { ProductsCategories } from "../data/login_slides";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      province: "Province",
      city: "",
      category: "",
      filter: false,
    };
  }

  optionPicker = (e) => {
    console.log(this.state);
    e.preventDefault(e);
  };

  provinceSelect = (e) => {
    this.setState({
      province: e.target.value,
      city: RegisterAdressData[0][e.target.value][0],
    });
  };

  citySelect = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="products">
        <div
          onMouseLeave={() => this.setState({ category: "" })}
          className="products__category"
        >
          <div className="products__category--nav">
            {Object.entries(ProductsCategories[0]).map((item) => (
              <p
                onMouseEnter={() =>
                  this.setState({ category: item[0], filter: false })
                }
              >
                {item[0]}
              </p>
            ))}
          </div>
          <div className="products__category--filter">
            <div>
              <p
                onClick={() =>
                  this.setState((state) => ({
                    category: "",
                    filter: !state.filter,
                  }))
                }
              >
                Filter
              </p>
              <FontAwesomeIcon
                className="products__category--filter--icon"
                icon={faSlidersH}
              />
            </div>
          </div>
          <div className="products__category--form">
            <>
              {this.state.category ? (
                Object.entries(ProductsCategories[0][this.state.category]).map(
                  (item) => <p>{item[1]}</p>
                )
              ) : this.state.filter ? (
                <div>
                  <PlacePicker
                    placeData={this.state}
                    selectProvince={this.provinceSelect}
                    selectCity={this.citySelect}
                  />
                </div>
              ) : null}
            </>
          </div>
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
