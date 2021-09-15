import React from "react";
import { Link } from "react-router-dom";

const ProductsList = (props) => {
  return (
    <div className="products-list">
      {props.store.length > 0 ? (
        props.store.map((item, index) => (
          <Link
            to={`products/${item._id}`}
            className="products-list__element"
            key={index}
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
        <div>
          <h1>No items</h1>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
