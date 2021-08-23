import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faShoppingCart,
    faTimes
 } from "@fortawesome/free-solid-svg-icons";

const ShoppingCart = ({ cart }) => {
  const [show, setShow] = useState(false);
  return (
    <div onClick={()=>setShow(!show)} className="cart">
      {cart.length > 0 ? (
        <div className="cart__count">{cart.length}</div>
      ) : null}
      <FontAwesomeIcon icon={faShoppingCart} />
      {show ? (
        <div className="cart__elements">
          {cart.map(item => (
             <div className="cart__elements--element" >
            <img alt="elementImg" src={item.imgSource[0]} />
            <p>{item.title}</p>
            <button><FontAwesomeIcon icon={faTimes}/></button>
             </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({ cart });

const mapDispatchToProps = (dispatch) => ({
  addToCart: (cart) => dispatch(addToCart(cart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
