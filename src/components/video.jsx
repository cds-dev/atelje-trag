import React, { Component } from 'react'; // irc [tab]


class Video extends Component { // rcc [tab]
	state = {
		//selectedLang: 0
	}

	componentDidMount() {
		setTimeout(function () {
			document.querySelector(".video-wrapper").style.visibility = "visible";
			document.querySelector(".video-delay").play();
		}, 2000)
	}


	render() {
		return (
			<div>
				<div className="video"></div>
				<div className="video-wrapper">
					<video
						className="video-delay"
						id="bcg-video"
						// autoPlay
						loop
						poster="./imgs/Nikolija-background.jpg"
						muted
					>
						<source src="./vids/nikolija.mp4" type="video/mp4" />
						<source src="./vids/nikolija.webm" type="video/webm" />
						<source src="./vids/nikolija.ogv" type="video/ogg" />
					</video>
				</div>
			</div>
		)
	}
}

export default Video;