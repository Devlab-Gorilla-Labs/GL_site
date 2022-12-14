import React from 'react';
import Typed from 'react-typed';

const AboutOne = () => {
    return (
        <div className="rwt-about-area rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100" src="./images/about/about-1.png" alt="About Images" />
                        </div>
                    </div>

                    <div className="col-lg-7 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="section-title">
                                <h2 className="title">Tecnologia a tu Alcance <br /> {" "}
                                    <Typed className="theme-gradient"
                                        strings={[
                                            "Cd Juarez, Chih",
                                            "El Paso, Tx",
                                            "Chihuhua, Chih",
                                            "Sacramento, CA",
                                        ]}
                                        typeSpeed={80}
                                        backSpeed={5}
                                        backDelay={1000}
                                        loop
                                    />
                                </h2>
                                <p>
                                    Somos una startup Chihuahuenes y 100% Mexicana, dedicada al Desarrollo de aplicaciones móviles,
                                    tiendas en linea, websites y marketing... nos enfocamos detalladamente en los requerimientos
                                    únicos de cada proyecto y cada ciente, para asi poder brindar un servicio y atencion totalmente
                                    personalizado. Gracias a la tecnologia, nos permite poder trabajar con clintes desde Scramento, California, US
                                    hasta Cancun, Quintana Roo, Mexico.
                                </p>
                                <p>
                                    Las apps y su utilización ha ido en constante crecimiento, ahora los clientes esperan mas de usted
                                    como líder empresarial. Hoy el desarrollo de apps para moviles representa no solo la innovación de
                                    un negocio, también consolida su presencia online utilizando las nuevas tecnologías.
                                </p>
                                <div className="read-more-btn mt--40">
                                    <a className="btn-default" href="#"><span>Conocenos mas...</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutOne
