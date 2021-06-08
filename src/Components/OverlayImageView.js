import React from "react";
import "../Styles/OverlayImageView.css";
import CloseIcon from "../Resources/icons/close.svg";


class OverlayImageView extends React.Component{

    get_class_name = () => {if(this.props.is_active) return "overlay-image-container-active"};

    render()
    {
        return(
            <div className={"row align-center overlay-image-container " + this.get_class_name()}>
                
                <img src={CloseIcon} className="close-overlay-image" 
                    onClick={this.props.close_function}/>
                    
                <img src={this.props.image} className="overlay-image"/>
            </div>
        );
    }

}

export default OverlayImageView;
