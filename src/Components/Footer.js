import React, { Component } from 'react';

class Footer extends Component {

	componentDidMount() {
		// const facebook = document.querySelector('.facebook');
		// const instagram = document.querySelector('.instagram');

	}

	render() {
		return (
			<div className="footer-container">
				<h5 className="follow-us">Follow Us</h5>

				<div className="social-media-icons">

					<div className="instagram-block">
						<img src={"/assets/instagram.svg"} alt="" className="social-media-icon instagram"/>
					</div>

					<div className="facebook-block">
						<img src={"/assets/facebook.svg"} alt="" className="social-media-icon facebook"/>
					</div>

				</div>
			</div>
		);
	}
}

export default Footer;
