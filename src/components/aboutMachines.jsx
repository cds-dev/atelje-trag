import React, { Component } from 'react';

class AboutMachines extends Component {
	state = {
		title: ["O studiu", "About studio"],
		name: ["Marko Peruničić", "Nebojsa Arezina"],
		img: ["./imgs/StudioNebo.jpg", "./imgs/StudioMarko.jpg", "./imgs/Ostudiu1.jpg", "./imgs/Ostudiu2.jpg", "./imgs/Ostudiu3.jpg", "./imgs/Ostudiu4.jpg"],
		text: [
				[`OstudiuSR: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet fugiat similique error impedit 
				ut fuga nisi voluptate veritatis nihil quas ipsam vel sunt alias tempora laboriosam quia, ipsum 
				ab assumenda aut laborum id animi iure. Reprehenderit quaerat architecto adipisci sunt autem impedit 
				fugiat veritatis recusandae error, iste nisi, dignissimos distinctio consequatur vitae rem quos beatae 
				illum eveniet? Aut dicta deleniti excepturi, blanditiis voluptatum, tempore? Voluptatibus provident, 
				officia fugiat, est incidunt ad labore sequi necessitatibus perspiciatis, quis delectus. Reprehenderit quaerat 
				architecto adipisci sunt autem impedit fugiat veritatis recusandae error, iste nisi, dignissimos distinctio 
				consequatur vitae rem quos beatae illum eveniet? Aut dicta deleniti excepturi, blanditiis voluptatum, tempore? 
				Voluptatibus provident, officia fugiat, est incidunt ad labore sequi necessitatibus perspiciatis, quis delectus.
				`],

				[`OstudiuEN: Successful Serbian composer - arranger - producer who has collaborated with over 100 best selling 
				Balkan artists during last 20 years. He is involved in music since his age of 11, initially as the 
				founder, arranger and vocalist of Belgrade's youngest hip hop group ever, "Belgrade Posse". 
				Together with Darko Asik, he managed Index Radio show "Do the right thing" and organized and DJ-ed 
				a number of hip hop events in Belgrade from 1994-1997. As the 16-year-old boy he collaborated with 
				artists like 187 and Gru as arranger and vocalist. On his 19th birthday, with Nebojsa Arezina, 
				Marko co-founded "Atelje Trag". Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Placeat assumenda delectus unde eveniet praesentium ratione saepe, repellat accusamus deserunt. 
				Ad eaque quis ratione, maiores placeat repellat quod delectus omnis iure reprehenderit minus non nihil, 
				mollitia unde voluptatem aliquam iusto quisquam ipsum ab asperiores. Molestiae cumque deleniti, dignissimos voluptatum 
				illo harum explicabo consequatur facilis, itaque quo, rem.`]
			]
	}

	componentDidMount() {
		let leftImgHolder1 = document.querySelector(".leftImgHolder1"),
		leftImgHolder2 = document.querySelector(".leftImgHolder2"),
		txtAboutStudioHolder = document.querySelector(".txtAboutStudioHolder");
		
		setTimeout(function () {
			leftImgHolder1.style.left = "0";
		}, 750);

		window.addEventListener("load", function() {
			if(window.pageYOffset > 100) {
				leftImgHolder2.style.bottom = "-36em";
			}
		})

		window.scrollTo(0,0);
		window.addEventListener("scroll", function() {
			if(window.pageYOffset > 100) {
				setTimeout(function () {
					leftImgHolder2.style.bottom = "0";
				}, 850);
			}
		})

		setTimeout(function () {
			txtAboutStudioHolder.style.opacity = "1";
		}, 1200);
	}
	
	render() {
		const { title, img, text } = this.state;
		let lang = this.props.lang;
		return ( 
		<section className="aboutMachines" id="aboutstudio">
			<div className="shapesHolderM">
				<div className="leftImgWrapper">
					<div className="leftImgHolder1">
						<img src={img[5]} alt="title[0][5]" className="proba" />
					</div>
					<div className="lefInner"></div>
				</div>
				<div className="leftImgHolder2">
					<img src={img[2]} alt="title[0][2]" className="proba" />
				</div>
			</div>
			<div className="txtAboutStudioHolder">
				<div className="titleAboutStudio"><h2>{title[lang]}</h2></div>
				<p className="txtAboutStudio">{text[lang][0]}</p>
				<p className="txtAboutStudio">{text[lang][0]}</p>
			</div>
		</section> 
		)
	}
}
export default AboutMachines;