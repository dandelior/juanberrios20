import React from 'react';
import '../assets/sass/work.sass';

export class Work extends React.Component {
    render() {
        return (
            <div>
                <div className="work">
                    <div className="workImage" style={{backgroundImage: `url('${process.env.PUBLIC_URL + '/img/work-1.jpg'}')` }}></div>
                    <div className="workHeader pd-lr">
                        <div className="headerDescription">
                            <h5>Proyecto Seleccionado</h5>
                            <h2>
                                <span className="font-bold">SAGA Service</span> — Actualización de una marca de Control de plagas
                            </h2>
                            <div className="description">
                                <p>SAGA requería una actualización de su sitio web y marca para acercar a nuevos públicos, competir en un entorno digital más exigente y por sobre todo diferenciarse.</p>
                                <p>Tuve la oportunidad de rediseñar el aspecto visual de la marca y diseñar su sitio web y luego desarrollarlo desde cero.</p>
                            </div>
                        </div>
                        <div className="headerDetails">
                            <div className="item">
                                <h6>Agencia</h6>
                                <p>asomic</p>
                            </div>
                            <div className="item">
                                <h6>Encargo</h6>
                                <p>Branding</p>
                                <p>Sitio Web</p>
                            </div>
                            <div className="item">
                                <h6>Mi Parte en el Proyecto</h6>
                                <p>Identidad Gráfica</p>
                                <p>Diseño Web</p>
                                <p>Desarrollo Web</p>
                            </div>
                            <div className="item">
                                <h6>Lenguajes / Fframeworks</h6>
                                <p>Laravel</p>
                            </div>
                        </div>
                    </div>
                    <div className="content pd-lr">
                        <img src={process.env.PUBLIC_URL + '/img/work-1.jpg'} />
                        <img src={process.env.PUBLIC_URL + '/img/work-1.jpg'} />
                        <img src={process.env.PUBLIC_URL + '/img/work-1.jpg'} />
                        <img src={process.env.PUBLIC_URL + '/img/work-1.jpg'} />
                        <img src={process.env.PUBLIC_URL + '/img/work-1.jpg'} />
                        <img src={process.env.PUBLIC_URL + '/img/work-1.jpg'} />
                    </div>
                </div>
            </div>
        )
    }
}