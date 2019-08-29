import React, { Component } from 'react';
import { getClients } from '../data/clients.js';
import Gallery from "react-photo-gallery";
//import ClientModal from './clientModal';

class Clients extends Component {
	state = {
		clientList: []
	}

	componentDidMount = () => {
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

	componentDidUpdate = () => {
		const imgs = document.querySelectorAll('img');

		const gallery = [...imgs]
		gallery.shift()
		gallery.shift()

		for(let i = 0; i < gallery.length; i++) {
			if(this.state.clientList[i].className === 'client-wide') {
				gallery[i].className = 'client-wide'
			}
			else if (this.state.clientList[i].className === 'client-narrow') {
				gallery[i].className = 'client-narrow'
			}
	 	}
	 	const clickables = document.querySelectorAll('.client-wide')

		console.log(clickables)


		
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
					<div className="modalDesc" dangerouslySetInnerHTML={{__html: cl.txt}} />
				</div>)}</section>
			//</>
			)
	}
}
export default Clients;