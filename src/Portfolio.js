import React, { Component } from 'react';
import styled from 'styled-components';
import coding from './img/coding.jpg';
import microblog from './img/microblog.png';
// import coding from './img/coding.jpg';

const Header = styled.header`
  max-width: 80%;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  padding-bottom: 2.074em;
`;

const H2 = styled.h2`
  font-size: 1.728em;
`;
const P = styled.p`
  line-height: 1.728em;
`;

const PortfolioList = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;
const Project = styled.a`
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 2.074em;
  color: black;
  textdecoration: 'none';
`;

const Img = styled.img`
  width: 300px
  height: auto;
  box-shadow: 0 3px 3px 2px rgba(174,174,179,0.8);
  border: 1px solid transparent;
`;

class Portfolio extends Component {
  render() {
    return (
      <main className="animated fadeIn">
        <Header>
          <H2>Portfolio</H2>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            cumque, mollitia exercitationem ipsa esse voluptate consequatur,
            fuga omnis nihil itaque facere error asperiores ea veritatis!
            Reiciendis soluta libero molestiae pariatur?
          </P>
        </Header>

        <PortfolioList>
          <Project
            href="https://ronismicroblog.herokuapp.com/"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <h3>Microblog</h3>
            <Img src={microblog} alt="Microblog" />
            <p>tech stack: react redux</p>
          </Project>
          <Project
            style={{ textDecoration: 'none' }}
            href="https://www.youtube.com/"
            target="_blank"
          >
            <h3>Microblog</h3>
            <Img src={coding} alt="Microblog" />
            <p>tech stack: react redux</p>
          </Project>
          <Project
            href="https://www.youtube.com/"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <h3>Microblog</h3>
            <Img src={coding} alt="Microblog" />
            <p>tech stack: react redux</p>
          </Project>
          <Project
            href="https://www.youtube.com/"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <h3>Microblog</h3>
            <Img src={coding} alt="Microblog" />
            <p>tech stack: react redux</p>
          </Project>
          <Project
            href="https://www.youtube.com/"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <h3>Microblog</h3>
            <Img src={coding} alt="Microblog" />
            <p>tech stack: react redux</p>
          </Project>
          <Project
            href="https://www.youtube.com/"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <h3>Microblog</h3>
            <Img src={coding} alt="Microblog" />
            <p>tech stack: react redux</p>
          </Project>
          <Project
            href="https://www.youtube.com/"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <h3>Microblog</h3>
            <Img src={coding} alt="Microblog" />
            <p>tech stack: react redux</p>
          </Project>
        </PortfolioList>
      </main>
    );
  }
}

Portfolio.defaultProps = {};

Portfolio.propTypes = {};

export default Portfolio;
