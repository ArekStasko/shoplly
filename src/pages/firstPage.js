import React from 'react'
import { connect } from "react-redux";


const FirstPage = props => {


    return(
        <div>
            FirstPage page
        </div>
    )
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(FirstPage);