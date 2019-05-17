import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Overview from './components/Overview.jsx';
import Detail from './components/Detail.jsx';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Overview} />
        <Route path="/detail" exact component={Detail} />
      </Router>
    );
  }
}