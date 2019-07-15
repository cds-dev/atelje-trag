import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
	state = {
    lang : [["Ljudi", "Mašine"], ["People", "Machines"]],
    //selectedLang: 0
  }

	render() {
		const { lang } = this.state;
		const language = this.props.selected;

		return ( 
			<div className="main">
				<div className="fp_button lang lang_en" onClick={this.props.setEng}>EN</div>
				<div className="fp_button lang lang_sr" onClick={this.props.setSer}>SR</div>
				<Link to='/people'><div className="fp_button sect sect_peop">{lang[language][0]}</div></Link>
				<Link to='/machines'><div className="fp_button sect sect_mach">{lang[language][1]}</div></Link>
			</div> )
	}
}
export default Home;