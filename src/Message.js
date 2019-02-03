import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    return <div className="Message" />;
  }
}

Message.defaultProps = {};

Message.propTypes = {};

export default Message;
