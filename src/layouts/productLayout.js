import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { EditCart, getProduct } from "../actions/index";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Loading from "../components/loading";

const ShipStatus = styled.div`
  background-color: ${({ status }) => (status ? "#32CD32" : "#ff0f0f")};
`;

const KeyInfo = styled.div`
  background-color: ${({ available }) =>
    available ? "#32CD32de" : "#ff0f0fde"};
`;

const ImageDot = styled.div`
  background-color: ${({ active }) => (active ? "#6c63ff" : "none")};
`;

const ConditionInfo = styled.div`
  background-color: ${({ condition }) =>
    condition === "new"
      ? "#32CD32de"
      : condition === "damaged"
      ? "#ff0f0fde"
      : "#ffa500de"};
`;

const ProductLayout = (props) => {
  let [count, setCount] = useState(0);
  let [inCart, setInCart] = useState(false)
  const { id } = useParams();
  const data = props.product;
  const user = props.user;
  let newCart = props.cart ? props.cart : [];

  const addProduct = () => {
    let cartValue = newCart.filter((item) => item._id === data._id).length > 0;
    if (!cartValue) {
      newCart.push(data);
      setInCart(!inCart)
      props.EditCart(newCart);
    }
  };

  useEffect(() => {
    if (!props.product || props.product._id !== id) {
      props.getProduct(id);
    }
  }, [props, id]);


  return (
    <main className="product">
      {data ? (
        <>
          <section className="product__show">
            <article className="product__carousel">
              <div className="product__carousel-wrapper">
                <div
                  onClick={() =>
                    count === 0
                      ? setCount(data.images.length - 1)
                      : setCount(count - 1)
                  }
                  className="btn btn--rounded"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <img alt="product_image" src={data.images[count]} />
                <div
                  onClick={() =>
                    count === data.images.length - 1
                      ? setCount(0)
                      : setCount(count + 1)
                  }
                  className="btn btn--rounded"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </div>
              <div className="product__dots">
                {data.images.map((item, index) => (
                  <ImageDot key={index} active={index === count}></ImageDot>
                ))}
              </div>
            </article>
            <article className="product__buy">
              <div className="product__user">
                <img alt="user_image" src={data.userImage} />
                <h3>{data.userEmail}</h3>
              </div>
              <div className="product__about">
                <p>
                  Location: <span>{data.place}</span>
                </p>
              </div>
              <div className="product__shipment">
                {data.ship ? (
                  <>
                    <div className="product__status">
                      <ShipStatus status={data.ship}></ShipStatus>
                      <p>Shipment available</p>
                    </div>
                    <div className="product__info">
                      <p>
                        Minimum cost: <span>5$</span>
                      </p>
                      <p>
                        Shipment time: <span>3 days</span>
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="product__status">
                    <ShipStatus status={data.ship}></ShipStatus>
                    <p>Shipment unavailable</p>
                  </div>
                )}
              </div>
              <p></p>
              {newCart.filter((item) => item._id === data._id).length > 0 || inCart ? (
                <div className="btn product__cart-info">Product in cart</div>
              ) : (
                <button onClick={addProduct} className="btn btn--transparent">
                  Add to shopping cart
                </button>
              )}
              <button className="btn btn--background">Buy now</button>
            </article>
          </section>
          <section className="product__details">
            <h1>{data.title}</h1>
            <h2>{data.price} $</h2>
            <article className="product__keyInfo">
              <ConditionInfo condition={data.condition.toLowerCase()}>
                <p>Condition: {data.condition}</p>
              </ConditionInfo>
              <KeyInfo
                available={
                  user.place.toLowerCase() === data.place.toLowerCase()
                }
              >
                {user.place.toLowerCase() === data.place.toLowerCase() ? (
                  <p>Same place as yours</p>
                ) : (
                  <p>Different place as yours</p>
                )}
              </KeyInfo>
              <KeyInfo available={data.negotiations}>
                {data.negotiations ? (
                  <p>Negotiation possible</p>
                ) : (
                  <p>No negotiation possible</p>
                )}
              </KeyInfo>
              <KeyInfo available={data.ship}>
                {data.ship ? (
                  <p>Shipment available</p>
                ) : (
                  <p>Shipment unavailable</p>
                )}
              </KeyInfo>
            </article>
            <article className="product__description">
              <p>Description</p>
              <p>{data.description}</p>
            </article>
            <div className="product__decoration-line"></div>
            <article className="product__contact">
              <p className="product__contact-title">Contact</p>
              <div className="product__contact-info">
                <div>
                  <p>
                    Phone number: <span>{data.phoneNumber}</span>
                  </p>
                </div>
                <div>
                  <p>
                    User email: <span>{data.userEmail}</span>
                  </p>
                </div>
              </div>
            </article>
          </section>
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
};

const mapStateToProps = ({ product, user, cart }) => ({
  product,
  user,
  cart,
});

const mapDispatchToProps = (dispatch) => ({
  EditCart: (cart) => dispatch(EditCart(cart)),
  getProduct: (id) => dispatch(getProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductLayout);
