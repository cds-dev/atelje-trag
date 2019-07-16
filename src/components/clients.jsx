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
				{ this.state.clientList.map( cl => <div className={cl.cls}><img src={cl.img} alt={cl.alt} className={cl.cls} key={cl._id} /></div>)}
			</section> )
	}
}
export default Clients;