import React, { Component } from 'react';

class Equipment extends Component {
	state = {
		content: ["Oprema", "Equipment"]
	}
	
	render() {
		let lang = this.props.lang;
		return ( <section className="equipment" id="equipment">{this.state.content[lang]}</section> )
	}
}
export default Equipment;