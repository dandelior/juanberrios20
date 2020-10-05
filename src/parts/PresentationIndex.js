import React from 'react';
import '../assets/sass/presentation.sass';
// import { Link } from 'react-router-dom';
// import { PiioElement } from 'piio-images-react'

export class PresentationIndex extends React.Component {
    render() {
        return (
            <div className="hero pd-lr">
                {/* Presentacion */}
                <div className="presentationTitle">
                    <h5>Diseñador & Desarrolador Web</h5>
                    <h1>
                        Creo <span className="font-bold">Sitios Web</span>, <span className="font-bold">Aplicaciones Móviles</span> y <span className="font-bold">Productos Digitales</span>.
                    </h1>
                </div>

                {/* Index Description */}
                <div className="indexDescription">
                    <p>
                        {/* Con más de cinco años diseñando, desarrollando y llevando a la vida una gran variedad de sitios web y marcas digitales, puedo ayudarte con tu proyecto y hacer que destaque. */}
                        Tengo más de 5 años de experiencia trabajando con una variedad de clientes y marcas locales. Mi trabajo se enfoca en el diseño y producción de sitios web y aplicaciones para móviles y para web.
                    </p>
                    <p>
                        {/* Me considero un obsesionado con los detalles y creo que es la forma en como algo de verdad toma valor y se diferencia. Te invito a ver algunos de mis proyectos anteriores. <Link to="/profile">Más Info →</Link> */}
                        Vivo y trabajo en Curicó, en una pequeña agencia llamada asomic, en donde creamos y llevamos a la vida diversos productos digitales. Muchos de ellos forman parte de mi portafolio.
                    </p>
                </div>

                <figure className="imagePresentation">
                    {/* <img src={} /> */}
                    {/* <PiioElement tag="div" path={{backgroundImage: `url('${process.env.PUBLIC_URL + '/img/me-1.jpg'}')`}} alt="Si, ese soy yo" className="img"></PiioElement> */}
                    <div className="img" style={{backgroundImage: `url('${process.env.PUBLIC_URL + '/img/me-1.jpg'}')`}}></div>
                    <figcaption>Foto Pre-pandemia por <a href="https://jeangutierrez.com" target="_blank" rel="noopener noreferrer">Jean Gutierrez</a></figcaption>
                </figure>
            </div>
        )
    }
}