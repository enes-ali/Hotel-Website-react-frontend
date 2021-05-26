import React from "react";
import ArrowDownIcon from "../Sources/icons/down.png";
import "../Styles/SlideDownButton.css";


function slide(event)
{
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
}

function SlideDownButton(props){    
    
    return(
        <div className="slide-down-button column align-vertical" onClick={slide}>
            <img className="first-arrow" src={ArrowDownIcon}/>
            <img className="second-arrow" src={ArrowDownIcon}/>
        </div>
    );
}

export default SlideDownButton;