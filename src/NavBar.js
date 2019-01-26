import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav>
        <NavLink to="/"> Roni He</NavLink>
        <NavLink to="/portfolio"> Portfolio </NavLink>
        <a href="www.google.com">Blog</a>
        <Link to="##">Resume</Link>
      </nav>
    );
  }
}

NavBar.defaultProps = {};

NavBar.propTypes = {};

export default NavBar;
