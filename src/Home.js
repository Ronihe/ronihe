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
            👋 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            fuga aperiam cum totam fugit tempora delectus dolores, aut
            praesentium nostrum voluptatibus sequi labore consequatur magnam
            cupiditate sunt porro exercitationem reprehenderit!
          </P>
          <P>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque fuga
            aperiam cum totam fugit tempora delectus dolores, aut praesentium
            nostrum voluptatibus.
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
