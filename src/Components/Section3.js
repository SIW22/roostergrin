import React from 'react';

const Section3 = () => {
	return (
		<div className="section-3-container">
			<div className="text-block-container">
				<div className="text-block">
					<h1 className="title-text-2">LOREM IPSUM <br/> DOLOR SIT AMET</h1>
					<p className="paragraph-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<h6 className="more-content-arrow"><link rel="stylesheet" href="#"/> > Lorem Ipsum</h6>
				</div>
			</div>

			<div className="icon-block-group">
				<div className="icon-block">
					<div className="left-icons">
						<div className="icon-group">
							<img src={"assets/home-expertise.svg"} alt="clipboard icon" className="icon clipboard"/>
							<div className="icon-circle"></div>
							<h3 className="icon-text">LOREM</h3>
						</div>
						<div className="icon-group">
							<img src={"assets/home-lab.svg"} alt="goggles icon" className="icon goggles"/>
							<div className="icon-circle"></div>
							<h3 className="icon-text">LOREM IPSUM</h3>
						</div>
					</div>
					<div className="right-icons">
						<div className="icon-group">
							<img src={"assets/home-hygiene.svg"} alt="mask icon" className="icon mask"/>
							<div className="icon-circle"></div>
							<h3 className="icon-text">LOREM IPSUM</h3>
						</div>
						<div className="icon-group">
							<img src={"assets/home-retention.svg"} alt="calendar icon" className="icon calendar"/>
							<div className="icon-circle"></div>
							<h3 className="icon-text">LOREM</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Section3;
