import React, { Component } from 'react';

import './styles/App.css';
import formatData from './helpers/formatData';
import isLocked from './helpers/isLocked';

import Overview from './components/Overview.jsx';
import Detail from './components/Detail.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      groups: [],
      map: {},
      activeGroup: '',
      overviewComponent: true
    };

    this.handleGroup = this.handleGroup.bind(this);
    this.updateTasks = this.updateTasks.bind(this);
    this.handleComponent = this.handleComponent.bind(this);
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        const map = {};
        data.forEach(({ id }, index) => map[id] = index);

        const groups = formatData(data);
        data.forEach(e => { if (e.completedAt === null) e.completedAt = false })
        isLocked(map, data);

        this.setState({ data, groups, map });
      })
      .catch(err => console.error('Error: ', err));
  }

  handleComponent() {
    this.setState({ overviewComponent: !this.state.overviewComponent });
  }

  handleGroup(e) {
    const index = parseInt(e.currentTarget.getAttribute('id'), 10);
    const activeGroup = this.state.groups[index].name;
    this.setState({ activeGroup });
    this.handleComponent();
  }

  updateTasks(e) {
    const id = parseInt(e.target.getAttribute('id'), 10);
    const index = this.state.map[id];
    const updatedData = [...this.state.data];
    updatedData[index].completedAt = !updatedData[index].completedAt;
    isLocked(this.state.map, updatedData);
    const groups = formatData(updatedData);
    this.setState({ data: updatedData, groups });
  }

  render() {
    return (
      this.state.overviewComponent ? <Overview groups={this.state.groups} handleGroup={this.handleGroup} /> : <Detail group={this.state.activeGroup} data={this.state.data} updateTasks={this.updateTasks} handleComponent={this.handleComponent} />
    );
  }
}

export default App;