import React from "react";
import "../Styles/Home.css";
import "../Styles/Global.css";
import HomeImage from "../Sources/images/home-image.jpg";
import Navbar from "../Components/Navbar.js";
import SlideDownButton from "../Components/SlideDownButton";

class Home extends React.Component{

	render()
	{
		return ( 
			
			<div id="home-main">
				<Navbar />

				<div id="banner" className="row align-center">
					<img src={HomeImage} id="home-image"/>
					
					<div id="slogan">
						<p className="underline-text">FEEL</p> 
						<p className="underline-text">THE WIND</p>
					</div>

					<SlideDownButton />

				</div>


				<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
				<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
				<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
				<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
				<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
				<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
				<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

			</div>
		);
	}
	
}


export default Home;
