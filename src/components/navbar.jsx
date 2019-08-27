import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class NavBar extends Component {
	state = {
		item1: ["Početna", "Home"],
		item2: ["O nama", "About us"],
		item3: ["O studiu", "Studio"],
		item4: ["Klijenti", "Clients"],
		item5: ["Oprema", "Equipment"],
		item6: ["Kontakt", "Contact"],
	}

	render() {
		const { item1, item2, item3, item4, item5, item6 } = this.state;
		//const lang = this.props.selectedLang
		let lang = this.props.lang;

		return (<nav><ul>
			<div className="mainNav">
				<Link to='./'><li>{item1[lang]}</li></Link>
				<Link to='./people#aboutus'><li>{item2[lang]}</li></Link>
				<Link to='./machines#aboutstudio'><li>{item3[lang]}</li></Link>
				<Link to='./people#clients'><li>{item4[lang]}</li></Link>
				<Link to='./machines#equipment'><li>{item5[lang]}</li></Link>
				<Link to='./people#contact'><li>{item6[lang]}</li></Link>
			</div>
			<div className="languages">
				<li onClick={this.props.setSer}>SR</li>
				<li onClick={this.props.setEng}>EN</li>
			</div>
		</ul></nav>
		)
	}
}
export default NavBar;