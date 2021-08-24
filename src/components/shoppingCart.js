import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faShoppingCart,
    faTimes
 } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ShoppingCart = ({ cart }) => {
  const [show, setShow] = useState(false);

  let totalPrice = cart.reduce((a,b)=>(a + b.price),0)

  return (
      <div className='cart' >
    <div onClick={()=>setShow(!show)} className="cart__icon">
      {cart.length > 0 ? (
        <div className="cart__icon--count">{cart.length}</div>
      ) : null}
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
    {show ? (
        <div className="cart__elements">
          {cart.map(item => (
             <div className="cart__elements--element" >
            <img alt="elementImg" src={item.imgSource[0]} />
            <Link to={`products/${item.id}`} className="cart__elements--element--link">{item.title}</Link>
            <p>{item.price}</p>
            <button><FontAwesomeIcon icon={faTimes}/></button>
             </div>
          ))}
          <p className="cart__elements--totalPrice" >Total price: {totalPrice} $</p>
          <button className="cart__elements--btn">Buy</button>
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
