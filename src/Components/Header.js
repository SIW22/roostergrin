import React, { Component } from 'react';

class Header extends Component {

	componentDidMount() {

	let welcome = document.querySelector('.welcome-to-text');
	let roosterGrin = document.querySelector('.rooster-grin-text');
	let welcomeBtn = document.querySelector('.welcome-btn');

	function fadeIn() {
		welcome.style.animation = "fadeIn 5s forwards";
		welcome.style.animationDelay = ".75s";
		roosterGrin.style.animation = "fadeIn 5s forwards";
		roosterGrin.style.animationDelay = "1.5s";
		welcomeBtn.style.animation = "fadeIn 5s forwards";
		welcomeBtn.style.animationDelay = "2s";
	}

	fadeIn();


	}
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
