import React from 'react';
import { worksProvider } from '../WorksProvider';
import '../assets/sass/portfolioGrid.sass';

export class PortfolioGrid extends React.Component {
    render(){

        let works = worksProvider;

        return (
            <>
                <div className="portfolioGrid pd-lr">
                    {works.map((work) => (
                        <div className="item">
                            <a href={work.link} className="img" style={{backgroundImage: `url('${process.env.PUBLIC_URL + '/img/saga-cover.png'}')` }}>
                            </a>
                            <div className="data">
                                <a href={work.link}>
                                    <h4>{work.title}</h4>
                                </a>
                                <p>{work.categories}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}