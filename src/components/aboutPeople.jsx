import React, { Component } from 'react';

class AboutPeople extends Component {
	state = {
		title: ["O nama", "About us"],
		name: ["Nebojsa Arezina", "Marko Peruničić"],
		img: ["./imgs/nebojsa.jpg", "./imgs/marko.jpg"],
		text: [
		["NebojšaSR: Aliquid cumque quis dolorem, quaerat hic est. Ratione quas, temporibus, laudantium mollitia omnis quasi repellat possimus facere quia distinctio debitis laborum, ad?", 
		"MarkoSR: Vitae esse earum dolorem rem molestiae, quis veniam illo pariatur laudantium velit exercitationem consectetur numquam eveniet nobis iure ea ipsam accusantium inventore!"], 
		["NebojšaEN: Aliquid cumque quis dolorem, quaerat hic est. Ratione quas, temporibus, laudantium mollitia omnis quasi repellat possimus facere quia distinctio debitis laborum, ad?", 
		"MarkoEN: Vitae esse earum dolorem rem molestiae, quis veniam illo pariatur laudantium velit exercitationem consectetur numquam eveniet nobis iure ea ipsam accusantium inventore!"]]
	}

	render() {
		const { title, name, img, text } = this.state;
		return ( 
			<section className="about-people" id="aboutus">
				<div className="wide">{title[0]}</div>
				<div className="left">{name[0]}<img src={img[0]} alt="title[0][0]" />{text[0][0]}</div>
				<div className="right">{name[1]}<img src={img[1]} alt="title[0][1]" />{text[0][1]}</div>
			</section> )
	}
}
export default AboutPeople;