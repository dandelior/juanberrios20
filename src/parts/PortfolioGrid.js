import React from 'react';
import '../assets/sass/portfolioGrid.sass';
import { Link } from 'react-router-dom';
import { worksProvider } from '../WorksProvider';

export class PortfolioGrid extends React.Component {
    render(){

        let works = worksProvider;

        return (
            <>
                <div className="portfolioGrid pd-lr">
                    {works.map((work) => (
                        <div className="item">
                            <Link to={`work/${work.link}`} className="img" style={{backgroundImage: `url('${process.env.PUBLIC_URL + '/img/' + work.imgLink + '.png'}')` }}></Link>
                            <div className="data">
                                <Link to={`work/${work.link}`}>
                                    <h4>{work.title}</h4>
                                </Link>
                                <p>{work.categories}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}