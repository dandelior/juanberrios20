import React from 'react';
import '../assets/sass/work.sass';

export class Work extends React.Component {
    constructor(props) {
        super(props)
    }

    htmlMarkup(e){
        return {__html: e};
    }

    render() {
        let work = this.props.content;

        return (
            <div>
                <div className="work pd-lr">
                    <div className="workImage" style={{backgroundImage: `url('${process.env.PUBLIC_URL + `/img/works/${work.cover}`}')` }}></div>
                    <div className="workHeader">
                        <div className="headerDescription">
                            <h5>Proyecto Seleccionado</h5>
                            <h2 dangerouslySetInnerHTML={this.htmlMarkup(work.description.title)}>
                            </h2>
                            <div className="description">
                                {work.description.description.map((desc) => {
                                    return (
                                        <p dangerouslySetInnerHTML={this.htmlMarkup(desc)}></p>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="headerDetails">
                            <div className="item">
                                <h6>Agencia</h6>
                                {work.description.agency.map((ag) => (<p>{ag}</p>))}
                                {/* <p>asomic</p> */}
                            </div>
                            <div className="item">
                                <h6>Encargo</h6>
                                {work.description.commission.map((comm) => (<p>{comm}</p>))}
                                {/* <p>Branding</p>
                                <p>Sitio Web</p> */}
                            </div>
                            <div className="item">
                                <h6>Mi Parte en el Proyecto</h6>
                                {work.description.myRole.map((role) => (<p>{role}</p>))}
                                {/* <p>Identidad Gráfica</p>
                                <p>Diseño Web</p>
                                <p>Desarrollo Web</p> */}
                            </div>
                            <div className="item">
                                <h6>Lenguajes / Frameworks</h6>
                                {work.description.frameworks.map((fw) => (<p>{fw}</p>))}
                                {/* <p>Laravel</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        {work.content.images.map((img) => (<img src={process.env.PUBLIC_URL + `/img/works/${img}`} />))}
                        {/* <img src={process.env.PUBLIC_URL + '/img/work-1.jpg'} /> */}
                    </div>
                </div>
            </div>
        )
    }
}