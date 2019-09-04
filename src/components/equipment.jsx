import React, { Component } from 'react';

class Equipment extends Component {
	state = {
		title: ["Oprema", "Equipment"],
		text: [
			[`OpremaSR: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet fugiat similique error impedit 
			ut fuga nisi voluptate veritatis nihil quas ipsam vel sunt alias tempora laboriosam quia, ipsum 
			ab assumenda aut laborum id animi iure. Reprehenderit quaerat architecto adipisci sunt autem impedit 
			fugiat veritatis recusandae error, iste nisi, dignissimos distinctio consequatur vitae rem quos beatae 
			illum eveniet? Aut dicta deleniti excepturi, blanditiis voluptatum, tempore? Voluptatibus provident, 
			officia fugiat, est incidunt ad labore sequi necessitatibus perspiciatis, quis delectus. Reprehenderit quaerat 
			architecto adipisci sunt autem impedit fugiat veritatis recusandae error, iste nisi, dignissimos distinctio 
			consequatur vitae rem quos beatae illum eveniet? Aut dicta deleniti excepturi, blanditiis voluptatum, tempore? 
			Voluptatibus provident, officia fugiat, est incidunt ad labore sequi necessitatibus perspiciatis, quis delectus.
			`],

			[`OpremaEN: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet fugiat similique error impedit 
			ut fuga nisi voluptate veritatis nihil quas ipsam vel sunt alias tempora laboriosam quia, ipsum 
			ab assumenda aut laborum id animi iure. Reprehenderit quaerat architecto adipisci sunt autem impedit 
			fugiat veritatis recusandae error, iste nisi, dignissimos distinctio consequatur vitae rem quos beatae 
			illum eveniet? Aut dicta deleniti excepturi, blanditiis voluptatum, tempore? Voluptatibus provident, 
			officia fugiat, est incidunt ad labore sequi necessitatibus perspiciatis, quis delectus. Reprehenderit quaerat 
			architecto adipisci sunt autem impedit fugiat veritatis recusandae error, iste nisi, dignissimos distinctio 
			consequatur vitae rem quos beatae illum eveniet? Aut dicta deleniti excepturi, blanditiis voluptatum, tempore? 
			Voluptatibus provident, officia fugiat, est incidunt ad labore sequi necessitatibus perspiciatis, quis delectus.`]
		]
	}

	componentDidMount() {
		let equipImg1 = document.querySelector(".equipImg1");
		let equipImg2 = document.querySelector(".equipImg2");
		let equipImg3 = document.querySelector(".equipImg3");
		let equipImg4 = document.querySelector(".equipImg4");

		window.scrollTo(0,0);
		window.addEventListener("scroll", function() {
		// console.log(window.pageYOffset)
			if(window.pageYOffset > 900) {
				// setTimeout(function () {
					equipImg1.style.left = "0";
					equipImg2.style.right = "0";
				// }, 850);
				setTimeout(function () {
					equipImg1.style.opacity = "1";
					equipImg2.style.opacity = "1";
					equipImg3.style.left = "0";
					equipImg4.style.right = "0";
				}, 600);
				setTimeout(function () {
					equipImg3.style.opacity = "1";
					equipImg4.style.opacity = "1";
				}, 1200);
			}
		})
	}
	
	render() {
		const { title, text } = this.state;
		let lang = this.props.lang;
		return ( 
		<section className="equipment" id="equipment">
			<div className="equipmentContentWrapper">
				<div className="equipmentTxtWrapper">
					<h2>{title[lang]}</h2>
					<p>{text}</p>
				</div>
				<div className="equipmentImgsWrapper">
					<div className="equipTopImgs">
					<div className="inner1"><div className="equipImg1"></div></div>
						<div className="equipImg2"></div>
					</div>
					<div className="equipBottomImgs">
						<div className="equipImg3"></div>
						<div className="equipImg4"></div>
					</div>
				</div>
			</div>
			
		</section> 
		)
	}
}
export default Equipment;