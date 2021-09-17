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

  let totalPrice = props.cart ? Math.round(props.cart.reduce((a,b)=>(a + b.price),0) * 1000) / 1000 : null

  const deleteElement = (element) => {
    let newCart = props.cart;
    let inCart = newCart.filter(item => item.id !== element.id)
    props.EditCart(inCart)
    }

  return (
      <div className='cart' >
    <div onClick={()=>setShow(!show)} className="cart__icon">
      {props.cart ? (
        <div className="cart__count">{props.cart.length}</div>
      ) : null}
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
    {show ? (
        <div className="cart__elements">
          {props.cart ?
          <>
          {
           props.cart.map(item => (
             <div className="cart__element" >
            <img alt="element-img" src={item.images[0]} />
            <Link to={`products/${item._id}`} className="cart__element-link">{item.title}</Link>
            <p>{item.price}</p>
            <button onClick={()=>deleteElement(item)}><FontAwesomeIcon icon={faTimes}/></button>
             </div>
          ))}
          <p>Total price: {totalPrice} $</p>
          <button className="btn btn--background btn--small">Buy</button>
          </>
          : (
              <div className="cart__no-items">
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
