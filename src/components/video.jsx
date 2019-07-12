import React, { Component } from 'react'; // irc [tab]

class Video extends Component { // rcc [tab]
	state = {
		lang : [["Ljudi", "Mašine"], ["People", "Machines"]],
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
		
		const { lang, selectedLang } = this.state

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
				<source src="/vids/nikolija.webm" type="video/webm" />
				<source src="/vids/nikolija.ogv" type="video/ogg" />
				
			</video>

			<div className="fp_button lang lang_en" onClick={this.setEng}>EN</div>
			<div className="fp_button lang lang_sr" onClick={this.setSer}>SR</div>
			<div className="fp_button sect sect_peop">{lang[selectedLang][0]}</div>
			<div className="fp_button sect sect_mach">{lang[selectedLang][1]}</div>
			</div> )
	}
}

export default Video;