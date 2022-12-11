import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from "react-on-screen";
import ScrollAnimation from "react-animate-on-scroll";
import ContactForm from '../contact/ContactForm';

import HubspotForm from 'react-hubspot-form'

const Data = [
    {
        countNum: 10,
        countTitle: 'Mas Clientes..',
    },
    {
        countNum: 575,
        countTitle: 'Aumenta Visitas',
    },
    {
        countNum: 69,
        countTitle: 'Visibilidad en Google',
    },
    {
        countNum: 500,
        countTitle: 'Mas VENTAS',
    },
];

const SlipThree = ({title, desc}) => {
    return (
        <div className="rn-splite-style bg-color-blackest">
            <div className="split-wrapper">
                <div className="row no-gutters radius-10 align-items-center">


                    <div className="col-lg-6 col-xl-6 col-12">
                        <div className="split-inner">
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                <h4 className="title">{ title } </h4>
                            </ScrollAnimation>
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                <p className="description">
                                    {desc}
                                </p>
                            </ScrollAnimation>

                            <div className="row">
                                {Data.map((data, index) => (
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6" key={index}>
                                        <div className="count-box counter-style-4 text-start">
                                            <TrackVisibility once>
                                                {({ isVisible }) => isVisible &&
                                                    <div className="count-number"></div>}
                                            </TrackVisibility>
                                            <h5 className="counter-title">{data.countTitle}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-xl-6 col-12">
                        <div className='split-inner-2'>
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                <p className="description">Envianos tus datos para poder contactarte y platicar mas acerca de tu idea 💡</p>
                            </ScrollAnimation>
                            <HubspotForm
                                region='na1'
                                portalId='7013611'
                                formId='d0107c96-b577-4bf3-a7bd-c9617694375d'
                                loading={<div>Loading...</div>}
                            />
                        </div>
                        {/* <div className="thumbnail">
                            <img src="./images/split/split-03.jpg" alt="split Images" />
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SlipThree;