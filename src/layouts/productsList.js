import React from "react";
import { Link } from "react-router-dom";


const ProductsList = (props) => {
  return (
    <div className="products__wrapper">
      {props.store.length > 0 ? (
        props.store.map((item, index) => (
          <Link
            to={`products/${item.id}`}
            className="products__wrapper--element"
            key={index}
          >
            <div className="products__wrapper--element--img">
              <img src={item.imgSource} alt="example-product_photo" />
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
  );
};

export default ProductsList;
