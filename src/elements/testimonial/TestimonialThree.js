import React from 'react';
import Slider from "react-slick";
import { slickDot } from "../../utils/script";

const testimonialData = [
    {
        image: 'testimonial-01',
        name: 'Luis Chavez',
        designation: 'Honeywell Mexico',
        location: 'Honeywell Mexico', 
        description: '"Gorilla-Labs nos ayudo a automatizar tareas que se requerian para eficientizar algunos proceso en produccion."',
       
    },
    {
        image: 'testimonial-02',
        name: 'Daniel Hernandez',
        designation: 'WTI Services',
        location: 'WTI Services', 
        description: '"Inovar en el sector siempre a sido fundamental, ellso nos ayudaron a poder marcar esa diferencia con los demas."',
      
    },
    {
        image: 'testimonial-03',
        name: 'Hector Rico',
        designation: 'LG Pros',
        location: 'LG Pros', 
        description: '"La publicidad y la manera de como se obtienen nuevos clientes a cambiado, si no tienes website, NO ESTAS EN INTERNET"',
    },
]
const TestimonialThree = ({teamStyle}) => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <Slider className="slick-space-gutter--15 rn-slick-dot rn-slick-arrow mb--60" {...slickDot}>
                    {testimonialData.map((data, index) => (
                        <div key={index} className={`testimonial-style-two ${teamStyle}`}>
                            <div className="row align-items-center row--20">
                                <div className="order-2 order-md-1 col-lg-6 col-md-8 offset-lg-1">
                                    <div className="content mt_sm--40">
                                        <span className="form">{data.form}</span>
                                        <p className="description">{data.description}</p>
                                        <div className="client-info">
                                            <h4 className="title">{data.name}</h4>
                                            <h6 className="subtitle">{data.subtitle}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 order-md-2 col-lg-4 col-md-4">
                                    <div className="thumbnail">
                                        <img className="w-100" src={`./images/testimonial/${data.image}.png`} alt="Corporate React Template" />
                                    </div>
                                </div>
                            </div> 
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
export default TestimonialThree;




















