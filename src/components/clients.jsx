import React, { Component } from 'react';
import { getClients } from '../data/clients.js';
import Gallery from "react-photo-gallery";
//import ClientModal from './clientModal';

class Clients extends Component {
	state = {
		title: ["Klijenti", "Clients"],
		clientList: [],
	}

	componentDidMount = () => {
		this.setState({
			clientList: getClients()
		});
	}

	openModal = (e) => {
		this.closeModal()

		if(e.target.className === "" || e.target.className === "client-wide") {
			
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

		const { title } = this.state.title;
		let lang = this.props.lang;

		setTimeout(() => {
			const spanWrapper = document.querySelector('#clients span')
			let gall  = spanWrapper.childNodes[0]
			let gallWrapper  = gall.childNodes[0]
			const clickable = document.querySelectorAll('.client-wide')
			
            clickable.forEach(it => {
				let spanImgWrapper = document.createElement("div")
				//klasa za span
				spanImgWrapper.setAttribute("className", "imgSpan")
				//dodajem sliku u span
				spanImgWrapper.appendChild(it)
				//dodajem span u div koji drzi slike
				gallWrapper.appendChild(spanImgWrapper)
				
				spanImgWrapper.style.content = "'test'";

				function BlackBox() {
					spanImgWrapper.style.width = `${it.clientWidth+1}px`;
				    spanImgWrapper.style.height = `${it.clientHeight+1}px`;
				    spanImgWrapper.style.left = `${it.offsetLeft}px`;
				    spanImgWrapper.style.top = `${it.offsetTop}px`;
				} 


				BlackBox()
				

				window.addEventListener("resize", function() {
					BlackBox()
				});
				
				spanImgWrapper.style.display = "inline-block";
				spanImgWrapper.style.position = "absolute";

				const blackBox = document.createElement('div')
				blackBox.setAttribute("className", "black-box");

				blackBox.innerHTML = '<span>' + this.state.clientList[it.id.substring(3,5) - 1].alt + '</span><span class="moveRight">...</span>';
				blackBox.id = this.state.clientList[it.id.substring(3,5) - 1].id;
				spanImgWrapper.appendChild(blackBox);


				blackBox.style.background = "#0007";
				blackBox.style.position = "absolute";
				// blackBox.style.border = "1px solid rgba(255, 5, 5, .5)";
				blackBox.style.zIndex = "300"
				blackBox.style.padding = "10px"
				blackBox.style.width = "86%"
				blackBox.style.textAlign = "left"
				blackBox.style.textTransform = "uppercase"
				blackBox.style.left = "7%";
				blackBox.style.cursor = "pointer";
				blackBox.style.bottom = "18px";
				blackBox.style.display = "inline-flex"
				blackBox.style.alignContent = "space-between"
				blackBox.style.justifyContent = "space-between"

				blackBox.addEventListener('click', this.openModal)

			})

		}, 1000)
		
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

			})
		}, 1000)

		return (

				<section id="clients" >
					<div className="titleAboutUs"><h2>{this.state.title[lang]}</h2></div>
				<span><Gallery photos={this.state.clientList} direction={"column"} onClick={this.openModal}  /></span>
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