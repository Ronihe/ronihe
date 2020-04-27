import React, { Component } from 'react';
import styled from 'styled-components';
import coding from './img/coding.jpg';
import profile from './img/profile.jpg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.0736em;
  position: relative;
`;
const Bio = styled.div`
  flex: 3;
  @media screen and (max-width: 530px) {
    max-width: none;
  }
  max-width: 585px;
  padding-top: 1em;
`;
const MailTo = styled.a`
  border-bottom: 1px solid;
  text-decoration: none;
`;
const Shape = styled.div`
  flex: 1;
  object-fit: contain;
  @media screen and (max-width: 530px) {
    position: absolute;
    bottom: -45px;
  }
`;
const Coding = styled.img`
  top: 20%;
  width: 20%;
  right: 0;
  position: absolute;
  border-radius: 50%;
`;

const Profile = styled.img`
  width: 35%;
  border-radius: 50%;
  @media screen and (max-width: 530px) {
    left: 5%;
    width: 15%;
  }
`;

const P = styled.p`
  padding: 0 5.805em 1em 5.805em;
  line-height: 1.728em;
  @media screen and (max-width: 530px) {
    padding: 0 1em 0.5em 1em;
  }
`;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('Chatra', window.Chatra);

    return (
      <Wrapper className="animated fadeIn">
        <Bio>
          <P>
            <span role="img" aria-label="Hi">
              👋{' '}
            </span>{' '}
            I am a motivated software engineer and CPA with more than 6 years of
            experience in accounting and business operations. I have worked
            closely with Engineering teams developing business software.{' '}
          </P>

          <P>
            I am experienced in Javascript, Python, React, Redux, React Native,
            Flask, PostgreSQL, Node.js, Express, SQL, Git, Jest, detox. I am
            self-driven and eager to learn new technologies and skill sets.
          </P>

          <P>
            I am fluent in Mandarin. You can reach me&nbsp;
            <MailTo
              href="#"
              onClick={e => {
                e.preventDefault();
                window.Chatra('show');
                window.Chatra('openChat');
              }}
              style={{ color: '#83558a' }}
            >
              here.
              <i class="fas fa-comments" />
            </MailTo>
          </P>
        </Bio>

        <Shape>
          <a href="https://www.linkedin.com/in/ronihe/" target="_blank">
            <Profile
              src={profile}
              alt=""
              className="animated fadeInDown animation-delay: 1s"
            />
          </a>
          <a href="https://angel.co/ronihe" target="_blank">
            <Coding
              src={coding}
              alt="coding"
              className="animated fadeInDown animation-delay: 1.2s"
            />
          </a>
        </Shape>
      </Wrapper>
    );
  }
}

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
