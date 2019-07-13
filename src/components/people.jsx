import React, { Component } from 'react'; // irc [tab]
import AboutPeople from './aboutPeople';
import Clients from './clients';
import Footer from './footer';

class People extends Component {
	//state = {}

	render() {
		return ( 
			<main className="onTop" >
				<AboutPeople />
				<Clients />
				<Footer />
			</main> )
	}
}
export default People;