import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { test } from '../actions/index'

const FirstPage = (props) => {

useEffect(()=>{
  props.test()
})

    return(
        <div>
            FirstPage page
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
  test: () => 
   dispatch(test()),
})

export default connect(null, mapDispatchToProps)(FirstPage);