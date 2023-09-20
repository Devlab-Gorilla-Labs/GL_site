import React from 'react';
import HeaderOne from "./header/HeaderOne";
import HeaderTopNews from "./header/HeaderTopNews";
import FooterTwo from "./footer/FooterTwo";
import Copyright from "./footer/Copyright";
import FooterOne from './footer/FooterOne';
import Split3 from '../elements/split/SlipThree';

const Layout = ({ children }) => {
    return (
        <>
            <main className="page-wrapper">
                <HeaderTopNews />
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />
                {children}
                <Split3
                    title="¿Aun No Cuentas Con Presencial Online?"
                    desc="Tener una página web, permitirá plasmar todos tu contenido en ella y todo lo que quieras reflejar.
                    El diseño de tu web, le dará a tus futuros clientes una imagen de cómo es la marca.
                    El consumidor comprenderá el mensaje que quieres transmitir y mostrarás una imagen sólida y coherente."
                />
                {/* <FooterTwo /> */}
                <Copyright />
            </main>
        </>
    )
}
export default Layout;
