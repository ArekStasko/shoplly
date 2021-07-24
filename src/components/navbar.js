import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faTimes,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const NavLinks = styled.div`
@media (max-width: 768px){
  display: ${({ show }) => (show ? "flex" : "none")};
}
`;

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__title">
        <Link to="/">Shoplly</Link>
      </div>
      <div onClick={() => setShow(!show)} className="navbar__mobileIcon">
        {show ? (
          <FontAwesomeIcon
            className="navbar__mobileIcon--nonActive"
            icon={faTimes}
          />
        ) : (
          <FontAwesomeIcon
            className="navbar__mobileIcon--active"
            icon={faEllipsisH}
          />
        )}
      </div>
      <NavLinks
        onClick={() => setShow(!show)}
        show={show}
        className="navbar__links"
      >
        <Link className="navbar__links--link" to="/products">
          Products
        </Link>
        <Link className="navbar__links--link" to="/login">
          Login
        </Link>
        <Link className="navbar__links--link" to="/register">
          Register
        </Link>
        <Link to="/products/add">
          <FontAwesomeIcon className="navbar__links--add" icon={faPlusCircle} />
        </Link>
      </NavLinks>
    </div>
  );
};

export default Navbar;
