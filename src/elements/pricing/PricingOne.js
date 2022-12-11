import React from 'react';
import { FiCheck } from "react-icons/fi";

const PricingOne = () => {
    return (
        <div className="row row--30">
            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing">

                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Landin Page</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">300</span>
                                </div>
                                <span className="subtitle">USD</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> 1 Pagina de Aterrizaje </li>
                                <li><FiCheck /> Boton Whatsapp/ Messenger </li>
                                <li><FiCheck /> Formulario de Registro </li>
                                <li><FiCheck /> Certificado SSL </li>
                                <li><FiCheck /> Hosting 1 año</li>
                                <li><FiCheck /> Diseño Responsivo</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a className="btn-default btn-border" href="#pricing">LO QUIERO</a>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing active">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Website Inicial</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">450</span>
                                </div>
                                <span className="subtitle">USD</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> 1 Pagina de Aterrizaje </li>
                                <li><FiCheck /> Boton Whatsapp/ Messenger </li>
                                <li><FiCheck /> Formulario de Registro </li>
                                <li><FiCheck /> Certificado SSL </li>
                                <li><FiCheck /> Integracion Pixel Facebook</li>
                                <li><FiCheck /> Hosting 1 año</li>
                                <li><FiCheck /> Website de 5 secciones</li>
                                <li><FiCheck /> Integracion de Chatbot</li>
                                <li><FiCheck /> Autoadministrable</li>
                                <li><FiCheck /> Diseño Responsivo</li>


                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a className="btn-default" href="#pricing">LO QUIERO</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Website Pro</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">975</span>
                                </div>
                                <span className="subtitle">USD</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> Todo lo que incluye el plan inicias mas...</li>
                                <li><FiCheck /> SEO Avanzado </li>
                                <li><FiCheck /> Bases de Datos Tiempo Real</li>
                                <li><FiCheck />  Sistema Web Autoadministrable</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a className="btn-default btn-border" href="#pricing">LO QUIERO</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}
        </div>
    )
}
export default PricingOne;
