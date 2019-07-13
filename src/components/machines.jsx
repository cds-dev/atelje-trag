import React, { Component } from 'react'; // irc [tab]
import AboutMachines from './aboutMachines';
import Equipment from './equipment';
import Footer from './footer';

class Machines extends Component {
	//state = {}

	render() {
		return ( 
			<main className="onTop">
				Machines go here
				<AboutMachines />
				<Equipment />
				<Footer />
			</main> )
	}
}
export default Machines;