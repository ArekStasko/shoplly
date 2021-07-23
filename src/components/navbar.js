import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__title">
        <h2>Shoplly</h2>
      </div>
      <div className="navbar__links">
        <p>Login</p>
        <p>Register</p>
        <p>Products</p>
        <p>+</p>
      </div>
    </div>
  );
};

export default Navbar;
