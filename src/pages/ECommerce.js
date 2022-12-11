import React from 'react';
import SEO from "../common/SEO";
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import HeaderOne from '../common/header/HeaderOne';
import CounterUpFour from '../elements/counterup/CounterUpFour';
import ServiceOne from '../elements/service/ServiceOne';
import AboutFour from '../elements/about/AboutFour';
import AdvancePricingOne from '../elements/advancePricing/AdvancePricingOne';
import BrandOne from '../elements/brand/BrandOne';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import HeaderTopBar from '../common/header/HeaderTopBar';
import Split3 from '../elements/split/SlipThree';
import Split2 from '../elements/split/SlipTwo';
import Contact from '../elements/contact/Contact';
import ContactOne from '../elements/contact/ContactOne';
import ContactForm from '../elements/contact/ContactForm';
import TimelineTwo from '../elements/timeline/TimelineTwo';
import CircleProgress from "../elements/progressbar/CircleProgress";
import AboutBenefits from '../elements/about/AboutBenefits';
import ScrollAnimation from "react-animate-on-scroll";
import TimelineOne from '../elements/timeline/TimelineOne';
import TestimonialOne from '../elements/testimonial/TestimonialOne';
import PricingOne from '../elements/pricing/PricingOne';
import { FcClock, FcLike, FcMoneyTransfer } from 'react-icons/fc';




const BannerData = [
    {
        image: "/images/bg/bg-image-20.jpg",
        title: "Our Web <br /> Agecny Plan.",
        description: "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials."
    },
]

const ServiceList = [
    {
        icon: <FcLike />,
        title: 'Mejora la Imagen',
        description: 'La imagende tu negocio dice mucho de tus servicios/prductos. Haz que tu cliente ideal se enamore desde la primer vista.'
    },
    {
        icon: <FcMoneyTransfer />,
        title: 'Incrementa Ventas',
        description: 'Tus clientes buscan todo por internet, asi es, ¡TODO!....que mejor estar ahi para cuando esten buscandote.'
    },
    {
        icon: <FcClock />,
        title: 'Servicio 24/7',
        description: 'Imaginate dormir y estar generando ventas al mismo tiempo , con un website tu negocio trabaja 24/7 todo el año.'
    },
]

const points = [
    "Aumentaras la captacion de prospectos.",
    "Podras crear publcidad en Google y Youtube.",
]


const ECommerce = () => {
    return (
        <>
            <SEO title="E-Commerce Web" />
            <main className="page-wrapper">

                <HeaderTopBar />
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-not-transparent" />

                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    description=""
                                    title="¿Ya vendes por internet?"
                                />
                            </div>
                        </div>

                        <Split2
                            img="./images/split/ecommerce-945x709.svg"
                            title="Lanza tu escaparate virtual 24/7"
                            desc="Tener un escaparate 24/7 y un vendedor que no haga malas caras es el
                            sueño de muchos emprendedores y comerciantes, y por suerte, todo esto es alcanzable
                            gracias a las nuevas tecnologias que tenemos hoy en dia. Una tienda en linea abre esas
                            nuevas oportunidades y clientes que al no estar en linea, pierdes esa gran 
                            oportunidad de hacer nuevos clientes."
                        />

                        <ServiceOne
                            serviceStyle="service__style--1 bg-color-blackest radius mt--50 rbt-border"
                            textAlign="text-start"
                            ServiceList={ServiceList}
                        />

                        <AboutBenefits
                            benefits="En resumen, al no tener presencia online, estas dejando ir un mercado que dia a dia va en ascenso.
                        La vida a cambiado, y la manera de como compramos, consultamos, buscamos, etc ah cambiado, tus clientes
                        potenciales estan todo el dia en linea.
                        Al iniciar con tu website y con la estrategia en linea, tu negocio vera:"
                            points={points}
                        />

                    </div>
                </div>
                {/* End Service Area  */}



                <div className="rwt-timeline-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Proceso Creativo..."
                                    title=""
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 mt--5">
                                <TimelineTwo classVar="dark-line" />
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />



                {/* Start Elements Area  */}
                <div className="rwt-testimonial-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb--10">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Testimonios de Clientes"
                                />
                            </div>
                        </div>
                        <TestimonialOne column="col-lg-4 col-md-6 col-12 mt--30" teamStyle="card-style-default testimonial-style-one" />
                    </div>
                </div>
                {/* End Elements Area  */}

                {/* Start Elements Area  */}
                <div className="rwt-pricing-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40 mb_sm--0">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Precios"
                                    description=""
                                />
                            </div>
                        </div>
                        <PricingOne />
                    </div>
                </div>
                {/* End Elements Area  */}


                {/* <FooterTwo /> */}
                <Split3 />
                <Copyright />
            </main>

        </>

    )

}

export default ECommerce;