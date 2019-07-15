import React from 'react';
import './scss/App.scss';
import Video from './components/video'
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import People from './components/people';
import Machines from './components/machines';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
        <Video/>
      {/*</header>*/}
      <div className="content onTop"> 
			<Switch>
				<Route path="/machines" component={Machines} />
				<Route path="/people" component={People} />
				<Route path="/" component={Home} />
			</Switch>
		</div>
    </div>
  );
}

export default App;
