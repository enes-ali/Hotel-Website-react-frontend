/* this is a template and doesn't include a real map service */

import React from "react";
import "../Styles/Location.css";

import MapImage from "../Resources/images/loaction.png"

class Location extends React.Component{

    render()
    {
        return(
        <div id="loaction">
            <div id="map-container">
                <img src={MapImage}/>
            </div>

            <div id="loction-info-container" className="column align-vertical">
                <h2 id="location-title">Loaction</h2>
                <p id="location-description">Aenean scelerisque nec justo vitae consectetur. Quisque turpis ipsum, dapibus eget neque nec, ultrices rhoncus augue. Etiam pellentesque auctor nulla ut scelerisque. Pellentesque eget bibendum tortor, eget placerat est. Donec dignissim vitae ligula at ullamcorper Aenean scelerisque nec justo vitae consectetur. Quisque turpis ipsum, dapibus eget neque nec, ultrices rhoncus augue. Etiam pellentesque auctor nulla ut scelerisque. Pellentesque eget bibendum tortor, eget placerat est. Donec dignissim vitae ligula at ullamcorper</p>
            </div>
        </div>
        );
    }
}


export default Location;