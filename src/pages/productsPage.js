import React from "react";
import { connect } from "react-redux";
import ProductsList from "../layouts/productsList";
import PlacePicker from "../components/placePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH, faSearch } from "@fortawesome/free-solid-svg-icons";
import { RegisterAdressData } from "../data/login_slides";
import { ProductsCategories } from "../data/login_slides";
import styled from "styled-components";

const PriceRange = styled.input`
  border: 2px solid ${({ error }) => (error ? "#ff0000" : "#b6b2b2")};
  &:focus {
    border: 2px solid ${({ error }) => (error ? "#ff0000" : "#6c63ff")};
  }
`;

const CategoryNav = styled.div`
  transition: all 300ms ease-in-out;
  top: ${({ hide }) => (hide ? "0px" : "90px")};
`;

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: this.props.store.items,
      filterData: {
        province: "",
        city: "",
        min: "",
        max: "",
      },
      category: "",
      subCategory: "",
      filter: false,
      hide: false,
      error: false,
      searchText: ''
    };
  }

  provinceSelect = (e) => {
    this.setState({
      filterData: {
        ...this.state.filterData,
        province: e.target.value,
        city: RegisterAdressData[0][e.target.value][0],
      },
    });
  };

  citySelect = (e) => {
    this.setState({
      filterData: {
        ...this.state.filterData,
        city: e.target.value,
      },
    });
  };

  priceRange = (e, type) => {
    this.setState({
      filterData: {
        ...this.state.filterData,
        [type]: e.target.value,
      },
    });
  };

  searchFunction = data => {
    return data.filter(item=>item.title.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1)
  }

  filterFunction = () => {
    const filterOptions = this.state.filterData;

    if (filterOptions.province === "") {
      return false;
    }

    if (filterOptions.min > filterOptions.max) {
      this.setState({ error: true });
      return false;
    }

    const filteredData =
      filterOptions.max === "" && filterOptions.max === ""
        ? this.state.productsData.filter((item) => {
            return (
              item.province === filterOptions.province &&
              item.city === filterOptions.city
            );
          })
        : this.state.productsData.filter((item) => {
            return (
              item.province === filterOptions.province &&
              item.city === filterOptions.city &&
              item.price < filterOptions.max &&
              item.price > filterOptions.min
            );
          });

    this.setState({ error: false, productsData: filteredData });
  };

  render() {
    let prevScrollRange = window.pageYOffset;

    window.onscroll = () => {
      let scrollRange = window.pageYOffset;
      this.setState({ hide: !(prevScrollRange > scrollRange) });
      prevScrollRange = scrollRange;
    };

    console.log(this.state)

    return (
      <div className="products">
        <CategoryNav
          hide={this.state.hide}
          onMouseLeave={() => this.setState({ category: "", subCategory: "" })}
          className="products__category"
        >
          <div className="products__category--nav">
            {Object.entries(ProductsCategories[0]).map((item) => (
              <p
                onMouseEnter={() =>
                  this.setState({ category: item[0], subCategory: "", filter: false })
                }
              >
                {item[0]}
              </p>
            ))}
            <div className="products__category--nav--search">
            <input onChange={e=>this.setState({ searchText: e.target.value })} type='text' />
            <div className="products__category--nav--search--iconWrapper">
            <FontAwesomeIcon
                className="products__category--nav--search--iconWrapper--icon"
                icon={faSearch}
              />
            </div>
            </div>
          </div>
          <div className="products__category--filter">
            <div>
              <p
                onClick={() =>
                  this.setState((state) => ({
                    category: "",
                    subCategory: "",
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
                  (item) => (
                    <p
                      onClick={(e) =>{
                        console.log(e)
                        this.setState({ subCategory: item[1] })
                      }
                      }
                    >
                      {item[1]}
                    </p>
                  )
                )
              ) : this.state.filter ? (
                <div className="products__category--form--selectors">
                  <PlacePicker
                    placeData={this.state.filterData}
                    selectProvince={this.provinceSelect}
                    selectCity={this.citySelect}
                  />
                  <div className="products__category--form--selectors--price">
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
                  <button onClick={this.filterFunction}>Filter</button>
                  <button
                    onClick={() =>
                      this.setState({ productsData: this.props.store.items })
                    }
                  >
                    Clean Filter
                  </button>
                </div>
              ) : null}
            </>
          </div>
        </CategoryNav>
        <ProductsList store={this.searchFunction(this.state.productsData)} />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({ store });

export default connect(mapStateToProps)(Products);
