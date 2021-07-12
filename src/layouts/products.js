import React from 'react'
import { connect } from 'react-redux'


const Products = (props) => {

    return(
        <div>
            {
          props.store.items.length > 0 ? (
                props.store.items.map((item, index) => (
                    <div key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <p>{item.count}</p>
                    </div>
              ))) : (
                  <div>
                      <h1>No items</h1>
                  </div>
              )
            }
            Products page
        </div>
    )
}

const mapStateToProps = store => ({store});

export default connect(mapStateToProps)(Products);