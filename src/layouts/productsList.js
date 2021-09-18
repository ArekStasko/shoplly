import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen
} from "@fortawesome/free-solid-svg-icons";

const ProductsList = (props) => {
  return (
    <div className="products-list">
      {props.store.length > 0 ? (
        props.store.map(item => (
          <Link
            to={`products/${item._id}`}
            className="products-list__element"
            key={item._id}
          >
            <div className="products-list__product-image">
              <img src={item.images[0]} alt="product_photo" />
            </div>
            <div className="products-list__product-title">
              <h3>{item.title}</h3>
              <p>{item.place}</p>
            </div>
            <p>{item.price} zl</p>
          </Link>
        ))
      ) : (
        <div className="products-list__no-items">
          <h2>Lack of stuff</h2>
          <FontAwesomeIcon
                icon={faBoxOpen}
          />
        </div>
      )}
    </div>
  );
};

export default ProductsList;
