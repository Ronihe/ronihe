import React, { Component } from 'react';
import styled from 'styled-components';
import coding from './img/coding.jpg';
import microblog from './img/microblog.png';
import groupmuse from './img/groupmuse.png';
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

const Project = styled.div`
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 2.074em;
  color: black;
  textdecoration: 'none';
  :hover {
    /* animation-name: 'rubberBand'; */
  }
`;

const Img = styled.img`
  width: 300px
  height: auto;
  box-shadow: 0 3px 3px 2px rgba(174,174,179,0.8);
  border: 1px solid transparent;
  :hover {
    opacity: 0.6;
  }
`;

class Portfolio extends Component {
  render() {
    return (
      <main className="animated fadeIn">
        <Header>
          <H2>Portfolio</H2>
          <P>
            One company project, which is a react native mobile app for IOS and
            Android. we did about 30 apps during the My side prject, one android
            mobile app.
          </P>
        </Header>

        <Header>
          <H2>Company project</H2>
        </Header>
        <PortfolioList>
          <Project
            href="https://itunes.apple.com/us/app/groupmuse/id942675649"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <h3>Groupmuse</h3>
            <Img src={groupmuse} alt="groupmuse" />
            <p>tech stack: React-Native Redux</p>
          </Project>
          <Project>dfk</Project>
        </PortfolioList>

        <Header>
          <H2>School Projects</H2>
        </Header>
        <PortfolioList>
          <Project>
            <a
              href="https://ronismicroblog.herokuapp.com/"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <h3 style={{ color: 'black' }}>Microblog</h3>
              <Img src={microblog} alt="Microblog" />
            </a>
            <p>tech stack: React Redux</p>
            <li className="list-group-item text-center">
              <a
                href="https://github.com/Ronihe/microblog"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <i
                  className="fab fa-github-square fa-2x"
                  title="GitHub"
                  alt="github"
                />
                GitHub Repo{' '}
              </a>
            </li>
          </Project>
          <Project>
            <a
              href="https://ronismicroblog.herokuapp.com/"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <h3 style={{ color: 'black' }}>Microblog</h3>
              <Img src={microblog} alt="Microblog" />
            </a>
            <p>tech stack: React Redux</p>
            <li className="list-group-item text-center">
              <a
                href="https://github.com/Ronihe/microblog"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <i
                  className="fab fa-github-square fa-2x"
                  title="GitHub"
                  alt="github"
                />
                GitHub Repo{' '}
              </a>
            </li>
          </Project>
          <Project>
            <a
              href="https://ronismicroblog.herokuapp.com/"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <h3 style={{ color: 'black' }}>Microblog</h3>
              <Img src={microblog} alt="Microblog" />
            </a>
            <p>tech stack: React Redux</p>
            <li className="list-group-item text-center">
              <a
                href="https://github.com/Ronihe/microblog"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <i
                  className="fab fa-github-square fa-2x"
                  title="GitHub"
                  alt="github"
                />
                GitHub Repo{' '}
              </a>
            </li>
          </Project>
          <Project>
            <a
              href="https://ronismicroblog.herokuapp.com/"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <h3 style={{ color: 'black' }}>Microblog</h3>
              <Img src={microblog} alt="Microblog" />
            </a>
            <p>tech stack: React Redux</p>
            <li className="list-group-item text-center">
              <a
                href="https://github.com/Ronihe/microblog"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <i
                  className="fab fa-github-square fa-2x"
                  title="GitHub"
                  alt="github"
                />
                GitHub Repo{' '}
              </a>
            </li>
          </Project>
          <Project>
            <a
              href="https://ronismicroblog.herokuapp.com/"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <h3 style={{ color: 'black' }}>Microblog</h3>
              <Img src={microblog} alt="Microblog" />
            </a>
            <p>tech stack: React Redux</p>
            <li className="list-group-item text-center">
              <a
                href="https://github.com/Ronihe/microblog"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <i
                  className="fab fa-github-square fa-2x"
                  title="GitHub"
                  alt="github"
                />
                GitHub Repo{' '}
              </a>
            </li>
          </Project>
          <Project>
            <a
              href="https://ronismicroblog.herokuapp.com/"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <h3 style={{ color: 'black' }}>Microblog</h3>
              <Img src={microblog} alt="Microblog" />
            </a>
            <p>tech stack: React Redux</p>
            <li className="list-group-item text-center">
              <a
                href="https://github.com/Ronihe/microblog"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <i
                  className="fab fa-github-square fa-2x"
                  title="GitHub"
                  alt="github"
                />
                GitHub Repo{' '}
              </a>
            </li>
          </Project>
        </PortfolioList>
      </main>
    );
  }
}

Portfolio.defaultProps = {};

Portfolio.propTypes = {};

export default Portfolio;
