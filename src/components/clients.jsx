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
		//const kliks = document.querySelector('.clent-wide');
		const clickables = document.querySelectorAll('img');
		//while(kliks.length === 0) console.log("nothere yet")
		console.log(clickables)
		// const all = [...clickables]
		// const just = all[0].parentElement.firstElementChild.ownerDocument.images
		// console.log([...all[0].parentElement.firstElementChild.ownerDocument.images])
		// for(let i = 0; i < all.length; i++) {
		// 	console.log([...clickables][3].parentElement.firstElementChild.ownerDocument.images[i].classList[0]);
		// 	if([...clickables][3].parentElement.firstElementChild.ownerDocument.images[i].className === 'client-wide') {
		// 		console.log(i)
		// 	}
			
		// }
		// [...clickables].forEach(x => {

		// })
		// console.log([...clickables][3].parentElement.firstElementChild.ownerDocument.images[3]);
		// //clickables.forEach(x => console.log('test'));
		// //console.log([clickables])
		// console.log("dsc")
		
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