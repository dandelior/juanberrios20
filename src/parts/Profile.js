import React from 'react';
import '../assets/sass/profile.sass';

export class Profile extends React.Component {
    render() {
        return (
            <div className="profile">

                <div className="profileHeader pd-lr">
                    <div className="profileImages">
                        <div className="profileImage"></div>
                        <div className="profileImage"></div>
                    </div>
                    <div className="profileDesc">
                        <h5>Perfil — Bios</h5>
                        <h1>
                            Soy un <span className="font-bold">Diseñador</span> y <span className="font-bold">Desarrollador Frontend</span> chileno.
                        </h1>
                        <div className="theDesc">
                            <h4>
                                Con más de 5 años de experiencia trabajando con una variedad de clientes y marcas locales. Mi trabajo se enfoca en el <span className="font-bold">diseño</span>, <span className="font-bold">maquetación</span>, <span className="font-bold">prototipado</span>, <span className="font-bold">programación</span> y <span className="font-bold">producción</span> de sitios web y aplicaciones tanto para móviles como para web. 
                            </h4>
                            <h4>
                                Vivo y trabajo en Curicó, en una pequeña agencia llamada <a href="https://asomic.com">asomic</a>, en donde dirijo decisiones de diseño y experiencia en productos digitales.
                            </h4>
                            <h4>
                                En mis proyectos, mi principal preocupación es entregar productos que sean funcionales y estéticos, diferenciables y destacables.
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="profileItems pd-lr">
                    <h2>
                        Algunas formas en que te puedo ayudar.
                    </h2>
                    <div className="items">
                        <div className="item">
                            <h5>UI / UX</h5>
                            <h4>Diseñar un Sitio Web moderno</h4>
                            <p>
                                ¿Necesitas un sitio web para profesionalizar tu presencia online? ¿Tienes un sitio web que no cumple tus expectativas? Puedo diseñar el sitio web de tu empresa o negocio, lo hago desde que era pequeño y lo he ido perfeccioando desde entonces.
                            </p>
                        </div>
                        <div className="item">
                            <h5>Desarrollo Frontend</h5>
                            <h4>Construir un sitio web responsive personalizado</h4>
                            <p>
                                Puedo codificar tu sitio web y realizar desde sitios web de aterrizaje (landing page), hasta complejos sitios web corporativos, pasando por portafolios, blogs, catálogos, entre otros.
                            </p>
                        </div>
                        <div className="item">
                            <h5>Branding</h5>
                            <h4>Dar un impulso o digitalizar tu marca</h4>
                            <p>
                                ¿Tiene una marca o sitio web que carece de personalidad? ¿Siente que su marca está desactualizada a los tiempos digitales?. Déjame agregar algo de valor a tu marca que te encantará.
                            </p>
                        </div>
                        <div className="item">
                            <h5>UI / UX</h5>
                            <h4>Diseñar una aplicación móvil nativa</h4>
                            <p>
                                Diseñar una aplicación es completamente diferente a diseñar un sitio web. Puedo ayudarte a diseñar tu aplicación nativa optimizada para todos los dispositivos, plataformas y ecosistemas.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}