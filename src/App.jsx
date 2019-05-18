import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles/App.css';
import formatData from './helpers/formatData';

import Overview from './components/Overview.jsx';
import Detail from './components/Detail.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      activeGroup: 0
    };
    this.handleGroup = this.handleGroup.bind(this);
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(tasks => this.setState({ groups: formatData(tasks) }))
      .catch(err => console.error('Error: ', err));
  }

  handleGroup(e) {
    const activeGroup = parseInt(e.currentTarget.getAttribute('id'), 10);
    this.setState({ activeGroup });
  }

  render() {
    return (
      <Router>
        <Route path="/" exact render={props => <Overview {...props} groups={this.state.groups} handleGroup={this.handleGroup} />} />
        <Route path="/detail" exact render={props => <Detail {...props} tasks={this.state.groups[this.state.activeGroup]} />} />
      </Router>
    );
  }
}

export default App;