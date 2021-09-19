import React from 'react'
import { connect } from "react-redux";


const FirstPage = props => {


    return(
        <main>
            FirstPage page
        </main>
    )
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(FirstPage);