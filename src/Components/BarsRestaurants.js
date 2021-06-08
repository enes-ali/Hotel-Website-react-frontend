import React from "react";
import "../Styles/BarsRestaurants.css";

import BarBrandImage from "../Sources/images/bars_restaurants/bar_1.jpg";
import AlexBarBrandImage from "../Sources/images/bars_restaurants/bar_2.png";
import CoffeShopBrandImage from "../Sources/images/bars_restaurants/coffe_brand.jpg";
import RestaurantBrandImage from "../Sources/images/bars_restaurants/restaurant.png";

import CoffeShopImage from "../Sources/images/bars_restaurants/coffe_shop.jpg";
import RestaurantImage from "../Sources/images/bars_restaurants/restaurant.jpg";
import BarImage from "../Sources/images/bars_restaurants/bar.jpg";
import AlexBarImage from "../Sources/images/bars_restaurants/alex_bar.jpg";

import BackArrowIcon from "../Sources/icons/left-arrow_150x150.svg";


class BarsRestaurants extends React.Component{

    state = {
        places: [ {id: null, name: null, desc: null, img: null} ],
        current_place: {id: null, name: null, desc: null, img: null},
        mobile_show_details: false,
        animate_details: false
    }

    componentDidMount()
    {
        /* Put your http requests here */
        let places = [
            {id:"moonshine", name: "Moonshine", desc: "Aenean scelerisque nec justo vitae consectetur. Quisque turpis ipsum, dapibus eget neque nec, ultrices rhoncus augue. Etiam pellentesque auctor nulla ut scelerisque. Pellentesque eget bibendum tortor, eget placerat est. Donec dignissim vitae ligula at ullamcorper",
                img: BarImage, brand: BarBrandImage},

            {id:"alex", name: "Alex", desc: "Aenean scelerisque nec justo vitae consectetur. Quisque turpis ipsum, dapibus eget neque nec, ultrices rhoncus augue. Etiam pellentesque auctor nulla ut scelerisque. Pellentesque eget bibendum tortor, eget placerat est. Donec dignissim vitae ligula at ullamcorper",
                img: AlexBarImage, brand: CoffeShopBrandImage},

            {id:"veysizg-coffe", name: "Veysizg Coffe", desc: "Aenean scelerisque nec justo vitae consectetur. Quisque turpis ipsum, dapibus eget neque nec, ultrices rhoncus augue. Etiam pellentesque auctor nulla ut scelerisque. Pellentesque eget bibendum tortor, eget placerat est. Donec dignissim vitae ligula at ullamcorper",
                img: CoffeShopImage, brand: AlexBarBrandImage},

            {id:"the-noodle-bar", name: "The Noodle Bar", desc: "Aenean scelerisque nec justo vitae consectetur. Quisque turpis ipsum, dapibus eget neque nec, ultrices rhoncus augue. Etiam pellentesque auctor nulla ut scelerisque. Pellentesque eget bibendum tortor, eget placerat est. Donec dignissim vitae ligula at ullamcorper",
                img: RestaurantImage, brand: RestaurantBrandImage}
        ];
        
        this.setState({
            places: places,
            current_place: places[0],
        });
    }
    

    brand_elements = () => {
        return this.state.places.map((place) => {
            return(
                <img id={place.id} className="place-img" src={place.brand} 
                    onClick={this.show_place_detail}/>
            );
        });
    }

    show_place_detail = (event) => {
        if(event.target.id == this.state.current_place) return;

        let current_place = this.state.places.filter( place => place.id === event.target.id )[0];
        this.setState({ current_place: current_place, mobile_show_details: true, animate_details: true });
        setTimeout(() => this.setState({animate_details: false}), 700);
    }

    mobile_details_go_back = () => { this.setState({mobile_show_details: false}) };

    render()
    {
        return(
            <div id="bars-restaurants" className={ this.state.mobile_show_details ? "show-palce-detail" : ""}>
                <div id="places-container" className="column align-vertical">
                    <h2 id="places-title">Bars and Restaurants</h2>

                    <div id="places">
                        {this.brand_elements()}
                    </div>
                </div>

                {/* Details */}
                <div id="place-details">
                    <img src={BackArrowIcon} onClick={this.mobile_details_go_back} id="show-all-places-btn"/>

                    <img src={ this.state.current_place.img } id="place-detail-image" 
                        className={this.state.animate_details ? "fade-in-from-top-right" : ""} />

                    <div id="place-detail-card" className={this.state.animate_details ? "fade-in-from-bottom-left" : ""} >
                        <h2 id="place-detail-name">{ this.state.current_place.name }</h2>
                        <p id="place-detail-desc">{ this.state.current_place.desc }</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default BarsRestaurants;