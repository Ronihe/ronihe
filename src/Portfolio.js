import React, { Component } from 'react';
import styled from 'styled-components';
import microblog from './img/microblog.png';
import groupmuse from './img/groupmuse.png';
import libellis from './img/libellis.png';
import jobly from './img/jobly.png';
import paleo from './img/paleo.png';

const Header = styled.header`
  max-width: 80%;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  padding-bottom: 1em;
`;
const SubHeader = styled.header`
  text-align: center;
  max-width: 80%;
  margin-top: 0px;
  margin-bottom: -35px;
  margin-left: 10%;
  @media screen and (max-width: 568px) {
    margin-left: 25%;
  }
`;

const H2 = styled.h2`
  font-size: 1.728em;
  color: black;
`;

const ProjectDescription = styled.div`
  margin-top: 0px;
  margin-left: 2em;
  @media (min-width: 868px) {
    margin-top: 75px;
  }
`;

const H4 = styled.p`
  line-height: 1.728em;
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
  @media (min-width: 868px) {
    flex-direction: row;
  }
`;
const Project = styled.div`
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 2em 0 0 2em;
  color: black;
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
          <a
            href="https://github.com/Ronihe"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <H2>Portfolio</H2>
          </a>
          <H4>
            During the 17-week in-person accelerated full stack web development
            course, I created over 30 web and mobile applications with
            techonologies and frameworks learned in class while pairing at
            school. I also built a couple side projects outside of school. Prior
            to coding boot camp, I also built{' '}
            <a
              href="https://mightybillingrocks.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#83558a' }}
            >
              a website site for the finance and accounting team
            </a>{' '}
            which contains a product margin calculator.{' '}
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
                rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
                >
                  <i
                    className="fab fa-apple fa-2x"
                    title="GitHub"
                    alt="github"
                  />{' '}
                  IOS Application{' '}
                </a>
              </li>
            </Project>
            <ProjectDescription>
              <H4>Tech Stack: &emsp;React-Native, Redux, Ruby on Rails</H4>

              <H4>
                Groupmuse is bringing chamber music to the living room,
                organizing intimate house shows with professional classical
                musicians. This mobile app makes it easier for users to find
                upcoming shows and pay for the musicians.
              </H4>
              <H4>
                Collaborated on a six person team to refactor, debug and build
                new features to a live React Native codebase, such as native map
                integration, React Native accessibility features for VoiceOver
                (iOS) and TalkBack (Android), etc.
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
              <a
                href="www"
                target="_blank"
                style={{ textDecoration: 'none' }}
                rel="noopener noreferrer"
              >
                <h3 style={{ color: 'black' }}>Libellis</h3>
                <Img src={libellis} alt="Libellis" />
              </a>

              <li className="list-group-item text-center">
                <a
                  href="https://github.com/libellis"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <i
                    className="fab fa-github-square fa-2x"
                    title="GitHub"
                    alt="github"
                  />{' '}
                  GitHub{' '}
                </a>
              </li>
            </Project>
            <ProjectDescription>
              <H4>
                Tech Stack: &emsp;React, Redux, Node.js,Express, PostgreSQL{' '}
              </H4>
              <H4>
                Libellis is an interactive ranked media voting applicationwith a
                simple API for users to create, share, and vote on surveys,
                where each survey question would effictively be a poll. Users
                can vote in polls by dragging and dropping streaming media to
                vote.
              </H4>
              <H4>
                Collaborated with two Rithm alumini, participated in building
                Libellis API, front-end, adding geo-fencing to the database.{' '}
              </H4>
            </ProjectDescription>
          </ProjectPair>

          <ProjectPair>
            <Project>
              <a
                href="https://expo.io/@ronihe/paleo-checker"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <h3 style={{ color: 'black' }}>Paleo Food Checker</h3>
                <Img src={paleo} alt="paleo" />
              </a>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  maxWidth: '300px'
                }}
              >
                <li className="list-group-item text-center">
                  <a
                    href="https://github.com/Ronihe/paleo-checker-android-app"
                    style={{ textDecoration: 'none', color: 'black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-github-square fa-2x"
                      title="GitHub"
                      alt="github"
                    />{' '}
                    GitHub{' '}
                  </a>
                </li>
                <li className="list-group-item text-center">
                  <a
                    href="https://expo.io/@ronihe/paleo-checker"
                    style={{ textDecoration: 'none', color: 'black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fas fa-globe fa-2x"
                      title="GitHub"
                      alt="github"
                    />
                    Expo
                  </a>
                </li>
                <li className="list-group-item text-center">
                  <a
                    href="https://expo.io/artifacts/63b6f23a-0808-4667-b69b-49fac19f4396"
                    style={{ textDecoration: 'none', color: 'black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-android fa-2x"
                      title="GitHub"
                      alt="github"
                    />
                    APK
                  </a>
                </li>
              </div>
            </Project>
            <ProjectDescription>
              <H4>Tech Stack: &emsp;React Native</H4>
              <H4>
                Built the android mobile application with React Native, Clarifai
                API and Edaman API. Users can take a picture of the food or
                import a picture from their photo library. The mobile app will
                detect the ingredients in the picture and display the paleo
                facts of the ingredients .
              </H4>
              <H4>
                I wrote an{' '}
                <a
                  href="https://medium.com/@herongrong2011/i-converted-my-react-web-app-to-react-native-mobile-app-1d014d19cbbc"
                  style={{ color: '#83558a' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  <i
                    className="fab fa-medium"
                    aria-hidden="true"
                    title="medium"
                    alt="medium"
                  />{' '}
                  Medium blog{' '}
                </a>
                about how I converted a React web application to React Native
                mobile application.
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
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <h3 style={{ color: 'black' }}>Microblog</h3>
                <Img src={microblog} alt="Microblog" />
              </a>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  maxWidth: '300px'
                }}
              >
                <li className="list-group-item text-center">
                  <a
                    href="https://github.com/Ronihe/microblog"
                    style={{ textDecoration: 'none', color: 'black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-github-square fa-2x"
                      title="GitHub"
                      alt="github"
                    />{' '}
                    GitHub{' '}
                  </a>
                </li>
                <li className="list-group-item text-center">
                  <a
                    href="https://ronismicroblog.herokuapp.com/"
                    style={{ textDecoration: 'none', color: 'black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fas fa-globe fa-2x"
                      title="GitHub"
                      alt="github"
                    />
                    Site
                  </a>
                </li>
              </div>
            </Project>
            <ProjectDescription>
              <H4>
                Tech Stack: &emsp;React, Redux, Node.js,Express, PostgreSQL{' '}
              </H4>
              <H4>
                Built the backend and frontend for a blog posting web
                application. Users can post, edit, comment and vote blogs.
              </H4>
              Utilized React, Router, Redux, combineReducers to build the
              interactive front end. Thoughtfully designed the database with
              PostgreSQL and backend with Node.js and Express.js.
              <H4 />
            </ProjectDescription>
          </ProjectPair>
          <ProjectPair>
            <Project>
              <a
                href="https://joblyfrontend.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <h3 style={{ color: 'black' }}>Jobly</h3>
                <Img src={jobly} alt="jobly" />
              </a>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  maxWidth: '300px'
                }}
              >
                <li className="list-group-item text-center">
                  <a
                    href="https://github.com/Ronihe/react-jobly"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <i
                      className="fab fa-github-square fa-2x"
                      title="GitHub"
                      alt="github"
                    />
                    GitHub
                  </a>
                </li>
                <li className="list-group-item text-center">
                  <a
                    href="https://joblyfrontend.herokuapp.com/"
                    style={{ textDecoration: 'none', color: 'black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fas fa-globe fa-2x"
                      title="globe"
                      alt="globe"
                    />
                    Site
                  </a>
                </li>
              </div>
            </Project>
            <ProjectDescription>
              <H4>
                Tech Stack: &emsp;React, Redux, Node.js,Express, PostgreSQL{' '}
              </H4>

              <H4>
                Built the backend and frontend for a Job searching application.
                Companies can post jobs and job seekers can apply for jobs and
                see the state of their applications
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
