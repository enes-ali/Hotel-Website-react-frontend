import React from "react";
import "../Styles/Navbar.css";
import "../Styles/Global.css";
import BrandImage from "../Sources/icons/Logo-Black.png";
import PhoneIcon from "../Sources/icons/phone-solid.svg";
import DropdownMenu from "./DropdownMenu";
import {Link} from "react-router-dom";


class Navbar extends React.Component{

	constructor()
	{
		super();
		this.container_style = { height: "100%" };
	}

	render()
	{
		return(
			<nav className="row space-between align-vertical">
				<Link to="/"> <img src={BrandImage} alt="NAGIDOS HOTEL" id="brand-image" /> </Link>
				
				<div className="row align-center full-height">
					<div id="call" className="row align-center">
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