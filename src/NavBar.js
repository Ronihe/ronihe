import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Contact from './Contact';
import logo from './img/coffee.png';

// style the nav
const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const PageTitle = styled.h1`
  background: transparent;
  font-size: 2.986em;
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 1.2em;
  padding-bottom: 8px;
`;
const PageLinks = styled.div`
  padding-bottom: 50px;
  @media screen and (max-width: 530px) {
    max-width: 35%;
  }
`;
const NavButton = styled.button`
  margin-left: 1.728em;
  border: 0;
  border-radius: 0;
  padding: 0;
  color: #83558a;
  font-family: 'Rubik', sans-serif;
  font-size: 1em;
`;
const Logo = styled.img`
  width: 8%;
  position: absolute;
  top: 25px;
  left: 130px;
  animation-duration: 5s;
  animation-delay: 3s;
  animation-iteration-count: infinite;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

class NavBar extends Component {
  render() {
    return (
      <Wrapper style={{ position: 'relative', top: '25px' }}>
        <div>
          <NavLink
            style={{
              textDecoration: 'none',
              position: 'relative',
              top: '25px',
              color: 'black'
            }}
            to="/"
          >
            <PageTitle>Roni He</PageTitle>
          </NavLink>
          <Logo src={logo} alt="logo" className="animated bounce delay-2s" />
        </div>
        <PageLinks>
          <NavLink
            style={{
              textDecoration: 'none',
              color: '#83558a'
            }}
            to="/portfolio"
          >
            <NavButton>Portfolio</NavButton>
          </NavLink>
          <a
            style={{ textDecoration: 'none', color: '#83558a' }}
            href="https://medium.com/me/stories/public"
            target="_blank"
          >
            <NavButton>Blog</NavButton>
          </a>

          <a
            style={{ textDecoration: 'none', color: '#83558a' }}
            href="##"
            target="_blank"
          >
            <NavButton>Resume</NavButton>
          </a>
        </PageLinks>
      </Wrapper>
    );
  }
}

NavBar.defaultProps = {};

NavBar.propTypes = {};

export default NavBar;
