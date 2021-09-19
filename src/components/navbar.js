import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { connect } from "react-redux";
import { logout } from "../actions/index";
import FlashMessage from '../components/flash'

const NavLinks = styled.div`
  @media (max-width: 1024px) {
    transition: all 800ms ease-in-out;
    transform: translateY(${({ show }) => (show ? "0vh" : "-100vh")});
  }
`;

const Navbar = ({user, flash, logout}) => {
  const [show, setShow] = useState(false);

  return (
    <>
    { flash ? <FlashMessage duration={3000} /> : null}
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
        {user ? (
          <>
          <div className='navbar__logout-wrapper'>
            <img alt="user_image" src={user.image} />
            <button
            onClick={() => {
              logout();
            }}
            className="btn btn--small btn--background"
            to="/login"
          >
            Logout
          </button>
          </div>
          <Link className="btn btn--transparent" to="/products/add">
            Add product
          </Link>
          </>
        ) : (
          <>
            <Link className="navbar__link" to="/login">
              Login
            </Link>
            <Link className="navbar__link" to="/register">
              Register
            </Link>
          </>
        )}
      </NavLinks>
    </nav>
    </>
  );
};

const mapStateToProps = ({ user, flash }) => ({ user, flash });

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
