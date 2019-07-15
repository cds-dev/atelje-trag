import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

class NavBar extends Component {
	//state = {}

	render() {
		return ( <nav><ul>
			<div className="mainNav">
				<Link to='/people#aboutus'><li>O nama</li></Link>
				<Link to='/machines#aboutstudio'><li>O studiu</li></Link>
				<Link to='/people#clients'><li>Klijenti</li></Link>
				<Link to='/machines#equipment'><li>Oprema</li></Link>
				<Link to='/people#contact'><li>Kontakt</li></Link>
			</div>
			<div className="languages">
				<li>SR</li>
				<li>EN</li>
			</div>
			</ul></nav> )
	}
}
export default NavBar;