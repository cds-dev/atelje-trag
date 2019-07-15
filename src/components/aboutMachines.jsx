import React, { Component } from 'react';

class AboutMachines extends Component {
	state = {
		content: ["O studiu", "About studio"]
	}
	
	render() {
		let lang = this.props.lang;
		return ( <section className="aboutMachines" id="aboutstudio">{this.state.content[lang]}</section> )
	}
}
export default AboutMachines;