import React, { Component } from 'react';

class AboutPeople extends Component {
	state = {
		title: ["O nama", "About us"],
		name: ["Marko Peruničić", "Nebojsa Arezina"],
		img: ["./imgs/marko.jpg", "./imgs/nebo.jpg"],
		text: [
			[`OnamaSR: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet fugiat similique error impedit 
			ut fuga nisi voluptate veritatis nihil quas ipsam vel sunt alias tempora laboriosam quia, ipsum 
			ab assumenda aut laborum id animi iure. Reprehenderit quaerat architecto adipisci sunt autem impedit 
			fugiat veritatis recusandae error, iste nisi, dignissimos distinctio consequatur vitae rem quos beatae 
			illum eveniet? Aut dicta deleniti excepturi, blanditiis voluptatum, tempore? Voluptatibus provident, 
			officia fugiat, est incidunt ad labore sequi necessitatibus perspiciatis, quis delectus. Reprehenderit quaerat 
			architecto adipisci sunt autem impedit fugiat veritatis recusandae error, iste nisi, dignissimos distinctio 
			consequatur vitae rem quos beatae illum eveniet? Aut dicta deleniti excepturi, blanditiis voluptatum, tempore? 
			Voluptatibus provident, officia fugiat, est incidunt ad labore sequi necessitatibus perspiciatis, quis delectus.`,

				`NebojšaSR: Aliquid cumque quis dolorem, quaerat hic est. Ratione quas, temporibus, laudantium mollitia 
			omnis quasi repellat possimus facere quia distinctio debitis laborum, ad?`,

				`MarkoSR: Vitae esse earum dolorem rem molestiae, quis veniam illo pariatur laudantium velit 
				exercitationem consectetur numquam eveniet nobis iure ea ipsam accusantium inventore!`],

			[`OnamaEN: Successful Serbian composer - arranger - producer who has collaborated with over 100 best selling 
			Balkan artists during last 20 years. He is involved in music since his age of 11, initially as the 
			founder, arranger and vocalist of Belgrade's youngest hip hop group ever, "Belgrade Posse". 
			Together with Darko Asik, he managed Index Radio show "Do the right thing" and organized and DJ-ed 
			a number of hip hop events in Belgrade from 1994-1997. As the 16-year-old boy he collaborated with 
			artists like 187 and Gru as arranger and vocalist. On his 19th birthday, with Nebojsa Arezina, 
			Marko co-founded "Atelje Trag". Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
			Placeat assumenda delectus unde eveniet praesentium ratione saepe, repellat accusamus deserunt. 
			Ad eaque quis ratione, maiores placeat repellat quod delectus omnis iure reprehenderit minus non nihil, 
			mollitia unde voluptatem aliquam iusto quisquam ipsum ab asperiores. Molestiae cumque deleniti, dignissimos voluptatum 
			illo harum explicabo consequatur facilis, itaque quo, rem.`,

				`NebojšaEN: Successful Serbian composer/arranger/producer who has collaborated with over 100 best selling 
				Balkan artists during last 20 years. He is involved in music since his age of 11, initially as the 
				founder, arranger and vocalist of Belgrade's youngest hip hop group ever, "Belgrade Posse". 
				Together with Darko Asik, he managed Index Radio show "Do the right thing" and organized and DJ-ed 
				a number of hip hop events in Belgrade from 1994-1997. As the 16-year-old boy he collaborated with 
				artists like 187 and Gru as arranger and vocalist. On his 19th birthday, with Nebojsa Arezina, 
				Marko co-founded "Atelje Trag".`,

				`MarkoEN: Successful Serbian composer/arranger/producer who has collaborated with over 100 best selling 
				Balkan artists during last 20 years. He is involved in music since his age of 11, initially as the 
				founder, arranger and vocalist of Belgrade's youngest hip hop group ever, "Belgrade Posse". 
				Together with Darko Asik, he managed Index Radio show "Do the right thing" and organized and DJ-ed 
				a number of hip hop events in Belgrade from 1994-1997. As the 16-year-old boy he collaborated with 
				artists like 187 and Gru as arranger and vocalist. On his 19th birthday, with Nebojsa Arezina, 
				Marko co-founded "Atelje Trag".`]
		]
	}

	componentDidMount() {
		let rightImg = document.querySelector(".rightImg"),
			leftImg = document.querySelector(".leftImg"),
			txtAboutUsHolder = document.querySelector(".txtAboutUsHolder");
		// logoAbout = document.querySelector(".logoAbout");

		setTimeout(function () {
			// leftImg.style.width = "45%";
			// rightImg.style.width = "45%";
			leftImg.style.left = "-70px";
			rightImg.style.right = "-70px";
			leftImg.style.opacity = "1";
			rightImg.style.opacity = "1";
		}, 500);

		setTimeout(function () {
			txtAboutUsHolder.style.opacity = "1";
		}, 800);

		// setTimeout(function () {
		// 	logoAbout.style.height = "100px";
		// }, 1500);
	}

	render() {
		const { title, name, img, text } = this.state;
		let lang = this.props.lang;
		return (
			<section className="about-people" id="aboutus">
				<div className="logoAbout">
					<div className="mini-logo-holder mini-logo-holder-aboutP">
						<div className="logoLetters logoLettersAboutP">
							<span className="aHolder">A</span><br />
							<span className="tHolder">T</span>
						</div>
						<div className="groundingHolder">
							<div>
								<hr />
							</div>
							<div>
								<hr className="hrMid" />
							</div>
							<div>
								<hr />
							</div>
						</div>
					</div>
				</div>
				<div className="shapesHolder">
					<div className="leftImg"><img src={img[0]} alt="title[0][0]" /><div className="lefInner"></div></div>
					<div className="rightImg"><img src={img[1]} alt="title[1][0]" /><div className="rightInner"></div></div>
					<div className="txtAboutUsHolder">
						<div className="wide titleAboutUs"><h2>{title[lang]}</h2></div>
						<p className="">{text[lang][0]}</p>
					</div>
				</div>
				{/* <div className="about-left-right">
					<div className="left">
						<div className="markoHolder">{name[0]}<img src={img[0]} alt="title[0][0]" />{text[lang][1]}</div>
					</div>
					<div className="right">
						<div className="neboHolder">{name[1]}<img src={img[1]} alt="title[0][1]" />{text[lang][2]}</div>
					</div>
				</div> */}

			</section>)
	}
}
export default AboutPeople;