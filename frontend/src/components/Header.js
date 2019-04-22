import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SidebarNav from './SidebarNav';

export default class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <SidebarNav {...this.props} />
        <div className="container header">
          <Link to="/">
            <img
              src={`${window.location.origin}/img/memegenerator-purple.svg`}
              className="App-logo"
              alt="logo"
            />
          </Link>
          <div className="headerButtons">
            {!user ? (
              <React.Fragment>
                <Link to="/login" className="header-login">
                  Login
                </Link>
                /
                <Link to="/register" className="header-login">
                  Register
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link to="/logout" className="header-login">
                  Logout
                </Link>
                (<Link to="/profile">{user.username}</Link>)
              </React.Fragment>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
