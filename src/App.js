import React, { Component } from 'react';
import './scss/App.scss';
import Video from './components/video'
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import People from './components/people';
import Machines from './components/machines';

// function App() {
class App extends Component {
  state = {
    //lang : [["Ljudi", "Mašine"], ["People", "Machines"]],
    selectedLang: 0
  }

  setEng = () => {
    const selectedLang = 1;
    this.setState({
      selectedLang
    });
  }
  setSer = () => {
    const selectedLang = 0;
    this.setState({
      selectedLang
    });
  }
  render() {
    //const langS = this.state.selectedLang;
    return (
      <div className="App">
        <Video />
        <div className="content">
          <Switch>
            <Route
              path="/people"
              render={props => <People selected={this.state.selectedLang}
                {...props}
                setSer={this.setSer}
                setEng={this.setEng} />} />
            <Route
              path="/machines"
              render={props => <Machines selected={this.state.selectedLang}
                {...props}
                setSer={this.setSer}
                setEng={this.setEng} />} />
            <Route
              path="/"
              render={props => <Home selected={this.state.selectedLang}
                {...props}
                setSer={this.setSer}
                setEng={this.setEng} />}
            />
          </Switch></div>
      </div>
    );
  }
}

export default App;
