import React, { Component } from 'react';

class Footer extends Component {
	//state = {}

	render() {
		return ( 
			<footer id="contact">
				<p>&copy; Atelje Trag 2019 - powered by <a href="https://hikeislife.github.io/" target="_blank" rel="noopener">ČĎŠ</a></p><br /> 
				<a href="https://www.instagram.com/tragofficial/" aria-label="instagram" target="_blank" rel="noopener noreferrer nofollow"><span className="fab fa-instagram"></span> </a> 
				<a href="https://www.facebook.com/ateljetrag/" aria-label="instagram" target="_blank" rel="noopener noreferrer nofollow"><span className="fab fa-facebook-square"></span> </a>
			</footer> )
	}
}
export default Footer;