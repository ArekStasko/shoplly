import React from "react";

class Login extends React.Component {
  constructor(){
    super()
    this.state = {
    textCount: 0  
    }
  }

  loginText = [
    {
title: 'Lorem ipsum',
description: 'Morbi tincidunt lacus purus, sed rhoncus lorem placerat aliquam. Curabitur et sodales tortor, id malesuada nibh. Nullam porta pretium lectus, nec ornare sapien interdum posuere.'
    },
    {
title: 'dolor sit amet',
description: 'Morbi tincidunt lacus purus, sed rhoncus lorem placerat aliquam. Curabitur et sodales tortor, id malesuada nibh. Nullam porta pretium lectus, nec ornare sapien interdum posuere.'
    },
    {
title: 'consectetur adipiscing',
description: 'Morbi tincidunt lacus purus, sed rhoncus lorem placerat aliquam. Curabitur et sodales tortor, id malesuada nibh. Nullam porta pretium lectus, nec ornare sapien interdum posuere.'
    }
  ]
  
  componentDidMount(){
    this.slideTimer = setInterval(()=>{
      if(this.state.textCount === this.loginText.length - 1){
        this.setState({textCount: 0})
      } else {
        this.setState({textCount: this.state.textCount + 1})
      }
    }, 3000)
  }

  render() {
    return (
      <div className="login">
        <div className="login__description">
          <div className="login__description--title">
            <h1>{this.loginText[this.state.textCount].title}</h1>
            <p>{this.loginText[this.state.textCount].description}</p>
          </div>
          <div className="login__description--slides"></div>
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
  }
}

export default Login;
