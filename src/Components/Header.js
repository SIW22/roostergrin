import React, { Component } from 'react';

class Header extends Component {

	render() {
		return (
			<div className="header-container">
				<img src={"assets/hero.jpg"} alt="golden gate bridge" className="hero-image"/>
				<img src={"assets/logo-white.svg"} alt="" className="logo-white"/>

				<div className="welcome-text-group">
					<h1 className="welcome-to-text">WELCOME TO</h1>
					<h2 className="rooster-grin-text">Rooster Grin</h2>
					<button className="welcome-btn">BUTTON BUTTON</button>
				</div>
			</div>
		);
	}
}

export default Header;
