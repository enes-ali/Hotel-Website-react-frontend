import React from "react";
import "../Styles/Home.css";
import "../Styles/Global.css";
import HomeImage from "../Resources/images/home-image.jpg";

/* Components */
import Navbar from "../Components/Navbar.js";
import SlideDownButton from "../Components/SlideDownButton";
import ImageSlider from "../Components/ImageSlider";
import Rooms from "../Components/Rooms";
import BarsRestaurants from "../Components/BarsRestaurants";
import Location from "../Components/Location";

/* Slider Images */
import cafe_image from "../Resources/images/hotel/cafe_1920_1080.jpg";
import bar_image from "../Resources/images/hotel/bar_1920_1080.jpg";
import pool_image from "../Resources/images/hotel/pool_1920_1080.jpg";
import pool_image2 from "../Resources/images/hotel/pool_2_1920_1080.jpg";
import restoraunt_image from "../Resources/images/hotel/restoraunt_1920_1080.jpg";
import sign_image from "../Resources/images/hotel/sign_1920_1080.jpg";



class Home extends React.Component{
	
	state = {
		images: [cafe_image, bar_image, pool_image, pool_image2, restoraunt_image, sign_image],
	}

	rootElement = window.document;

	// Be aware of the navbar
	get_slide_offset = () => window.innerWidth > 1200 ? window.innerHeight - 100 : window.outerHeight - 65;

	render()
	{
		return ( 
			
			<div id="home-main">
				<Navbar />

				{/* Banner */}
				<div id="banner" className="row align-center">
					<img src={HomeImage} id="home-image"/>
					
					<div id="slogan">
						<p className="underline-text">FEEL</p> 
						<p className="underline-text">THE WIND</p>
					</div>

					<SlideDownButton slide_offset={ this.get_slide_offset() }/>
				</div>


				{/* Info */}
				<div id="info-block">
					
					<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat dui ac efficitur mollis. 
					Phasellus venenatis sem vel maximus luctus. Donec tempor tempus turpis eu rhoncus. 
					Quisque rhoncus sit amet est ut pretium. Mauris vel facilisis leo, a accumsan nunc. 
					Suspendisse vel tempor diam. Nulla facilisis varius justo, lacinia hendrerit ex tristique a.
					Nunc viverra laoreet lacus. Duis consectetur vitae ex sed semper. Duis vitae eros quis velit ultricies ornare nec quis dui. 
					Nulla consectetur ex finibus magna finibus semper. Etiam tempor erat vel posuere bibendum. Pellentesque euismod iaculis posuere. 
					</p>

					<div>
						<p>
						Proin libero massa, facilisis sit amet urna ut, luctus ultricies urna. Nulla ac nulla lectus. 
						Phasellus aliquet justo non ligula bibendum tincidunt. Nullam non nulla at dolor fringilla ullamcorper. 
						</p>

						<p>
						Aenean scelerisque nec justo vitae consectetur. Quisque turpis ipsum, dapibus eget neque nec, ultrices rhoncus augue. 
						Etiam pellentesque auctor nulla ut scelerisque. Pellentesque eget bibendum tortor, eget placerat est. 
						Donec dignissim vitae ligula at ullamcorper. 
						</p>
					</div>
				</div>


				{/* Gallery */}
				<div id="gallery">
					<ImageSlider images={ this.state.images } />
				</div>

				{/* Rooms */}
				<Rooms />

				<BarsRestaurants />

				<Location />

				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
				
			</div>
		);
	}
	
}


export default Home;
