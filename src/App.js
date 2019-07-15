import React, { Component } from 'react';
import './scss/App.scss';
import Video from './components/video'
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import People from './components/people';
import Machines from './components/machines';

// function App() {
class App extends Component {
  render() {
  return (
    <div className="App">
        <Video/>
			<Switch>
				<Route path="/machines" component={Machines} />
				<Route path="/people" component={People} />
				<Route path="/" component={Home} />
			</Switch>
    </div>
  );
}}

export default App;
