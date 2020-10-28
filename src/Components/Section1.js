import React from 'react';

const Section1 = () => {
	return (
		<div className="section-1-container">
			<div className="text-block-container">
				<div className="text-block">
					<h1 className="title-text-1">LOREM IPSUM</h1>
					<p className="paragraph-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<h6 className="more-content-arrow"><link rel="stylesheet" href="#"/> > Lorem Ipsum</h6>
				</div>
			</div>
			<div className="hikers-image-container">
				<img src={"assets/img-1.jpg"} alt="hikers teamwork" className="hikers-image"/>
			</div>
		</div>
	);
}

export default Section1;
