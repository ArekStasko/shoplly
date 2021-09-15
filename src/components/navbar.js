import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const NavLinks = styled.div`
  @media (max-width: 768px) {
    transition: all 800ms ease-in-out;
    transform: translateY(${({ show }) => (show ? "0vh" : "-100vh")});
  }
`;

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__title">
        <Link to="/">Shoplly</Link>
      </div>
      <div onClick={() => setShow(!show)} className="navbar__mobileIcon">
        <FontAwesomeIcon icon={faEllipsisH} />
      </div>
      <NavLinks
        onClick={() => setShow(!show)}
        show={show}
        className="navbar__links"
      >
        <FontAwesomeIcon className="navbar__close-icon" icon={faTimes} />
        <Link className="navbar__link" to="/products">
          Products
        </Link>
        <Link className="navbar__link" to="/login">
          Login
        </Link>
        <Link className="navbar__link" to="/register">
          Register
        </Link>
        <Link className="btn btn--transparent" to="/products/add">
          Add product
        </Link>
      </NavLinks>
    </nav>
  );
};

export default Navbar;
