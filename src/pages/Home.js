import React from 'react';
import Typed from 'react-typed';
import SEO from "../common/SEO";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import HeaderTwo from '../common/header/HeaderTwo';
import HeaderTopNews from '../common/header/HeaderTopNews';
import FooterTwo from '../common/footer/FooterTwo';
import AboutOne from '../elements/about/AboutOne';
import ServiceFive from '../elements/service/ServiceFive';
import Copyright from '../common/footer/Copyright';
import CalltoActionFive from '../elements/calltoaction/CalltoActionFive';
import TeamTwo from '../elements/team/TeamTwo';
import TestimonialThree from "../elements/testimonial/TestimonialThree";
import TestimonialOne from '../elements/testimonial/TestimonialOne';

import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import Mission from "../elements/about/Mission";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
import HeaderTopBar from '../common/header/HeaderTopBar';
import Split3 from '../elements/split/SlipThree';
import BrandTwo from '../elements/brand/BrandTwo';
import PortfolioOne from '../elements/portfolio/PortfolioOne';
var BlogListData = BlogClassicData.slice(0, 3);


const Home = () => {
    return (
        <>
            <SEO title="Gorilla-Labs" />
            <main className="page-wrapper">
                <HeaderTopBar />
                <HeaderTwo btnStyle="round" HeaderSTyle="header-not-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 bg-transparent height-850">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <span className="subtitle">Soluciones Tecnológicas </span>
                                    <h1 className="title theme-gradient display-two">Desarrollamos tu <br /> {" "}
                                        <Typed
                                            strings={[
                                                "Website",
                                                "E-Commerce",
                                                "App Mobil",
                                                "Marketing.",
                                            ]}
                                            typeSpeed={80}
                                            backSpeed={5}
                                            backDelay={1000}
                                            loop
                                        />
                                    </h1>
                                    <p className="description">Ayudamos a nuestros clientes a crear su identidad de marca, experiencias digitales y sistematizacion de procesos.</p>
                                    <div className="button-group">
                                        {/* <a className="btn-default btn-medium round btn-icon" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">Purchase Now <i className="icon"><FiArrowRight /></i></a> */}
                                        <Link className="btn-default btn-medium btn-border round btn-icon" to="/Contact">Contactanos <i className="icon"><FiArrowRight /></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                <Separator />

                {/* Start About Area  */}
                <AboutOne />
                {/* End About Area  */}

                <Separator />
                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="¿Que podemos hacer por tu negocio?"
                                    title="Tenemos diferente servicios."
                                    description="Estas son algunas de la habilidades con las que podemos ayudarte."
                                />
                            </div>
                        </div>
                        <ServiceFive
                            serviceStyle="gallery-style"
                            textAlign="text-start"
                        />
                    </div>
                </div>
                {/* End Service Area  */}


                {/* Start Call To Action Area  */}
                <div className="rwt-callto-action-area">
                    <div className="wrapper">
                        <CalltoActionFive />
                    </div>
                </div>
                {/* End Call To Action Area  */}


                {/* Start Team Area  */}
                {/* <div className="rwt-team-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Nuestros Expertos."
                                        title = "El talento de nuestra compañia."
                                        description = "Brindamos servicios tecnologicos de calidad a <br /> PYMEs y negocios ."
                                    />
                            </div>
                        </div>
                        <TeamTwo column="col-lg-4 col-md-6 col-12" teamStyle="team-style-default style-two" />
                    </div>
                </div> */}
                {/* End Team Area  */}
                <Separator />
                {/* Start Mission Area   */}
                {/* <Mission /> */}
                {/* Start Mission Area  */}
                <Separator />


                {/* Start Portfolio Area  */}
                <div className="rwt-portfolio-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Portafolio"
                                    title="¡Checa Nuestros Mas Recientes Proyectos!"
                                    description="Trabajamos con los mejores, ofreciendo siempre el mejor servicio y la tecnologia mas reciente"
                                />
                            </div>
                        </div>
                        <PortfolioOne Column="col-lg-4 col-md-6 col-12 mt--30 portfolio" />
                    </div>
                </div>
                {/* End Portfolio Area  */}

                <Separator />

                {/* Start Testimonial Area  */}
                <div className="rwt-testimonial-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="¿Que opinan nuestros clientes?"
                                    title="Testimonio de clientes"
                                    description="Nos importa bastante que nuestros clientes queden satisfechos <br />  con nuestro servicio, eso nos ayuda seguir con nuestros proyectos"
                                />
                            </div>
                        </div>
                        {/* TESTIMONIOS de clientes */}
                        <TestimonialOne column="col-lg-4 col-md-6 col-12 mt--30" teamStyle="card-style-default testimonial-style-one" />
                        {/* <TestimonialThree teamStyle="" /> */}
                    </div>
                </div>
                {/* End Testimonial Area  */}

                <Separator />

                {/* <div className="blog-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Latests News"
                                    title = "Our Latest News."
                                    description = "We provide company and finance service for <br /> startups and company business."
                                />
                            </div>
                        </div>
                        <div className="row row--15">
                            {BlogListData.map((item) => (
                                <div key={item.id} className="col-lg-4 col-md-6 col-12 mt--30">
                                    <BlogList StyleVar="box-card-style-default" data={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}

                {/* Start Brand Area  */}
                <div className="rwt-brand-area pb--5 pt--60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="title">Algunos de nuestros socios...</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo brandStyle="brand-style-2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}

                {/* <FooterTwo /> */}
                <Split3
                    title="¿Aun No Cuentas Con Website?"
                    desc="Tener una página web, permitirá plasmar todos tu contenido en ella y todo lo que quieras reflejar.
                    El diseño de tu web, le dará a tus futuros clientes una imagen de cómo es la marca.
                    El consumidor comprenderá el mensaje que quieres transmitir y mostrarás una imagen sólida y coherente."
                />
                <Copyright />
            </main>
        </>
    )
}
export default Home;
