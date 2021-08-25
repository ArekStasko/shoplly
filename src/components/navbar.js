import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Nav = styled.div`
transition: all 300ms ease-in-out;
top: ${({hide})=>(hide?'-90px':'0px')};
`

const NavLinks = styled.div`
@media (max-width: 768px){
  transition: all 800ms ease-in-out;
  transform: translateY(${({ show }) => (show ? "0vh" : "-100vh")});
}
`;

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false)

  let prevScrollRange = window.scrollY 

  window.onscroll = () => {
    let scrollRange = window.scrollY
    setHide(!(prevScrollRange > scrollRange))
    prevScrollRange = scrollRange
  }

  return (
    <Nav
     hide={hide} className="navbar">
      <div className="navbar__title">
        <Link to="/">Shoplly</Link>
      </div>
      <div onClick={() => setShow(!show)} className="navbar__mobileIcon">
          <FontAwesomeIcon
            className="navbar__mobileIcon--nonActive"
            icon={faEllipsisH}
          />
      </div>
      <NavLinks
        onClick={() => setShow(!show)}
        show={show}
        className="navbar__links"
      >
         <FontAwesomeIcon
            className="navbar__links--active"
            icon={faTimes}
          />
        <Link className="navbar__links--link" to="/products">
          Products
        </Link>
        <Link className="navbar__links--link" to="/login">
          Login
        </Link>
        <Link className="navbar__links--link" to="/register">
          Register
        </Link>
        <Link 
        className='navbar__links--btn'
        to="/products/add"
        >
         Add product
        </Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
