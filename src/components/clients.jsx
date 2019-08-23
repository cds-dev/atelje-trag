import React, { Component } from 'react';
import { getClients } from '../data/clients.js';
//import ClientModal from './clientModal';

class Clients extends Component {
	state = {
		clientList : []
	}

	componentDidMount() {
		this.setState({
			clientList: getClients() 
		});
	}

	renderText = (id) => {
        if(1) return this.state.clientList.map(cl => <p key={cl._id}>{cl.txt}</p>);
        return null;
    }

	openModal = (id) => {
		
			this.state.clientList.forEach(client => {
				if(client._id === id && client.cls === "client-wide") {
					document.getElementById(client._id).style.display = "grid";
				}
			})
		}

	closeModal = () => {
		document.querySelectorAll(".modal").forEach(modal => modal.style.display = "none");
	}

	render() {
		
		//let lang = this.props.lang;
		return ( 
			<section className="clients" id="clients">
			{ 
				this.state.clientList.map( cl => 
					<>
					<div 
						className={cl.cls} 
						key={`box`+cl._id}
					>
					<img 
						src={cl.img} 
						alt={cl.alt} 
						className={cl.cls} 
						key={`img`+cl._id} 
						//id={cl._id} 
						onClick={() => this.openModal(cl._id)} />
					</div>
					<div 
						className="modal" 
						id={cl._id}
						key={`mod`+cl._id} 
						onClick={this.closeModal}>
						{cl.txt}
					</div>
					</>)
			}
				
			</section> )
	}
}
export default Clients;