import React, { Component } from 'react';
import Logo from './logo';


class Footer extends Component {
	//state = {}

	render() {
		const selected = this.props.selected;
		// let lang = this.props.lang;
		return ( 
			<section id="footer">
				<footer id="contact">
					<div className="footArea1">
						<div>
							<ul>
								<li>ATELJE TRAG</li>
								<li>Ivana Gradnika 8, Beograd 11000</li>
								<li>064 1105358</li>
								<li>office@ateljetrag.com</li>
								<li></li>
							</ul>
						</div>
					</div>
					<div  className="footArea2">
						<div className="footLogoWrapperOuter">
							<div className="footLogoWrapperInner">	
								<Logo lang={selected} />
								<p className="copyRights">&copy; Atelje Trag 2019 - powered by <a href="https://hikeislife.github.io/" target="_blank" rel="noopener noreferrer">ČĎŠ</a></p>
							</div>
						</div>
					</div>
					<div className="footArea3">
						<div>
							<ul>
								<li>
									<a 
										href="https://www.instagram.com/tragofficial/" 
										aria-label="instagram" 
										target="_blank" 
										rel="noopener noreferrer nofollow"
										><span className="fab fa-instagram"></span> 
									</a> 
								</li>
								<li>
									<a 
										href="https://www.facebook.com/ateljetrag/" 
										aria-label="facebook" 
										target="_blank" 
										rel="noopener noreferrer nofollow"
										><span className="fab fa-facebook-square"></span>
									</a>
								</li>
								<li>
									<a 
										href="https://soundcloud.com/ateljetrag/" 
										aria-label="soundcloud" 
										target="_blank" 
										rel="noopener noreferrer nofollow"
										><span className="fab fa-soundcloud"></span>
									</a>
								</li>
								<li>
									<a 
										href="https://www.discogs.com/artist/1103609-Atelje-Trag" 
										aria-label="discogs" 
										target="_blank" 
										rel="noopener noreferrer nofollow"
										><img src="./imgs/discogs-white.png" alt="discogs logo"/>
									</a>
								</li>
								<li>

								</li>
							</ul>
						</div>
					</div>
				</footer> 
			</section>
			)
	}
}
export default Footer;