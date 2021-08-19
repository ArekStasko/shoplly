import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import styled from 'styled-components'

const ShipStatus = styled.div`
background-color: ${ ({status}) => ( status? '#32CD32' : '#ff0f0f' )}
`

const KeyInfo = styled.div`
background-color: ${ ({available}) => ( available? '#32CD32de' : '#ff0f0fde' )}
`

const ConditionInfo = styled.div`
background-color: ${ ({condition}) => ( condition==='new'? '#32CD32de' : condition==='damaged'? '#ff0f0fde' : '#ffa500de' )}
`

const ProductLayout = (props) => {
  const { id } = useParams();
  const data = props.store.items.find((item) => item.id === id);
  const user = props.store.userExample

  console.log(data);
  return (
    <div className="product">
      <div className="product__show">
        <div className="product__show--carousel">
          <img alt="examplePhoto" src={data.imgSource} />
        </div>
        <div className="product__show--buy">
          <div className="product__show--buy--user">
            <img alt="userExampleImage" src={data.userImgExample} />
            <h3>{data.userName}</h3>
          </div>
          <div className="product__show--buy--about">
          <p>On Shoplly from <span>August 2021</span></p>
          </div>
          <div className="product__show--buy--about">
          <p>Location: <span>{data.place}</span></p>
          </div>
          <div className="product__show--buy--shipment">
            {data.ship ? (
              <>
                <div className="product__show--buy--shipment--status">
                  <ShipStatus status={data.ship} ></ShipStatus>
                  <p>Shipment available</p>
                </div>
                <div className="product__show--buy--shipment--info">
                <p>Minimum cost: <span>5$</span></p>
                <p>Shipment time: <span>3 days</span></p>
                </div>
              </>
            ) : (
              <div className="product__show--buy--shipment--status">
                <ShipStatus status={data.ship} ></ShipStatus>
                <p>Shipment unavailable</p>
              </div>
            )}
          </div>
          <p></p>
          <div className="product__show--buy--btn">Buy</div>
        </div>
      </div>
      <div className="product__details">
        <h1>{data.title}</h1>
        <h2>{data.price} $</h2>
        <div className="product__details--keyInfo" >
           <ConditionInfo condition={data.condition.toLowerCase()} >
                <p>Condition: {data.condition}</p>
           </ConditionInfo>
            <KeyInfo available={user.place.toLowerCase() === data.place.toLowerCase()}>
            {
            user.place.toLowerCase() === data.place.toLowerCase() ? (
                <p>Same place as yours</p>
            ) : (
                <p>Different place as yours</p>
            )
            }
            </KeyInfo>
            <KeyInfo available={data.negotiations}>
            {
            data.negotiations ? (
                <p>Negotiation possible</p>
            ) : (
                <p>No negotiation possible</p>
            )
            } 
            </KeyInfo>
            <KeyInfo available={data.ship}>
            {
            data.ship ? (
                <p>Shipment available</p>
            ) : (
                <p>Shipment unavailable</p>
            )
            } 
            </KeyInfo>
        </div>
        <div className="product__details--description">
        <p className="product__details--description--title">Description</p>
        <p className="product__details--description--text">{data.description}</p>
        </div>
        <div className="product__details--line"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => ({ store });

export default connect(mapStateToProps)(ProductLayout);
