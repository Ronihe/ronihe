import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Contact from './Contact';

// style the nav
const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
`;

const PageTitle = styled.h1`
  position: relative;
  background: #fff;
  font-size: 2.986em;
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 1.2em;
  padding-bottom: 8px;
  color: black;
`;
const PageLinks = styled.div`
  padding-bottom: 50px;
  @media screen and (max-width: 530px) {
    max-width: 35%;
  }
`;
const StyledA = styled.a`
  margin-left: 1.728em;
`;

class NavBar extends Component {
  render() {
    return (
      <Wrapper>
        <NavLink style={{ textDecoration: 'none' }} to="/">
          <PageTitle>Roni He</PageTitle>
        </NavLink>
        <PageLinks>
          <NavLink style={{ textDecoration: 'none' }} to="/portfolio">
            {' '}
            Portfolio{' '}
          </NavLink>
          <StyledA
            style={{ textDecoration: 'none' }}
            href="https://medium.com/me/stories/public"
            target="_blank"
          >
            {' '}
            Blog{' '}
          </StyledA>

          <StyledA style={{ textDecoration: 'none' }} href="##" target="_blank">
            {' '}
            Resume{' '}
          </StyledA>
        </PageLinks>
      </Wrapper>
    );
  }
}

NavBar.defaultProps = {};

NavBar.propTypes = {};

export default NavBar;
