import React, { Component } from 'react'; // irc [tab]
import Home from './home';
import People from './people';
import Machines from './machines';
import { Route } from 'react-router-dom';

class Video extends Component { // rcc [tab]
	state = {
		//selectedLang: 0
	}

	render() {
		return ( 
			<div>
			<div className="video"></div>
			<video 
				 id="bcg-video" 
				 autoPlay
				 loop 
				 // poster="../imgs/Nikolija-background.jpg" 
				 muted
				>
				<source src="/vids/nikolija.mp4" type="video/mp4" />
				<source src="//vids/nikolija.webm" type="video/webm" />
				<source src="//vids/nikolija.ogv" type="video/ogg" />
			</video>
			<div className="content onTop">
				<Route path="/machines" component={Machines} />
				<Route path="/people" component={People} />
				<Route exact path="/" component={Home} />
			</div>
			
			</div> 
			)
	}
}

export default Video;