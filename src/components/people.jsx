import React, { Component } from 'react'; // irc [tab]
import AboutPeople from './aboutPeople';
import Clients from './clients';
import Footer from './footer';
import NavBar from './navbar';

class People extends Component {
	//state = {}

	render() {
		const selected = this.props.selected;
		return ( 
			<main className="onTop" >
				<NavBar lang={selected} setEng={this.props.setEng} setSer={this.props.setSer} />
				<AboutPeople lang={selected} />
				<Clients lang={selected} />
				<Footer lang={selected} />
			</main> )
	}
}
export default People;