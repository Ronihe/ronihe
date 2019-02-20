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
  color: #83558a;
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
    return (
      <Wrapper className="animated fadeIn">
        <Bio>
          <P>
            👋 I am an motivated software engineer and Licensed CPA with years
            of experience in accounting and business operation. Worked closely
            with Engineering teams developing business software.{' '}
          </P>

          <P>
            Experienced in Javascript, Python, Git, React, Redux, React Native,
            Flask, PostgreSQL, Node.js, Express, SQL, Git, detox. Highly
            self-driven and really eager to learn new technologies and skill
            sets
          </P>

          <P>
            I just graduated from{' '}
            <a href=" https://www.rithmschool.com/">Rithm School</a>. I am
            looking for a full-time software engineer job now.
          </P>
          <P>
            If any of the above interest you,&nbsp;
            <MailTo href="mailto:herongrong2011@gmail.com">let's chat.</MailTo>
          </P>
        </Bio>

        <Shape>
          <Profile
            src={profile}
            alt=""
            className="animated fadeInDown animation-delay: 1s"
          />
          <Coding
            src={coding}
            alt="coding"
            className="animated fadeInDown animation-delay: 1.2s"
          />
        </Shape>
      </Wrapper>
    );
  }
}

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
