import React, { Component } from 'react';
import { getClients } from '../data/clients.js';
import Gallery from "react-photo-gallery";
//import ClientModal from './clientModal';

class Clients extends Component {
	state = {
		clientList: [],
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

	render() {
		setTimeout(() => {
			//span koji drzi glavni galerijski div.react-photo-gallery--gallery
			const spanWrapper = document.querySelector('#clients span')
			//div.react-photo-gallery--gallery
			let gall  = spanWrapper.childNodes[0]
			//div u kome su img-i
			let gallWrapper  = gall.childNodes[0]
			//klikabilni img-i
			const clickable = document.querySelectorAll('.client-wide')
			
            clickable.forEach(it => {
				let spanImgWrapper = document.createElement("span")
				//klasa za span
				spanImgWrapper.setAttribute("className", "imgSpan")
				//dodajem sliku u span
				spanImgWrapper.appendChild(it)
				//dodajem span u div koji drzi slike
				gallWrapper.appendChild(spanImgWrapper)

				console.log(gallWrapper )
			})
		}, 1000)
		
		//let lang = this.props.lang;
		setTimeout(() => {
			//span koji drzi glavni galerijski div.react-photo-gallery--gallery
			const spanWrapper = document.querySelector('#clients span')
			//div.react-photo-gallery--gallery
			let gall = spanWrapper.childNodes[0]
			//div u kome su img-i
			let gallWrapper = gall.childNodes[0]
			//klikabilni img-i
			const clickable = document.querySelectorAll('.client-wide')
			
            clickable.forEach(it => {
				let spanImgWrapper = document.createElement("span");
				//klasa za span
				spanImgWrapper.setAttribute("className", "imgSpan")
				//dodajem sliku u span
				spanImgWrapper.appendChild(it)
				//dodajem span u div koji drzi slike
				gallWrapper.appendChild(spanImgWrapper)

				console.log(gallWrapper)
			})
		}, 1000)

		console.log("test")
		return (

				<section id="clients" >
				<span><Gallery photos={this.state.clientList} direction={"column"} onClick={this.openModal} /></span>
				{this.state.clientList.map(cl => <div
					className="modal"
					id={'mod'+cl.id}
					key={cl.id}
					//style={{background:`url(`+cl.src+`)`}}
					onClick={this.closeModal}>
					<img src={cl.src} alt={cl.alt} className="modalSam"/>
					<div className="modalDesc" dangerouslySetInnerHTML={{__html: cl.txt}} />
				</div>)}
				</section>

			)
		
	}

}
export default Clients;