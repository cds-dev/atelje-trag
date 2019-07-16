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
		`Successful Serbian composer/arranger/producer who has collaborated with over 100 best selling Balkan artists during last 20 years. He is involved in music since his age of 11, initially as the founder, arranger and vocalist of Belgrade's youngest hip hop group ever, "Belgrade Posse". Together with Darko Asik, he managed Index Radio show "Do the right thing" and organized and DJ-ed a number of hip hop events in Belgrade from 1994-1997. As the 16-year-old boy he collaborated with artists like 187 and Gru as arranger and vocalist. On his 19th birthday, with Nebojsa Arezina, Marko co-founded "Atelje Trag".`]]
	}

	render() {
		const { title, name, img, text } = this.state;
		let lang = this.props.lang;
		return ( 
			<section className="about-people" id="aboutus">
				<div className="wide">{title[lang]}</div>
				<div className="left">{name[0]}<img src={img[0]} alt="title[0][0]" />{text[lang][0]}</div>
				<div className="right">{name[1]}<img src={img[1]} alt="title[0][1]" />{text[lang][1]}</div>
			</section> )
	}
}
export default AboutPeople;