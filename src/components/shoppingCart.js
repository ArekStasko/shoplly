import React, { useState } from "react";
import { connect } from "react-redux";
import { EditCart } from "../actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faShoppingCart,
    faTimes
 } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ShoppingCart = (props) => {
  const [show, setShow] = useState(false);

  let totalPrice = props.cart.reduce((a,b)=>(a + b.price),0)

  const deleteElement = (element) => {
    let newCart = props.cart;
    let inCart = newCart.filter(item => item.id !== element.id)
    props.EditCart(inCart)
    }

  return (
      <div className='cart' >
    <div onClick={()=>setShow(!show)} className="cart__icon">
      {props.cart.length > 0 ? (
        <div className="cart__icon--count">{props.cart.length}</div>
      ) : null}
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
    {show ? (
        <div className="cart__elements">
          {props.cart.length > 0 ?
          <>
          {
           props.cart.map(item => (
             <div className="cart__elements--element" >
            <img alt="elementImg" src={item.imgSource[0]} />
            <Link to={`products/${item.id}`} className="cart__elements--element--link">{item.title}</Link>
            <p>{item.price}</p>
            <button onClick={()=>deleteElement(item)}><FontAwesomeIcon icon={faTimes}/></button>
             </div>
          ))}
          <p className="cart__elements--totalPrice" >Total price: {totalPrice} $</p>
          <button className="cart__elements--btn">Buy</button>
          </>
          : (
              <div className="cart__elements--noItems">
              <p>No Items</p>
              </div>
          )
        }
        </div>
        
      ) : null}
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({ cart });

const mapDispatchToProps = (dispatch) => ({
  EditCart: (cart) => dispatch(EditCart(cart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);