import React, { Component } from 'react';

class Logo extends Component {
	//state = {}

	render() {

		return ( 
            
            <div className="logoWrapper">
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
            </div>
            
            )
	}
}
export default Logo;