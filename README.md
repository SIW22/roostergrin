# RoosterGrin Sample Site

Spun up new React App using create-react-app, npm. 

Loaded supplied assets, except for social media icons, as the ones supplied were outdated. 

## Design Requirements

1. Mockups are followed 
	- All the key elements are placed as directed.
2. Carousel in last section 
	- I opted to include a bit of 3D CSS here.
3. Attention to detail 
	- I used a lof of visual cues in the mockup to place items such as the logo in the header, and how it overlaps portions fo the bridge.
4. Mobile Responsive 
	- All of the text and placement cues are derived from the screen width, so everything scales proportionally. I used only a single media query, for the social media icons.
5. Animations 
	- As requested, the title text fades in, I also did some subtle hover animations on the "more content" arrows, as well as the social media icons at the bottom. Although the use of "subtle" here could be interpretted differently, I don't find the slightly fancier animations I added for the icons to be distracting.

## Technical Requirements

1. Modular and concise code 
	- Using react, I broke each horizontal section into its own component; they all share one css file that is accesssed from index.js.
2. Fully functional capabilities of built features 
	- Without content to populate links and articles, all of the buttons are inactive, but all feature hover, focus, and active states.
3. Understanding best practices of web development 
	- I'd be a fool to think I know all the best proactices of anything, but to the best of my current knowledge, I haven't made any egregious errors! 
4. Naming conventions and styling 
	- As I believe is customary, I used shishka-bob case for classNames, and camelCase for functions and objects,
5. Best use of images and assets 
	- The photos were all high res, so they could've been scaled down, but I opted to used them as supplied.
6. Use of a grid system 
	- Although I employed a good deal of flex-box, I did not use a grid on this project. 

## Required Features:

1. Fade In Effect for the hero title 
	- the hero title, company name, and button fade-in using staggered animation delays. 
2. Subtle animation on the four icons 
	- My use of the word subtle may not fall within the normal use of subtle, but again, I don't think their distracting. 
3. Fully Functional Site 
	- As functional as a site with no content can be.

## Bonus (optional) Features:

1. Use of dev server 
	- I ran a local server during development, and used Chrome dev tools for debugging, before deploying using Surge.
2. Front end framework 
	- React.js exclusively, all CSS is custom. 
3. Dynamic backend from a CMS 
	- Seemed unnecessary given no additional content to neccesitate/populate a server.

