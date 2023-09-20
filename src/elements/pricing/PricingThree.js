import React from 'react';
import { FiCheck } from "react-icons/fi";


const PricingThree = () => {
    return (
        <div className="row">
            <div className="col-lg-12 offset-lg-2">
                <div className="row row--0">
                   

                    {/* Start PRicing Table Area  */}
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="rn-pricing style-2 active">
                            <div className="pricing-table-inner">
                                <div className="pricing-header">
                                    <h4 className="title">Website Profesional</h4>
                                    <div className="pricing">
                                        <div className="price-wrapper">
                                            <span className="currency">$</span>
                                            <span className="price">12,000</span>
                                        </div>
                                        <span className="subtitle">mxn</span>
                                    </div>
                                </div>
                                <div className="pricing-body">
                                    <ul className="list-style--1">
                                        <li><FiCheck /> Website de 4 secciones </li>
                                        <li><FiCheck /> Dominio Personalizado (www.TuEmpresa.com)</li>
                                        <li><FiCheck /> 6 cuentas de email </li>
                                        <li><FiCheck /> Boton Whatsapp/ Messenger </li>
                                        <li><FiCheck /> Formulario de Registro </li>
                                        <li><FiCheck /> Certificado SSL </li>
                                        <li><FiCheck /> SEO Google ads</li>
                                        <li><FiCheck /> Hosting 1 año</li>
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
                </div>
            </div>
        </div>
    )
}
export default PricingThree;
