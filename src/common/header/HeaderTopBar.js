import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiChevronRight, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa"
import { Link } from 'react-router-dom'

const HeaderTopBar = () => {
    return (
        <div className="header-top-bar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-12 col-12">
                        {/* <div className="header-left">
                            <p><a href="/web-design">Obten Tu Website AHORA <FiChevronRight /></a></p>
                        </div> */}
                    </div>
                    <div className="col-lg-8 col-md-12 col-12">
                        <div className="header-right">
                            <div className="address-content">
                                {/* <p><FiMapPin /><span>Cd Juárez, México.</span></p> */}
                                <p><FaWhatsapp /><span><a href="https://wa.me/message/WDRRLVJVFBUQE1">+52 (656) 112 1142</a></span></p>
                                <p><FiPhone /><span><a href="tel:+526561121142">+52 (656) 112 1142</a></span></p>
                                {/* <p><FiMail /><span><a href="mailto:info@gorilla-labs.com">info@Gorilla-Labs.com</a></span> </p> */}
                            </div>
                            {/* <div className="social-icon-wrapper">
                                <ul className="social-icon social-default icon-naked">
                                    <li><a href="https://www.facebook.com/gorillabs"><FiFacebook /></a></li>
                                    <li><Link to="twitter.com"><FiTwitter /></Link></li>
                                    <li><Link to="instagram.com"><FiInstagram /></Link></li>
                                    <li><Link to="linkdin.com"><FiLinkedin /></Link></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopBar;
