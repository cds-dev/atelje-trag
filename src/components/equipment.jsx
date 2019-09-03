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