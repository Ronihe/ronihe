import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/Portfolio" exact render={() => <Portfolio />} />
        <Redirect to="/" />
      </Switch>
    );
  }
}
export default Routes;
