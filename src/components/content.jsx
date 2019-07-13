import React, { Component } from 'react';

class Content extends Component {
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
			<div className="main">
				<div className="fp_button lang lang_en" onClick={this.setEng}>EN</div>
				<div className="fp_button lang lang_sr" onClick={this.setSer}>SR</div>
				<div className="fp_button sect sect_peop">{lang[selectedLang][0]}</div>
				<div className="fp_button sect sect_mach">{lang[selectedLang][1]}</div>
			</div> )
	}
}
export default Content;