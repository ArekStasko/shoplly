import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const ProductLayout = (props) => {

const { id } = useParams()
const data = props.store.items.find(item=>item.id === id)

console.log(data)
    return(
        <div className='product'>
            <div className='product__show'>
            <div className='product__show--carousel'>
              <img alt='examplePhoto' src={data.imgSource} />
            </div>
            <div className='product__show--buy'>
                <img alt='userExampleImage' src={data.userImgExample} />
            </div>
            </div>
            <div className='product__details'>
            <h1>{data.title}</h1>
            <h2>{data.price}</h2>
            <p>{data.description}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (store) => ({ store });

export default connect(mapStateToProps)(ProductLayout);
