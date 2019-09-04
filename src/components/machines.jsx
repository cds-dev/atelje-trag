import React, { Component } from 'react'; // irc [tab]
import AboutMachines from './aboutMachines';
import Equipment from './equipment';
import NavBar from './navbar';
import Footer from './footer';
import Logo from './logo';

class Machines extends Component {
	// state = {
		
	// }

	render() {
		const selected = this.props.selected;
		return ( 
			<main className="onTop">
				<NavBar lang={selected} setEng={this.props.setEng} setSer={this.props.setSer} />
				<Logo lang={selected} />
				<AboutMachines lang={selected} />
				<Equipment lang={selected} />
				<Footer lang={selected} />
			</main> )
	}
}
export default Machines;