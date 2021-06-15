import React from "react";
import "../Styles/Footer.css";

/* Info icons */
import LoactionIcon from "../Resources/icons/location.svg";
import CallIcon from "../Resources/icons/call.svg";
import EmailIcon from "../Resources/icons/email.svg";

/* Social media icons */
import FacebookIcon from "../Resources/icons/facebook.svg";
import InstagramIcon from "../Resources/icons/instagram.svg";
import TwitterIcon from "../Resources/icons/twitter.svg";




function Footer(props)
{
    return(
        <div id="footer">
            <div id="footer-info-box-container">
                {/* Information boxes */}

                <div className="footer-info-box">
                    <div className="footer-info-box-icon"> <img src={LoactionIcon}/> </div>
                    <p className="footer-info-box-text">Nagidos Hotel Bozyazı, Bozyazi Mersin, Turkey</p>
                </div>
                
                <div className="footer-info-box">
                    <div className="footer-info-box-icon"> <img src={CallIcon}/> </div>
                    <p className="footer-info-box-text">+90 536 865 07 65</p>
                </div>

                <div className="footer-info-box">
                    <div className="footer-info-box-icon"> <img src={EmailIcon} /> </div>
                    <p className="footer-info-box-text">nagidos@hotel.com</p>
                </div>
            </div>

            <div id="footer-about-container">
                {/* About us */}
                <div id="footer-about-us-container" className="column align-center">
                    <h3 id="about-us-title">About us</h3>
                    
                    <p id="about-us-text">
                        Aenean scelerisque nec justo vitae consectetur. Quisque turpis ipsum, dapibus eget neque nec, ultrices rhoncus augue. 
						Etiam pellentesque auctor nulla ut scelerisque.
                    </p>
                </div>

                {/* Social media links */}
                <div id="social-media-btn-container" className="row align-center">
                    <a href="https://www.facebook.com" className="social-media-button row align-center"> <img src={FacebookIcon}/> </a>
                    <a href="https://www.instagram.com" className="social-media-button row align-center"> <img src={InstagramIcon}/> </a>
                    <a href="https://www.twitter.com" className="social-media-button row align-center"> <img src={TwitterIcon}/> </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;