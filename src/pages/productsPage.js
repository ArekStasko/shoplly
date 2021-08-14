import React from "react";
import { connect } from "react-redux";
import ProductsList from "../layouts/productsList";
import PlacePicker from "../components/placePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { RegisterAdressData } from "../data/login_slides";
import { ProductsCategories } from "../data/login_slides";
import styled from "styled-components";


const CategoryNav = styled.div`
transition: all 300ms ease-in-out;
top: ${({hide})=>(hide?'0px':'90px')};
`

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      province: "Province",
      city: "",
      category: "",
      subCategory: "",
      filter: false,
      price: {
        min: 0,
        max: 0,
      },
      hide: false
    };
  }

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

  priceRange = (e, type) => {
    this.setState({
      price: {
        ...this.state.price,
        [type]: e.target.value,
      },
    });
  };

  filterFunction = () => {
   /* let arr = this.props.store.items.filter(item => {
      if( item.province === this.state.province 
       && item.city === this.state.city 
       && item.price <= this.state.price.max
       && item.price >= this.state.price.min
      ){
          return true
      }
      return false
     })*/

  }

  

  render() {
  let prevScrollRange = window.pageYOffset;

  window.onscroll = () => {
    let scrollRange = window.pageYOffset
    this.setState({ hide: !(prevScrollRange > scrollRange) })
    prevScrollRange = scrollRange
  }


    return (
      <div className="products">
        <CategoryNav
          hide={this.state.hide}
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
                  (item) => (
                    <p
                      onClick={(e) =>
                        this.setState({ subCategory: e.target.value })
                      }
                    >
                      {item[1]}
                    </p>
                  )
                )
              ) : this.state.filter ? (
                <div className="products__category--form--selectors">
                  <PlacePicker
                    placeData={this.state}
                    selectProvince={this.provinceSelect}
                    selectCity={this.citySelect}
                  />
                  <div className="products__category--form--selectors--price">
                    <div>
                      <label htmlFor="min-price">Min:</label>
                      <input
                        onChange={(e) => this.priceRange(e, "min")}
                        placeholder="$"
                        id="min-price"
                        type="number"
                      />
                    </div>
                    <div>
                      <label htmlFor="max-price">Max:</label>
                      <input
                        onChange={(e) => this.priceRange(e, "max")}
                        placeholder="$"
                        id="max-price"
                        type="number"
                      />
                    </div>
                  </div>
                  <button onClick={this.filterFunction} >Filter</button>
                </div>
              ) : null}
            </>
          </div>
        </CategoryNav>
        <ProductsList store={this.props.store} />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({ store });

export default connect(mapStateToProps)(Products);
