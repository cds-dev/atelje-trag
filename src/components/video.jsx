import React, { Component } from 'react'; // irc [tab]


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
				poster="../imgs/Nikolija-background.jpg" 
				muted
				>
				<source src="./vids/nikolija.mp4" type="video/mp4" />
				<source src="./vids/nikolija.webm" type="video/webm" />
				<source src="./vids/nikolija.ogv" type="video/ogg" />
			</video>
			</div> 
			)
	}
}

export default Video;