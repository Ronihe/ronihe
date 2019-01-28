import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App animated fadeIn">
        <NavBar />
        <Routes />
        <Contact />
      </div>
    );
  }
}

export default App;
