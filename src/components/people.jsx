import React, { Component } from 'react'; // irc [tab]
import AboutPeople from './aboutPeople';
import Clients from './clients';
import Footer from './footer';
import NavBar from './navbar';

class People extends Component {
	//state = {}

	render() {
		return ( 
			<main className="onTop" >
				<NavBar />
				<AboutPeople />
				<Clients />
				<Footer />
			</main> )
	}
}
export default People;