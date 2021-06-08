import React from "react";
import "../Styles/Navbar.css";
import "../Styles/Global.css";
import BrandImage from "../Resources/icons/Logo.png";
import PhoneIcon from "../Resources/icons/phone-solid.svg";
import DropdownMenu from "./DropdownMenu";
import {Link} from "react-router-dom";


class Navbar extends React.Component{

	state = {
		nav_class: ""
	}

	constructor()
	{
		super();
		window.addEventListener("scroll", this.onScroll);
	}

	onScroll = (event) => {
		if(window.scrollY > 100){
			this.setState({
				nav_class: "navbar-active"
			});
		}
		else{
			this.setState({
				nav_class: ""
			});
		}
	}

	render()
	{
		return(
			<nav className={"row space-between align-vertical " + this.state.nav_class }>
				<Link to="/"> <img src={BrandImage} alt="NAGIDOS HOTEL" id="brand-image" /> </Link>
				
				<div className="row align-center full-height">
					<div id="call" className="row ">
						<span>+90 536 865 07 65</span>
						<img src={PhoneIcon} id="phone-icon"/>
					</div>

					<Link to="/book-room" id="book-room-btn" className="border-button">BOOK ROOM</Link>
					
					<DropdownMenu id="nav-language"/>
				</div>
			</nav>	
		);
	}

}

export default Navbar;