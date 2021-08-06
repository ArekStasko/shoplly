import React from 'react'
import { connect } from 'react-redux'


const Products = (props) => {

    return(
        <div className='products'>
            <div className='products__sidebar'>
             <div>
                 jakies
             </div>
             <div>
                 opcje
             </div>
            </div>
            <div className='products__wrapper'>
            {
          props.store.items.length > 0 ? (
                props.store.items.map((item, index) => (
                    <div className='products__wrapper--element' key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <button>check</button>
                    </div>
              ))) : (
                  <div>
                      <h1>No items</h1>
                  </div>
              )
            }
            </div>
        </div>
    )
}

const mapStateToProps = store => ({store});

export default connect(mapStateToProps)(Products);