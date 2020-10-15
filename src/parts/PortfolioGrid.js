import React, { useEffect, useState }  from 'react';
import '../assets/sass/portfolioGrid.sass';
import { Link } from 'react-router-dom';

import sanityClient from "../client.js";
// import { worksProvider } from '../WorksProvider';

export default function PortfolioGrid() {
    // render(){

        // let works = worksProvider;
        const [allPostsData, setAllPosts] = useState(null);

        useEffect(() => {
            sanityClient
              .fetch(
                `*[_type == "trabajo"] | order(_createdAt desc) {
                titulo,
                slug,
                categorias,
                imagen_grilla{
                  asset->{
                  _id,
                  url
                }
              }
            }`
              )
              .then((data) => setAllPosts(data))
              .catch(console.error);
        }, []);

        return (
            <>
                <div className="portfolioGrid pd-lr">
                    {allPostsData && 
                        allPostsData.map((work, index) => (
                            <div className="item" key={index}>
                                <Link to={"/work/" + work.slug.current} className="img" style={{backgroundImage: `url('${work.imagen_grilla.asset.url}')`}} key={work.slug.current}>
                                </Link>
                                <div className="data">
                                    <Link to={"/work/" + work.slug.current} key={work.slug.current}>
                                        <h4>{work.titulo}</h4>
                                    </Link>
                                    <p>{work.categorias}</p>
                                </div>
                            </div>
                        ))
                    }
                    {/* {works.map((work) => (
                        <div className="item">
                            <Link to={`work/${work.link}`} className="img" style={{backgroundImage: `url('${process.env.PUBLIC_URL + '/img/' + work.imgLink + '.png'}')` }}></Link>
                            <div className="data">
                                <Link to={`work/${work.link}`}>
                                    <h4>{work.title}</h4>
                                </Link>
                                <p>{work.categories}</p>
                            </div>
                        </div>
                    ))} */}
                </div>
            </>
        );
    // }
}