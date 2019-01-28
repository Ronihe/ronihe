import React, { Component } from 'react';
import styled from 'styled-components';
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
const Project = styled.div`
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 2.074em;
`;

const Img = styled.img`
  width: 150px
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
          <Project>
            Placeholder
            <Img src="" alt="" />
          </Project>
          <Project>
            {' '}
            Placeholder
            <Img src="" alt="" />
          </Project>
          <Project>
            {' '}
            Placeholder
            <Img src="" alt="" />
          </Project>
          <Project>
            {' '}
            Placeholder
            <Img src="" alt="" />
          </Project>
          <Project>
            {' '}
            Placeholder
            <Img src="" alt="" />
          </Project>
          <Project>
            {' '}
            Placeholder
            <Img src="" alt="" />
          </Project>
          <Project>
            {' '}
            Placeholder
            <Img src="" alt="" />
          </Project>
        </PortfolioList>
      </main>
    );
  }
}

Portfolio.defaultProps = {};

Portfolio.propTypes = {};

export default Portfolio;
