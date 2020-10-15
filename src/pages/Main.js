import React from 'react';
import { Helmet } from "react-helmet";
import { PresentationIndex } from './../parts/PresentationIndex';
import PortfolioGrid from './../parts/PortfolioGrid';

class Main extends React.Component {
    render() {

        let year = new Date().getFullYear()

        return (
            <>
                <Helmet>
                    <title>Juan Berrios — Diseñador & Desarrolador Web</title>
                    <meta property="og:title" content="Juan Berrios — Diseñador & Desarrollador Web" />
                    <meta name="twitter:title" content="Juan Berrios — Diseñador & Desarrollador Web" />
                    <meta itemprop="name" content="Juan Berrios — Diseñador & Desarrollador Web" />

                    <meta name="description" content="Tengo más de 5 años de experiencia trabajando con una variedad de clientes y marcas locales. Mi trabajo se enfoca en el diseño y producción de sitios web y aplicaciones para móviles y para web." />
                    <meta property="og:description" content="Tengo más de 5 años de experiencia trabajando con una variedad de clientes y marcas locales. Mi trabajo se enfoca en el diseño y producción de sitios web y aplicaciones para móviles y para web." />
                    <meta name="twitter:description" content="Tengo más de 5 años de experiencia trabajando con una variedad de clientes y marcas locales. Mi trabajo se enfoca en el diseño y producción de sitios web y aplicaciones para móviles y para web." />
                    <meta itemprop="description" content="Tengo más de 5 años de experiencia trabajando con una variedad de clientes y marcas locales. Mi trabajo se enfoca en el diseño y producción de sitios web y aplicaciones para móviles y para web." />

                    <link rel="canonical" href="https://juanberrios.com" />
                    <meta property="og:url" content="https://juanberrios.com" />
                    <meta name="twitter:url" content="https://juanberrios.com" />

                    <meta property="og:image" content={`https://juanberrios.com/${process.env.PUBLIC_URL + 'img/me.jpg'}`} />
                    <meta property="og:image:width" content="900" />
                    <meta property="og:image:height" content="470" />
                    <meta name="twitter:image" content={`https://juanberrios.com/${process.env.PUBLIC_URL + 'img/me.jpg'}`} />
                    <meta itemprop="image" content={`https://juanberrios.com/${process.env.PUBLIC_URL + 'img/me.jpg'}`} />

                    <meta name="copyright" content={`(c) ${year} Juan Berrios`} />
                </Helmet>
                <PresentationIndex />
                <PortfolioGrid />
            </>
        )
    }
}

export default Main;