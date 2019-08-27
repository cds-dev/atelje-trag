import React, { Component } from 'react';
import { getClients } from '../data/clients.js';
import Gallery from "react-photo-gallery";
//import ClientModal from './clientModal';

class Clients extends Component {
	state = {
		clientList: []
	}

	componentDidMount() {
		this.setState({
			clientList: getClients()
		});
	}

	openModal = (e) => {
		if(e.target.className === "client-wide") {
			this.state.clientList.forEach(client => {
			if (client.id === e.target.id) {
				document.getElementById('mod'+client.id).style.backgroundImage = "client.src";
				document.getElementById('mod'+client.id).style.display = "inline-block";
			}
		})
		}
		
	}

	closeModal = () => {
		document.querySelectorAll(".modal").forEach(modal => modal.style.display = "none");
	}

	render() {

		//let lang = this.props.lang;
		return (
			//<>
				<section id="clients" ><span>
				<Gallery photos={this.state.clientList} direction={"column"} onClick={this.openModal} /></span>
				{this.state.clientList.map(cl => <div
					className="modal"
					id={'mod'+cl.id}
					key={cl.id}
					//style={{background:`url(`+cl.src+`)`}}
					onClick={this.closeModal}>
					<img src={cl.src} alt={cl.alt} />
					<div className="modalDesc">{cl.txt}</div>
				</div>)}</section>
			//</>
			)
	}
}
export default Clients;