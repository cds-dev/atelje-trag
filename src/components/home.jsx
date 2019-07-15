import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import People from './people';
//import Machines from './machines';

class Home extends Component {
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
				<div className="fp_button sect sect_peop"><Link to='/people'>{lang[selectedLang][0]}</Link></div>
				<div className="fp_button sect sect_mach"><Link to='/machines'>{lang[selectedLang][1]}</Link></div>
			</div> )
	}
}
export default Home;