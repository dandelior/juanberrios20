import React from 'react';
import { worksProvider } from '../WorksProvider';
import '../assets/sass/portfolioGrid.sass';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export class PortfolioGrid extends React.Component {
    render(){

        let works = worksProvider;

        return (
            <>
                <div className="portfolioGrid pd-lr">
                    {works.map((work) => (
                        <div className="item">
                            <Link to={work.link} className="img" style={{backgroundImage: `url('${process.env.PUBLIC_URL + '/img/saga-cover.png'}')` }}></Link>
                            {/* <a href={work.link} className="img" style={{backgroundImage: `url('${process.env.PUBLIC_URL + '/img/saga-cover.png'}')` }}>
                            </a> */}
                            <div className="data">
                                {/* <a href={work.link}>
                                    <h4>{work.title}</h4>
                                </a> */}
                                <Link to={work.link}>
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