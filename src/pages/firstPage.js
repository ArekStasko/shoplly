import React from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const FirstPage = props => {


    return(
        <main className='first-page'>
            <section className='first-page__header'> 
                <h1>Hello on - Shoplly !</h1>
                <Link to='/products' className='btn btn--transparent'>See Products</Link>
            </section>
        </main>
    )
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(FirstPage);