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
						<img src={"/assets/instagram-outline.svg"} alt="" className="social-media-icon instagram"/>
						<a href="https://www.instagram.com/RoosterGrinMedia" target="_blank" rel="noopener noreferrer" className="insta-link">
							<img src={"/assets/instagram-color.svg"} alt="" className="social-media-icon instagram-color"/>
						</a>
					</div>

					<div className="facebook-block">
						<img src={"/assets/facebook-outline.svg"} alt="" className="social-media-icon facebook"/>
						<a href="https://https://www.facebook.com/RoosterGrin" target="_blank" rel="noopener noreferrer" className="fb-link">
							<img src={"/assets/facebook-color.svg"} alt="" className="social-media-icon facebook-color"/>
						</a>
					</div>

				</div>
			</div>
		);
	}
}

export default Footer;
