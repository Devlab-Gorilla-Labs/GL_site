import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const AboutBenefits = ({ benefits, points  }) => {

    const scrollToButton = () => {
        window.scrollTo(0, 10000);
    };

    return (
        <div className="rwt-about-area about-style-2 rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center">


                    <div className="col-lg-12 mt_md--30 mt_sm--30">
                        <div className="content">
                            <div className="section-title">


                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                >
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <p> {benefits} </p>
                                        </div>

                                        <div className="col-lg-6">
                                            <ul className="list-icon">
                                                {points.map((val, i) => (
                                                    <li key={i}><span className="icon"><FiCheck /></span> { val } </li>
                                                ))}
                                               

                                                
                                            </ul>
                                        </div>

                                    </div>

                                </ScrollAnimation>
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <div className="text-center">
                                        <div className="read-more-btn mt--40">
                                            <Link className="btn-default btn-icon" onClick={scrollToButton}>CONTACTANOS <i className="icon"><FiArrowRight /></i></Link>
                                        </div>

                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBenefits;
