import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 1.728em;
  position: relative;
`;
const Links = styled.div`
  position: absolute;
  left: 0;
`;
const Link = styled.a`
  border-bottom: 0;
  color: #342d33;
  font-size: 1.728em;
  margin-right: 1.2em;
  padding-bottom: 0;
  text-decoration: none;

  i {
    transform: translateY(0);
    transition: transform 0.2s ease;
  }

  :hover i {
    transform: translateY(-20px);
  }
`;

class Contact extends Component {
  render() {
    return (
      <Wrapper>
        <Links>
          <Link href="https://github.com/Ronihe" target="_blank" alt="github">
            <i class="fab fa-github animated SlideOutUp" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ronihe/"
            target="_blank"
            alt="LinkedIn"
          >
            <i class="fab fa-linkedin-in" />
          </Link>
          <Link
            href="https://twitter.com/herongrong2011"
            target="_blank"
            alt="twitter"
          >
            <i class="fab fa-twitter" />
          </Link>
          <Link href="https://angel.co/ronihe" target="_blank" alt="AngelList">
            <i class="fab fa-angellist" />
          </Link>
        </Links>
      </Wrapper>
    );
  }
}

Contact.defaultProps = {};

Contact.propTypes = {};

export default Contact;
