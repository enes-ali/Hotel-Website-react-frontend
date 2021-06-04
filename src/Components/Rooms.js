import React from "react";
import "../Styles/Rooms.css";
import { Link } from 'react-router-dom';

import DoubleRoomImage from "../Sources/images/rooms/double.jpg";
import TwinRoomImage from "../Sources/images/rooms/twin.jpg";
import TripleRoomImage from "../Sources/images/rooms/triple.jpg";
import BackArrow from "../Sources/icons/left-arrow_150x150.svg";



class Rooms extends React.Component{

    state = {
        rooms: [
            {name: "room-double", capacity: 1, image: DoubleRoomImage,
                specs: ["Lorem Ipsum", "Proin libero massa", "luctus ultricies urna", "facilisis sit amet urna ut"]},
            
            {name: "room-twin", capacity: 2, image: TwinRoomImage,
                specs: ["Lorem Ipsum", "Proin libero massa", "luctus ultricies urna", "facilisis sit amet urna ut"]},
            
            {name: "room-triple", capacity: 3, image: TripleRoomImage,
                specs: ["Lorem Ipsum", "Proin libero massa", "luctus ultricies urna", "facilisis sit amet urna ut"]}
        ],

        current_room: "room-double",
        mobile_show_room_details: false,
    }

    show_room_details = (event) => {
        this.setState({
            current_room: event.currentTarget.id,
            mobile_show_room_details: true
        });
    }

    show_room_types = (event) => { this.setState({mobile_show_room_details: false}); }

    get_container_class = () => this.state.mobile_show_room_details ? " rooms-container-show-details" : "";

    get_current_room = () => {
        let room;
        room = this.state.rooms.filter((room) => this.state.current_room === room.name)[0];
        return room;
    }

    get_room_spec_list = () => {
        return this.get_current_room().specs.map( (spec) => {
            return(
                <li>{spec}</li>
            );
        });
    }

    render()
    {
        return(
            <div id="rooms-container" className={this.get_container_class()}>
                
                <div id="all-rooms" className="column align-vertical">
                    <h2 id="rooms-title">ROOMS</h2>

                    <div id="room-types">
                        <div onClick={this.show_room_details} className="row align-center room-type" id="room-double"> 
                            <img src={DoubleRoomImage}/> 
                            <span>Double</span>
                        </div>

                        <div onClick={this.show_room_details} className="row align-center room-type" id="room-twin">
                            <img src={TwinRoomImage}/> 
                            <span>Twin</span>
                        </div>

                        <div onClick={this.show_room_details} className="row align-center room-type" id="room-triple"> 
                            <img src={TripleRoomImage}/> 
                            <span>Triple</span>
                        </div>
                    </div>
                </div>


                <div id="room-details">
                    <img src={BackArrow} id="back-to-room-types-btn" onClick={this.show_room_types}/>
                    <img src={this.get_current_room().image} id="room-detail-image" />
                    
                    <div id="room-specs-card">
                        <h1 id="specs-room-name">{this.get_current_room().name}</h1>
                        <h2 id="specs-title">Specs:</h2>
                        
                        <ul id="room-spec-list">
                            {this.get_room_spec_list()}
                        </ul>

                        <Link id="book-current-room-btn">BOOK ROOM</Link>
                    </div>
                </div>

            </div>
        );
    }
}

export default Rooms;