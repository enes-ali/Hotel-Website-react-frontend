import React from "react";
import "../Styles/DropdownMenu.css";


class DropdownMenu extends React.Component{

    state = {
        is_open: false
    }

    toggle = () => {
        this.setState({
            is_open: !(this.state.is_open)
        });
    }

    get_menu_class()
    {
        return this.state.is_open ? "dropdown-menu dropdown-menu-opened" : "dropdown-menu";
    }

    render()
    {
        return(
            <div id={this.props.id} className="dropdown-container">
                <span className="border-button dropdown-button" onClick={this.toggle}>EN</span>
                
                <div className={this.get_menu_class()}>
                    <div className="dropdown-menu-item">TR</div>
                    <div className="dropdown-menu-item">EN</div>
                    <div className="dropdown-menu-item">RU</div>
                </div>
            </div>
        );
    }

}


export default DropdownMenu;