import React from "react";
import { connect } from "react-redux";
import ProductsList from "../layouts/productsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSlidersH,
  faSearch,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { ProductsCategories } from "../data/login_slides";
import styled from "styled-components";
import ShoppingCart from "../components/shoppingCart";
import { getProducts } from "../actions/index";

const PriceRange = styled.input`
  border: 2px solid ${({ error }) => (error ? "#ff0000" : "#b6b2b2")};
  &:focus {
    border: 2px solid ${({ error }) => (error ? "#ff0000" : "#6c63ff")};
  }
`;

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: this.props.items,
      place: "",
      min: "",
      max: "",
      category: "",
      sortValue: false,
      subCategory: [],
      filter: false,
      error: false,
      searchText: "",
    };
  }

  componentDidMount = () => {
    this.props.getProducts();
  };

  priceRange = (e, type) => {
    this.setState({
      [type]: parseInt(e.target.value),
    });
  };

  searchFunction = (data) => {
    return data.filter(
      (item) =>
        item.title.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >
          -1 &&
        item.place.toLowerCase().indexOf(this.state.place.toLowerCase()) > -1
    );
  };

  filterFunction = () => {
    let filteredData =
      this.state.max && this.state.min
        ? this.props.items.filter(
            (item) =>
              item.price >= this.state.min && item.price <= this.state.max
          )
        : this.props.items;

    if (this.state.sortValue === "highLow") {
      filteredData.sort((a, b) => b.price - a.price);
    } else if (this.state.sortValue === "lowHigh") {
      filteredData.sort((a, b) => a.price - b.price);
    }

    this.setState({ productsData: filteredData });
  };

  categoryFilter = (e) => {
    const choosenItem = e.target.value.toLowerCase();
    const isValueIn = this.state.subCategory.indexOf(choosenItem);
    let newCat = this.state.subCategory;
    isValueIn === -1 ? newCat.push(choosenItem) : newCat.splice(isValueIn, 1);

    const filteredData = newCat.length
      ? this.props.items.filter(
          (item) => newCat.indexOf(item.subCategory.toLowerCase()) !== -1
        )
      : this.props.items;
    this.setState({ subCategory: newCat, productsData: filteredData });
  };

  render() {
    return (
      <div className="products">
        {this.props.items ? (
          <>
            <ShoppingCart />
            <div
              onMouseLeave={() => this.setState({ category: "" })}
              className="products__category"
            >
              <div className="products__category-nav">
                {Object.keys(ProductsCategories[0]).map((item) => (
                  <p
                    key={item}
                    onMouseEnter={() => {
                      this.setState({
                        category: item,
                        filter: false,
                      });
                    }}
                  >
                    {item}
                  </p>
                ))}
                <div className="products__search">
                  <input
                    className="input input--with-icon"
                    onChange={(e) =>
                      this.setState({ searchText: e.target.value })
                    }
                    type="text"
                  />
                  <div className="input-icon">
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                </div>
              </div>
              <div className="products__filter">
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
                    className="products__filter-icon"
                    icon={faSlidersH}
                  />
                </div>
              </div>
              <div className="products__filter-form">
                <>
                  {this.state.category ? (
                    Object.entries(
                      ProductsCategories[0][this.state.category]
                    ).map((item) => (
                      <div className="products__form-checkbox" key={item[1]}>
                        <div>
                          <input
                            id={item[1]}
                            checked={
                              this.state.subCategory.indexOf(
                                item[1].toLowerCase()
                              ) !== -1
                            }
                            type="checkbox"
                            value={item[1]}
                            onChange={(e) => this.categoryFilter(e)}
                          />
                          <label className='label' htmlFor={item[1]}>{item[1]}</label>
                        </div>
                      </div>
                    ))
                  ) : this.state.filter ? (
                    <div className="products__form-selectors">
                      <div className="products__form-location">
                        <input
                          id="product-location"
                          placeholder="Select product city"
                          className="input input--with-icon"
                          onChange={(e) =>
                            this.setState({
                              place: e.target.value,
                            })
                          }
                          type="text"
                        />
                        <div className="input-icon">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </div>
                      </div>
                      <div className="products__form-price">
                        <div>
                          <label htmlFor="min-price">Min:</label>
                          <PriceRange
                            error={this.state.error}
                            onChange={(e) => this.priceRange(e, "min")}
                            placeholder="$"
                            id="min-price"
                            type="number"
                          />
                        </div>
                        <div>
                          <label htmlFor="max-price">Max:</label>
                          <PriceRange
                            error={this.state.error}
                            onChange={(e) => this.priceRange(e, "max")}
                            placeholder="$"
                            id="max-price"
                            type="number"
                          />
                        </div>
                      </div>
                      <div className="products__form-sort">
                        <select
                          className="select"
                          onChange={(e) =>
                            this.setState({ sortValue: e.target.value })
                          }
                        >
                          <option value="" disabled selected>
                            Sort by
                          </option>
                          <option value="highLow">Price: High-Low</option>
                          <option value="lowHigh">Price: Low-High</option>
                        </select>
                      </div>
                      <button
                        className="btn btn--background"
                        onClick={this.filterFunction}
                      >
                        Filter
                      </button>
                      <button
                        className="btn btn--background"
                        onClick={() =>
                          this.setState({ productsData: this.props.items })
                        }
                      >
                        Clear Filter
                      </button>
                    </div>
                  ) : null}
                </>
              </div>
            </div>
            <ProductsList
              store={this.searchFunction(
                this.state.productsData
                  ? this.state.productsData
                  : this.props.items
              )}
            />
          </>
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ items, cart }) => ({ items, cart });

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
