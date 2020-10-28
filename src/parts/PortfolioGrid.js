import React, { useEffect, useState }  from 'react';
import '../assets/sass/portfolioGrid.sass';
import { Link } from 'react-router-dom';

import sanityClient from "../client.js";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function PortfolioGrid() {

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
                            <Link to={"/work/" + work.slug.current} className="img" style={{backgroundImage: `url('${urlFor(work.imagen_grilla).auto('format').width(600).url()}')`}} key={work.slug.current}>
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
            </div>
        </>
    );
}