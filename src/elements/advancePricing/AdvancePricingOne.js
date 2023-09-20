import React from 'react'
import { FiCheck, FiStar } from "react-icons/fi";

const AdvancePricingOne = () => {
    return (
        <div className="advance-pricing">
            <div className="inner">
                <div className="row row--0">
                    <div className="col-lg-6">
                        <div className="pricing-left">
                            <h3 className="main-title">Tienda en Linea.</h3>
                            <p className="description">Lanza tu tienda digital profesional, y empieza a vender 24/7.</p>
                            <div className="price-wrapper">
                                <span className="price-amount">$25,500 <sup>/mxn +IVA</sup></span>
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
                            <span className="subtitle">Tu tienda de por vida, sin rentas ni planes forzosos.</span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="pricing-right">
                            <div className="pricing-offer">
                                <div className="single-list">
                                    <h4 className="price-title">Todo un Website Profesional:</h4>
                                    <ul className="plan-offer-list">
                                        <li><FiCheck /> 6 Cuentas de Email</li>
                                        <li><FiCheck /> Dominio (www.TuEmpresa.com)</li>
                                        <li><FiCheck />  Hosting y Certificado SSL</li>
                                        <li><FiCheck />  Google Business</li>
                                    </ul>
                                </div>
                                <div className="single-list mt--40">
                                    <h4 className="price-title">... ademas del poder del E-Commerce:</h4>
                                    <ul className="plan-offer-list">
                                        <li><FiCheck /> Carrito de Compras</li>
                                        <li><FiCheck /> Pasarela de Pagos</li>
                                        <li><FiCheck />  Metodos de Pago (MercadoPago o PayPal)</li>
                                        <li><FiCheck />  Interfaz amigable</li>
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

export default AdvancePricingOne
