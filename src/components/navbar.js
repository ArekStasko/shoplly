import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle
} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__title">
        <Link to='/'>Shoplly</Link>
      </div>
      <div className="navbar__links">
        <Link to='/products' >Products</Link>
        <Link to='/login' >Login</Link>
        <Link to='/register' >Register</Link>
        <Link to='/products/add' >
        <FontAwesomeIcon className='navbar__links--add' icon={faPlusCircle} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
