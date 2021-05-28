import React from "react";
import "../Styles/ImageSlider.css";



class ImageSlider extends React.Component{

    state = {
        current_image: 0,
        last_image: this.props.images.length,
        images: this.props.images
    }

    get_previous_image = (return_index = false) => {
        let index = this.state.current_image !== 0 ? this.state.current_image - 1 : this.state.last_image - 1;
        
        if(return_index) return index;

        return this.state.images[index];
    }

    get_next_image = (return_index = false) => {
        let index = this.state.current_image !== (this.state.last_image - 1) ? this.state.current_image + 1 : 0;

        if(return_index) return index;

        return this.state.images[index];
    }

    slide_forward = () => {
        this.setState({
            current_image: this.get_next_image(true)
        });
    }

    slide_backward = () => {
        this.setState({
            current_image: this.get_previous_image(true)
        });
    }

    render()
    {
        return(
            <div className="image-slider-container">
                <div className="image-slider">

                    <div className="slider-previous-image" onClick={this.slide_backward}> 
                        <img className="navigation-image" src={this.get_previous_image()} /> 
                        <img className="navigation-corp-image" src={this.get_previous_image()} /> 
                    </div>
                    
                    <div className="slider-current-image"> 
                        <img src={this.state.images[this.state.current_image]} /> 
                    </div>
                    
                    <div className="slider-next-image" onClick={this.slide_forward}>
                        <img className="navigation-image" src={this.get_next_image()} />
                        <img className="navigation-corp-image" src={this.get_next_image()} /> 
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageSlider;