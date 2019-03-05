import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from './img/coffee.png';

// style the nav
const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
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
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 530px) {
    flex-direction: column;
  }
`;
const NavButton = styled.div`
  margin: 0 1.5em;
  border: 0;
  border-radius: 0;
  padding: 0;
  color: #83558a;
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
`;
const Logo = styled.img`
  width: 8%;
  position: absolute;
  top: 25px;
  left: 160px;
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
      <Wrapper style={{ position: 'relative', top: '20px' }}>
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
            href="https://medium.com/@herongrong2011"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NavButton>Blog</NavButton>
          </a>

          <a
            style={{ textDecoration: 'none', color: '#83558a' }}
            href="https://docs.google.com/document/d/1XLNSlrIKUnb0WORaNj3JkNmjbcaQqEqLZQa_Aemi4VQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NavButton>Resume</NavButton>
          </a>
        </PageLinks>
      </Wrapper>
    );
  }
}

NavBar.defaultProps = {};

export default NavBar;
