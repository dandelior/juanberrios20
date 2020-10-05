import React from 'react';
import '../assets/sass/profile.sass';
import ProfileSlider from '../components/profileSlider';

export class Profile extends React.Component {
    render() {
        return (
            <div className="profile">
                <div className="pd-lr">
                    <div className="profileThumbnail" style={{backgroundImage: `url('${process.env.PUBLIC_URL + '/img/me.jpg'}')`}}></div>
                </div>
                <div className="bio pd-lr">
                    <h5>Perfil — Bio</h5>
                    <h1>
                        Hola, soy <span className="font-bold">Juan</span><br />
                        <span className="font-bold">Diseñador</span> y <span className="font-bold">Desarrollador Frontend</span> chileno.
                    </h1>
                    <div className="description">
                        <p>
                            {/* Tengo más de 5 años de experiencia trabajando con una variedad de clientes y marcas locales. 
                            Mi trabajo se enfoca en el diseño y producción de sitios web y aplicaciones para móviles y para web. */}
                            Desde pequeño curioseaba en internet, creando sitios web a través de editores WYSIWYG o en plataformas de blogging. 
                            Pero la inquietud por aprender a hacer cosas con mejor calidad y de manera más profesional me llevó a estudiar desarrollo web 
                            y un poco de programación de forma autodidacta.
                        </p>
                        <p>
                            {/* Vivo y trabajo en Curicó, en una pequeña agencia llamada asomic, en donde creamos y llevamos 
                            a la vida diversos productos digitales. Muchos de ellos forman parte de mi portafolio. */}
                            Desde 2018 comencé a trabajar en <a href="https://asomic.com">asomic</a> una pequeña agencia digital. Allí me encargo del diseño/desarrollo 
                            de aplicaciones web y móviles, como también de algunos proyectos de identidad corporativa. Hoy tengo más de cinco años de experiencia 
                            en el diseño de interfaces y desarrollo frontend.
                        </p>
                    </div>
                </div>
                {/* <div className="profilePlayground" style={{backgroundImage: `url('${process.env.PUBLIC_URL + '/img/me-1.jpg'}')`}}></div> */}
                <ProfileSlider />
                <div className="services pd-lr">
                    <h1>Algunas formas en que <span className="font-bold">te puedo ayudar</span></h1>
                    <div className="items">
                        <div className="item">
                            <h5>UI / UX</h5>
                            <h3>Diseñar un Sitio Web moderno</h3>
                            <p>
                                ¿Necesitas un sitio web para profesionalizar tu presencia online? ¿Tienes un sitio web que no cumple tus expectativas? 
                                Puedo diseñar el sitio web que tu empresa o negocio necesita.
                            </p>
                        </div>
                        <div className="item">
                            <h5>Desarrollo Frontend</h5>
                            <h3>Construir un sitio web responsive</h3>
                            <p>
                                Puedo construir sitios web simples y complejos, desde sitios de aterrizaje (landing page) hasta complejos sitios web corporativos, 
                                pasando por portafolios, blogs, catálogos, entre otros.
                            </p>
                        </div>
                        <div className="item">
                            <h5>Branding</h5>
                            <h3>Dar un impulso o digitalizar tu marca</h3>
                            <p>
                                ¿Tienes una marca que carece de personalidad? ¿Sientes que tu marca está desactualizada frente al mundo digital?. 
                                Déjame agregar valor a tu marca que la diferenciará y potenciará.
                            </p>
                        </div>
                        <div className="item">
                            <h5>UI / UX</h5>
                            <h3>Diseñar una aplicación móvil nativa</h3>
                            <p>
                                Diseñar una aplicación es completamente diferente a diseñar un sitio web. Puedo diseñar tu aplicación nativa optimizada para todos 
                                los dispositivos, plataformas y ecosistemas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}