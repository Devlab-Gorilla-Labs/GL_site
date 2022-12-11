import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

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


const TestimonialOne = ({column , teamStyle}) => {
    return (
        <div className="row row--15">
            {testimonialData.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`rn-box-card ${teamStyle}`}>
                            <div className="inner">
                                <figure className="thumbnail">
                                    <img src={`./images/testimonial/${data.image}.png`} alt="Corporate React Template" />
                                </figure>
                                <figcaption className="content">
                                    <p className="description">{data.description}</p>
                                    <h2 className="title">{data.name}</h2>
                                    <h6 className="subtitle theme-gradient">{data.designation}</h6>
                                </figcaption>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}

export default TestimonialOne;
