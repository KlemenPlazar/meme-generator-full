import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }
  handleLogin = e => {
    e.preventDefault();

    const { login } = this.props;
    const username = this.usernameRef.current.value;
    const password = this.passwordRef.current.value;

    login(username, password);
    this.props.history.push('/');
  };
  handleReset = e => {
    e.preventDefault();
    this.usernameRef.current.value = null;
    this.passwordRef.current.value = null;
  };
  render() {
    return (
      <div className="meme-login-wrapper">
        <form>
          <div>
            <input type="text" placeholder="Username" ref={this.usernameRef} />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              ref={this.passwordRef}
            />
          </div>
          <div className="meme-login-buttons">
            <button className="btn" onClick={this.handleLogin}>
              Login
            </button>
            <button className="btn" onClick={this.handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
