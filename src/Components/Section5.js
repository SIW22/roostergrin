import React, { Component } from 'react';

class Carousel extends Component {

	componentDidMount() {
		
		const circle1 = document.querySelector('.circle-1');
		const circle2 = document.querySelector('.circle-2');
		const circle3 = document.querySelector('.circle-3');
		
		let carouselGroup = document.querySelector('.carousel-group');
		let carousel = document.querySelector('.carousel-panel-container');
		
		function formCarousel() {
			let sides = carousel.children;
			let sideAngle = (360 / sides.length);
			for (let i = 0; i < sides.length; i++) {
				let side = sides[i];
				side.style.transform = 'translate3d(50%, 50%, -8.5vw) rotateY(' + (i * sideAngle)+'deg) translateZ(10vw)';
			}
		}
		
		let selectedIndex = 0;
		
		function rotateCarousel() {
			let angle = 120 * selectedIndex * 1;
			carouselGroup.style.transform = 'translateZ(0vw) rotateY(' + angle + 'deg)';
		}

		function changeDots() {
			if (selectedIndex === 0) {
				circle1.style.opacity =  '1';
				circle2.style.opacity = '.5';
				circle3.style.opacity = '.5';
			} else if (selectedIndex === 1) {
				circle1.style.opacity = '.5';
				circle2.style.opacity =  '1';
				circle3.style.opacity = '.5';
			} else if (selectedIndex === 2) {
				circle1.style.opacity = '.5';
				circle2.style.opacity = '.5';
				circle3.style.opacity =  '1';
			}
		}

		const leftArrow = document.querySelector('.left-arrow');
		const rightArrow = document.querySelector('.right-arrow');
		
		leftArrow.addEventListener('click', function() {
			selectedIndex--;
			rotateCarousel();
			changeDots();
		})
		
		rightArrow.addEventListener('click', function() {
			selectedIndex++;
			rotateCarousel();
			changeDots();
		})

		formCarousel();

	}

	render() {
		return (
			<div className="carousel-group-container">

				<div className="title-star-block-container">

					<div className="text-block-2">
						<h1 className="title-text-2">LOREM IPSUM <br/> DOLOR SIT AMET</h1>
						<div className="star-group">
							<img src={"/assets/rating-star.png"} alt="rating star" className="star"/>
							<img src={"/assets/rating-star.png"} alt="rating star" className="star"/>
							<img src={"/assets/rating-star.png"} alt="rating star" className="star"/>
							<img src={"/assets/rating-star.png"} alt="rating star" className="star"/>
							<img src={"/assets/rating-star.png"} alt="rating star" className="star"/>
						</div>
					</div>

				</div>

				<div className="carousel-container">

					<div className="carousel-group">

						<div className="carousel-panel-container">

							<div className="carousel-panel carousel-panel-1">
								<h3 className="name-and-date">
									Martin McFly 10/21/2015
								</h3>
								<p className="quote quote-1">
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								</p>
							</div>

							<div className="carousel-panel carousel-panel-2">
								<h3 className="name-and-date">
									John Doe 08/08/2019
								</h3>
								<p className="quote quote-1">
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								</p>
							</div>

							<div className="carousel-panel carousel-panel-3">
								<h3 className="name-and-date">
									Rebecca Purple 06/26/2014
								</h3>
								<p className="quote quote-1">
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								</p>
							</div>

						</div>
					</div>
					<div className="carousel-circles">
						<div className="circle circle-1"></div>
						<div className="circle circle-2"></div>
						<div className="circle circle-3"></div>
					</div>
					<div className="arrows">
						<img src={"/assets/carousel-arrow.png"} alt="" className="arrow left-arrow"/>
						<img src={"/assets/carousel-arrow.png"} alt="" className="arrow right-arrow"/>
					</div>
				</div>
			</div>
		);
	}
}

export default Carousel;
