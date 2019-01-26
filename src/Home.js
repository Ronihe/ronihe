import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Home">
        <h2>Hello Test</h2>
      </div>
    );
  }
}

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
