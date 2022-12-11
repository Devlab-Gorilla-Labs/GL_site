import React from 'react';
import { FiActivity, FiCast, FiMap, FiUserPlus } from "react-icons/fi";
import { AiFillAlert, AiFillRocket, } from "react-icons/ai";
import { FcMoneyTransfer, FcClock, FcLike, FcStatistics, FcPlus, FcFinePrint } from "react-icons/fc";


import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";



const ServiceOne = ({ textAlign, serviceStyle, ServiceList }) => {
    return (
        <div className="row row--15 service-wrapper">

           


            {ServiceList.map((val, i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-6" key={i}>
                    <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                 {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600"><Link to="#" dangerouslySetInnerHTML={{ __html: val.title }}></Link></h4>
                                {/* <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{ __html: val.description }}></p> */}
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;