import React from 'react'
import HeaderOne from '../common/header/HeaderOne'
import HeaderTopBar from '../common/header/HeaderTopBar'
import SEO from '../common/SEO'
import Privacidad from '../elements/politicas/Privacidad'
import SectionTitle from '../elements/sectionTitle/SectionTitle'

const Privacy = () => {
    return (
        <>
            <SEO title="Politicas de privacidad" />
            <main className="page-wrapper">

                <HeaderTopBar />
                <HeaderOne />

                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    title="Politica de Privacidad"
                                />
                            </div>
                        </div>
                        <Privacidad />

                    </div>
                </div>




            </main>
        </>
    )
}

export default Privacy
