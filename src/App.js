import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App animated fadeIn">
        <NavBar />
        <Routes />
      </div>
    );
  }
}

export default App;