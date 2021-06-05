import React from "react";
import "../Styles/BarsRestaurants.css";

import BarImage from "../Sources/images/bars_restaurants/bar_1.jpg";
import BarImage2 from "../Sources/images/bars_restaurants/bar_2.png";
import CoffeShopImage from "../Sources/images/bars_restaurants/coffe_brand.jpg";
import RestaurantImage from "../Sources/images/bars_restaurants/restaurant.png";

import BackArrowIcon from "../Sources/icons/left-arrow_150x150.svg";


class BarsRestaurants extends React.Component{

    state = {
        places: [
            {id:"moonshine", name: "Moonshine", desc: "Aenean scelerisque nec justo vitae consectetur. Quisque turpis ipsum, dapibus eget neque nec, ultrices rhoncus augue. Etiam pellentesque auctor nulla ut scelerisque. Pellentesque eget bibendum tortor, eget placerat est. Donec dignissim vitae ligula at ullamcorper",
                img: BarImage},
            {id:"alex", name: "Alex", desc: "Aenean scelerisque nec justo vitae consectetur. Quisque turpis ipsum, dapibus eget neque nec, ultrices rhoncus augue. Etiam pellentesque auctor nulla ut scelerisque. Pellentesque eget bibendum tortor, eget placerat est. Donec dignissim vitae ligula at ullamcorper",
                img: BarImage2},
            {id:"veysizg-coffe", name: "Veysizg Coffe", desc: "Aenean scelerisque nec justo vitae consectetur. Quisque turpis ipsum, dapibus eget neque nec, ultrices rhoncus augue. Etiam pellentesque auctor nulla ut scelerisque. Pellentesque eget bibendum tortor, eget placerat est. Donec dignissim vitae ligula at ullamcorper",
                img: CoffeShopImage},
            {id:"the-noodle-bar", name: "The Noodle Bar", desc: "Aenean scelerisque nec justo vitae consectetur. Quisque turpis ipsum, dapibus eget neque nec, ultrices rhoncus augue. Etiam pellentesque auctor nulla ut scelerisque. Pellentesque eget bibendum tortor, eget placerat est. Donec dignissim vitae ligula at ullamcorper",
                img: RestaurantImage}
        ],

        current_place: "moonshine",
        mobile_show_details: false
    }

    
    get_current_place = () => this.state.places.filter( place => place.id === this.state.current_place )[0];

    show_place_detail = (event) => this.setState({ current_place: event.currentTarget.id, mobile_show_details: true });

    show_all_places = () => { this.setState({mobile_show_details: false}) };

    render()
    {
        return(
            <div id="bars-restaurants" className={ this.state.mobile_show_details ? "show-palce-detail" : ""}>
                <div id="places-container" className="column align-vertical">
                    <h2 id="places-title">Bars and Restaurants</h2>

                    <div id="places">
                        <img id="moonshine" className="place-img" src={BarImage} 
                            onClick={this.show_place_detail}/>
                        <img id="veysizg-coffe" className="place-img" src={CoffeShopImage} 
                            onClick={this.show_place_detail}/>
                        <img id="alex" className="place-img" src={BarImage2} 
                            onClick={this.show_place_detail}/>
                        <img id="the-noodle-bar" className="place-img" src={RestaurantImage}
                            onClick={this.show_place_detail}/>
                    </div>
                </div>

                {/* Details */}
                <div id="place-details">
                    <img src={BackArrowIcon} onClick={this.show_all_places} id="show-all-places-btn"/>

                    <img src={ this.get_current_place().img } id="place-detail-image" />

                    <div id="place-detail-card">
                        <h2 id="place-detail-name">{ this.get_current_place().name }</h2>
                        <p id="place-detail-desc">{ this.get_current_place().desc }</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default BarsRestaurants;