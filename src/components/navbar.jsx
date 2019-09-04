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

	componentDidMount() {
		function navChanges() {
			let mainNav = document.querySelector(".mainNav"),
				logoHolder = document.querySelector(".mini-logo-holder-aboutP"),
				logoLetters = document.querySelector(".logoLetters"),
				aHolder = document.querySelector(".aHolder"),
				tHolder = document.querySelector(".tHolder"),
				groundingHolder = document.querySelector(".groundingHolder"),
				groundingHolderHr = document.querySelector(".groundingHolder hr");
			if(mainNav) {
				if(window.pageYOffset > 200) {
					logoHolder.style.transition = "all .6s ease-in";
					logoLetters.style.transition = "all .3s ease-in";
					mainNav.style.background = "rgba(10, 10, 10, .8)";
					mainNav.style.margin = "-15px auto 0 auto";	
					mainNav.style.padding = "11px 0";	
					logoLetters.style.maxHeight = "51px";
					logoHolder.style.top = "-22px";	
					aHolder.style.fontSize = "57px";
					tHolder.style.fontSize = "25px";
					tHolder.style.bottom = "38px";
					groundingHolder.style.width = "25px";	
					groundingHolderHr.style.margin = "0";
					groundingHolder.style.opacity = "0";		
				}		
				else {
					logoHolder.style.transition = "all .8s ease-in";
					logoLetters.style.transition = "all .01s ease-in";
					mainNav.style.background = "none";	
					mainNav.style.margin = "0 auto 0 auto";
					mainNav.style.padding = "40px 0";
					logoLetters.style.maxHeight = "79px";
					logoHolder.style.top = "5px";
					aHolder.style.fontSize = "80px";
					tHolder.style.fontSize = "37px";
					tHolder.style.bottom = "55px";
					groundingHolder.style.width = "51px";	
					groundingHolderHr.style.margin = "5px";
					groundingHolder.style.opacity = "1";	
				}
			}
				
		}
	
		window.addEventListener("scroll", function() {
			navChanges()
		})

		function activeLinks() {
			const navLinks = document.querySelectorAll(".navLink");

			navLinks.forEach(function(it) {
				it.addEventListener("click", function(e) {
					navLinks.forEach(function(it) {
						// console.log(e.currentTarget)
						if (e.currentTarget.classList.contains("linkLeft") && !e.currentTarget.classList.contains("activeLeft")) {
							e.currentTarget.classList.add("activeLeft");
						}
						else if (e.currentTarget.classList.contains("linkRight") && !e.currentTarget.classList.contains("activeRight")) {
							e.currentTarget.classList.add("activeRight");
						}
						else if (it !== e.currentTarget && it.classList.contains("activeLeft")) {
							it.classList.remove("activeLeft");
						}
						else if (it !== e.currentTarget && it.classList.contains("activeRight")) {
							it.classList.remove("activeRight");
						}
					})
				})
			})
		}

		activeLinks();
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
						<Link className="navLink linkLeft" to='./'><li>{item1[lang]}</li></Link>
						<Link className="navLink linkLeft" to='./people#aboutus'><li>{item2[lang]}</li></Link>
						<Link className="navLink linkLeft" to='./people#clients'><li>{item4[lang]}</li></Link>
						</div>
						<div className="rightNav">
						<Link className="navLink linkRight" to='./machines#aboutstudio'><li>{item3[lang]}</li></Link>
						<Link className="navLink linkRight" to='./machines#equipment'><li>{item5[lang]}</li></Link>
						<Link className="navLink linkRight" to='./people#contact'><li>{item6[lang]}</li></Link>
						</div>
					</div>
				</ul>
			</nav>
		</div>
		)
	}
}
export default NavBar;