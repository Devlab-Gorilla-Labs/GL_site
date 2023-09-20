import React from 'react'
import { FiCheck, FiStar } from "react-icons/fi";

const AdvancePricingApps = () => {
    return (
        <div className="advance-pricing">
            <div className="inner">
                <div className="row row--0">
                    <div className="col-lg-6">
                        <div className="pricing-left">
                            <h3 className="main-title">Website Profesional.</h3>
                            <p className="description">Lanza tu negocio en linea y dale una perspectiva mas profesional.</p>
                            <div className="price-wrapper">
                                <span className="price-amount">$12,000 <sup>/mxn + IVA</sup></span>
                            </div>
                            <div className="pricing-btn-group">
                                <button className="btn-default">COTIZAR</button>
                                <button className="btn-default btn-border">Informacion</button>
                            </div>
                            <div className="rating">
                                <a href="#rating"><FiStar /></a>
                                <a href="#rating"><FiStar /></a>
                                <a href="#rating"><FiStar /></a>
                                <a href="#rating"><FiStar /></a>
                                <a href="#rating"><FiStar /></a>
                            </div>
                            <span className="subtitle">Tu Website de por vida, sin rentas ni planes forzosos.</span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="pricing-right">
                            <div className="pricing-offer">
                                <div className="single-list">
                                    <h4 className="price-title">Todo un Website Profesional:</h4>
                                    <ul className="plan-offer-list">
                                        <li><FiCheck /> Website profesional responsivo</li>
                                        <li><FiCheck /> 6 Cuentas de Email</li>
                                        <li><FiCheck /> Dominio (www.TuEmpresa.com)</li>
                                        <li><FiCheck />  Hosting y Certificado SSL</li>
                                        <li><FiCheck />  SEO  y pixel FB</li>
                                    </ul>
                                </div>
                                <div className="single-list mt--40">
                                    <h4 className="price-title">... ademas la incorporacion de tu negoco en:</h4>
                                    <ul className="plan-offer-list">
                                        <li><FiCheck /> Facebook</li>
                                        <li><FiCheck /> Instagram</li>
                                        <li><FiCheck />  Google Business</li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvancePricingApps
