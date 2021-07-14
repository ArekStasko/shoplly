import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="login__description">
          <div className="login__description--title">
            <h1>Buy and sell awesome things</h1>
          </div>
          <div className="login__description--slides">

          </div>
      </div>
      <div className="login__form">
        <p>Login to your account</p>
        <form className="login__form--inputs">
          <label>Username</label>
          <input type="text" />
          <label>Password</label>
          <input type="text" />
          <button>Sign in</button>
        </form>
        <div className="login__form--register">
          <p>Don't have account ?</p>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
