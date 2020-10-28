import React from 'react';
import Header from './Header';
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
// import Carousel from './Carousel'
// import Footer from './Footer'

const Main = () => {
	return (
		<div className="main-container">
			<Header />
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			{/* <Carousel />
			<Footer /> */}
		</div>
	);
}


export default Main;