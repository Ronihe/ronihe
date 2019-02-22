import React, { Component } from 'react';
import styled from 'styled-components';
import microblog from './img/microblog.png';
import groupmuse from './img/groupmuse.png';
import libellis from './img/libellis.png';
// import coding from './img/coding.jpg';

const Header = styled.header`
  max-width: 80%;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  padding-bottom: 2.074em;
`;
const SubHeader = styled.header`
  max-width: 80%;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: -35px;
  margin-left: auto;
`;

const H2 = styled.h2`
  font-size: 1.728em;
`;

const ProjectDescription = styled.div`
  margin-top: 0px;
  @media (min-width: 768px) {
    margin-top: 65px;
  }
`;

const H4 = styled.h4`
  line-height: 1.728em;
  }
`;

const PortfolioList = styled.section`
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-bottom: 2.074em;
`;
const ProjectPair = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Project = styled.div`
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 2.074em 2.074em 0 2.074em;
  color: black;
  'textdecoration': 'none';
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
          <H4>
            One company project, which is a react native mobile app for IOS and
            Android. we did about 30 apps during the My side prject, one android
            mobile app.
          </H4>
        </Header>

        <SubHeader>
          <H2>Company Project</H2>
        </SubHeader>
        <PortfolioList>
          <ProjectPair>
            <Project>
              <a
                href="https://itunes.apple.com/us/app/groupmuse/id942675649"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <h3 style={{ color: 'black' }}>Groupmuse</h3>
                <Img src={groupmuse} alt="groupmuse" />
              </a>
              <li className="list-group-item text-center">
                <a
                  href="https://itunes.apple.com/us/app/groupmuse/id942675649"
                  style={{ textDecoration: 'none', color: 'black' }}
                  target="_blank"
                >
                  <i
                    className="fab fa-apple fa-2x"
                    title="GitHub"
                    alt="github"
                  />
                  IOS Application
                </a>
              </li>
            </Project>
            <ProjectDescription>
              <p>tech stack: React-Native Redux</p>
              <H4>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita totam dolor magni iusto tempora, consequuntur numquam
                illo ab exercitationem impedit optio, dolore laboriosam fuga
                quaerat perferendis dolorum dicta laborum nostrum.
              </H4>
              <H4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                velit. Nihil architecto hic distinctio cupiditate, alias
                provident quis perspiciatis blanditiis libero recusandae quia
                minus nemo nobis officiis, error iste animi.
              </H4>
            </ProjectDescription>
          </ProjectPair>
        </PortfolioList>

        <SubHeader>
          <H2>Side Project</H2>
        </SubHeader>
        <PortfolioList>
          <ProjectPair>
            <Project>
              <a href="www" target="_blank" style={{ textDecoration: 'none' }}>
                <h3 style={{ color: 'black' }}>Libellis</h3>
                <Img src={libellis} alt="Libellis" />
              </a>
              <p>tech stack: React Redux</p>
              <li className="list-group-item text-center">
                <a
                  href="https://github.com/libellis"
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
            <ProjectDescription>
              <H4>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita totam dolor magni iusto tempora, consequuntur numquam
                illo ab exercitationem impedit optio, dolore laboriosam fuga
                quaerat perferendis dolorum dicta laborum nostrum.
              </H4>
              <H4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                velit. Nihil architecto hic distinctio cupiditate, alias
                provident quis perspiciatis blanditiis libero recusandae quia
                minus nemo nobis officiis, error iste animi.
              </H4>
            </ProjectDescription>
          </ProjectPair>
        </PortfolioList>

        <SubHeader>
          <H2>School Projects</H2>
        </SubHeader>
        <PortfolioList>
          <ProjectPair>
            <Project>
              <a
                href="https://ronismicroblog.herokuapp.com/"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <h3 style={{ color: 'black' }}>Microblog</h3>
                <Img src={microblog} alt="Microblog" />
              </a>
              <li className="list-group-item text-center">
                <a
                  href="https://github.com/Ronihe/microblog"
                  style={{ textDecoration: 'none', color: 'black' }}
                  target="_blank"
                >
                  <i
                    className="fab fa-github-square fa-2x"
                    title="GitHub"
                    alt="github"
                  />
                  GitHub Repo{' '}
                </a>
              </li>
              <li className="list-group-item text-center">
                <a
                  href="https://ronismicroblog.herokuapp.com/"
                  style={{ textDecoration: 'none', color: 'black' }}
                  target="_blank"
                >
                  <i
                    className="fas fa-globe fa-2x"
                    title="GitHub"
                    alt="github"
                  />
                  Live Site{' '}
                </a>
              </li>
            </Project>
            <ProjectDescription>
              <H4>Tech Stack: React Redux</H4>
              <H4>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita totam dolor magni iusto tempora, consequuntur numquam
                illo ab exercitationem impedit optio, dolore laboriosam fuga
                quaerat perferendis dolorum dicta laborum nostrum.
              </H4>
              <H4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                velit. Nihil architecto hic distinctio cupiditate, alias
                provident quis perspiciatis blanditiis libero recusandae quia
                minus nemo nobis officiis, error iste animi.
              </H4>
            </ProjectDescription>
          </ProjectPair>
          <ProjectPair>
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
            <ProjectDescription>
              <H4>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita totam dolor magni iusto tempora, consequuntur numquam
                illo ab exercitationem impedit optio, dolore laboriosam fuga
                quaerat perferendis dolorum dicta laborum nostrum.
              </H4>
              <H4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                velit. Nihil architecto hic distinctio cupiditate, alias
                provident quis perspiciatis blanditiis libero recusandae quia
                minus nemo nobis officiis, error iste animi.
              </H4>
            </ProjectDescription>
          </ProjectPair>
        </PortfolioList>
      </main>
    );
  }
}

Portfolio.defaultProps = {};

Portfolio.propTypes = {};

export default Portfolio;
