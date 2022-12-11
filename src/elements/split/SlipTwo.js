import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from "react-on-screen";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";



const Data = [
    {
        countNum: 199,
        countTitle: 'Happy Clients.',
    },
    {
        countNum: 575,
        countTitle: 'Employees',
    },
    {
        countNum: 69,
        countTitle: 'Useful Programs',
    },
    {
        countNum: 500,
        countTitle: 'Useful Programs',
    },
];

const scrollToButton = () => {
    window.scrollTo(0, 10000);
};


const SlipTwo = ({img, title, desc}) => {
    return (
        <div className="rn-splite-style">
            <div className="split-wrapper">
                <div className="row no-gutters radius-10 align-items-center">

                    <div className="col-lg-6 col-xl-6 col-12">
                        <div className="thumbnail">
                            <img src={ img } alt="split Images" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-xl-6 col-12">
                        <div className="split-inner">
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                <h4 className="title">{ title }</h4>
                            </ScrollAnimation>
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                <p className="description">
                                    { desc }
                                </p>
                            </ScrollAnimation>

                            <div className="row align-items-center">
                                <div className="inner text-center">
                                    <ScrollAnimation
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}
                                        className="button-group">

                                        <div className="text-center">
                                            <div className="read-more-btn mt--40">
                                                <Link className="btn-default btn-icon" onClick={scrollToButton}>CONTACTANOS <i className="icon"><FiArrowRight /></i></Link>
                                            </div>

                                        </div>

                                        
                                    </ScrollAnimation>
                                </div>

                                {/* {Data.map((data, index) => (
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
                                            <div className="count-box counter-style-4 text-start">
                                                <TrackVisibility once>
                                                    {({ isVisible }) => isVisible && 
                                                        <div className="count-number">{isVisible ? <CountUp end={data.countNum} /> : 0}</div>}
                                                </TrackVisibility>
                                                <h5 className="counter-title">{data.countTitle}</h5>
                                            </div>
                                        </div>
                                    ))} */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SlipTwo;