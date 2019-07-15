import React, { Component } from 'react';
import { getClients } from '../data/clients.js';

class Clients extends Component {
	state = {
		clientList : []
	}

	componentDidMount() {
		this.setState({
			clientList: getClients() 
		});
	}

	render() {
		//let lang = this.props.lang;
		return ( 
			<section className="clients" id="clients">
				{ this.state.clientList.map( cl => <img src={cl.img} alt={cl.alt} className={cl.cls} key={cl._id} />)}
			</section> )
	}
}
export default Clients;