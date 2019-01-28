import React, { Component } from 'react';
import styled from 'styled-components';
import coding from './img/coding.jpg';
import Contact from './Contact';

const Wrapper = styled.div`
  margin-bottom: 8.5em;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.0736em;
  position: relative;
`;
const Bio = styled.div`
  max-width: 585px;
  padding-top: 1em;
  @media screen and (max-width: 530px) {
    max-width: none;
  }
`;
const MailTo = styled.a`
  border-bottom: 1px solid;
  color: #83558a;
  text-decoration: none;
`;
const Shape = styled.div`
  @media screen and (max-width: 530px) {
    position: absolute;
    bottom: -120px;
  }
`;
const Coding = styled.img`
  width: 30%;
  right: 5%;
  position: absolute;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Wrapper className="animated fadeIn">
          <Bio>
            <p>
              👋 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              fuga aperiam cum totam fugit tempora delectus dolores, aut
              praesentium nostrum voluptatibus sequi labore consequatur magnam
              cupiditate sunt porro exercitationem reprehenderit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              fuga aperiam cum totam fugit tempora delectus dolores, aut
              praesentium nostrum voluptatibus sequi labore consequatur magnam
              cupiditate sunt porro exercitationem reprehenderit!
            </p>
            <p>
              If any of the above interest you,&nbsp;
              <MailTo href="mailto:laurenicolesmith@gmail.com">
                let's chat.
              </MailTo>
            </p>
          </Bio>
          <Shape>
            <Coding src={coding} alt="coding" className="animated fadeInDown" />
          </Shape>
        </Wrapper>
      </div>
    );
  }
}

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
