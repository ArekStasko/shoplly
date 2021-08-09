import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import example from "../assets/images/example.jpg";

const Products = (props) => {
  return (
    <div className="products">
      <div className="products__sidebar">
        <div>jakies</div>
        <div>opcje</div>
      </div>
      <div className="products__wrapper">
        {props.store.items.length > 0 ? (
          props.store.items.map((item, index) => (
            <Link
              to={`product/${item.id}`}
              className="products__wrapper--element"
              key={index}
            >
              <div className='products__wrapper--element--img'>
                <img src={example} alt="example-product_photo" />
              </div>
              <div className='products__wrapper--element--title'>
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
};

const mapStateToProps = (store) => ({ store });

export default connect(mapStateToProps)(Products);
