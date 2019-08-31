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

		return (
			
		<div>
			<nav>
				<ul>
					<div className="mainNav">
						<div className="leftNav">
						<Link className="linkLeft" to='./'><li>{item1[lang]}</li></Link>
						<Link className="linkLeft" to='./people#aboutus'><li>{item2[lang]}</li></Link>
						<Link className="linkLeft" to='./machines#aboutstudio'><li>{item3[lang]}</li></Link>
						</div>
						<div className="rightNav">
						<Link className="link" to='./people#clients'><li>{item4[lang]}</li></Link>
						<Link className="link" to='./machines#equipment'><li>{item5[lang]}</li></Link>
						<Link className="link" to='./people#contact'><li>{item6[lang]}</li></Link>
						</div>
					</div>
				</ul>
			</nav>
		</div>
		)
	}
}
export default NavBar;