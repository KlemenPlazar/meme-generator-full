import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SidebarNav extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="leftSidebar">
        <div className="leftSidebar-item-wrapper">
          <span>
            <Link to="/">
              <img
                src={`${window.location.origin}/img/mm-home-on.svg`}
                alt="Home"
              />
            </Link>
          </span>
          <span>
            <Link to="#">
              <img
                src={`${window.location.origin}/img/mm-section-off.svg`}
                alt="Section"
              />
            </Link>
          </span>
          {user && (
            <span>
              <Link to="/create">
                <img
                  src={`${window.location.origin}/img/mm-create-off.svg`}
                  alt="Create"
                />
              </Link>
            </span>
          )}
        </div>
      </div>
    );
  }
}
