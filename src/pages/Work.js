import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import '../assets/sass/work.sass';
import { Helmet } from "react-helmet";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function WorkPage() {
    let year = new Date().getFullYear();

    const [postData, setPostData] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient
          .fetch(
            `*[slug.current == "${slug}"]{
              titulo,
              encabezado,
              descripcion,
              slug,
              agencia,
              encargo,
              rol,
              lenguaje,
              contenido,
              imagen_portada{
                asset->{
                  _id,
                  url
                 }
               }
           }`
          )
          .then((data) => setPostData(data[0]))
          .catch(console.error);
    }, [slug]);

    if (!postData) return (
        <div className="loading-box">
            Cargando...
        </div>
    );

    return (
        <>
            {console.log(postData)}
            <Helmet>
                <title>{postData.titulo} — Juan Berrios</title>
                <meta property="og:title" content={`${postData.titulo} - Juan Berrios`} />
                <meta name="twitter:title" content={`${postData.titulo} - Juan Berrios`} />
                <meta itemprop="name" content={`${postData.titulo} - Juan Berrios`} />

                <meta name="description" content={postData.descripcion[0].children[0].text} />
                <meta property="og:description" content={postData.descripcion[0].children[0].text} />
                <meta name="twitter:description" content={postData.descripcion[0].children[0].text} />
                <meta itemprop="description" content={postData.descripcion[0].children[0].text} />

                <link rel="canonical" href={`https://juanberrios.com/work/${postData.slug.current}`} />
                <meta property="og:url" content={`https://juanberrios.com/work/${postData.slug.current}`} />
                <meta name="twitter:url" content={`https://juanberrios.com/work/${postData.slug.current}`} />

                <meta property="og:image" content={`${urlFor(postData.imagen_portada).url()}`} />
                <meta property="og:image:width" content="900" />
                <meta property="og:image:height" content="470" />
                <meta name="twitter:image" content={`${urlFor(postData.imagen_portada).url()}`} />
                <meta itemprop="image" content={`${urlFor(postData.imagen_portada).url()}`} />

                <meta name="copyright" content={`(c) ${year} Juan Berrios`} />
            </Helmet>
            <div className="work pd-lr">
                <div className="workImage" style={{backgroundImage: `url('${urlFor(postData.imagen_portada).auto('format').width(1600).url()}')` }}></div>
                <div className="workHeader">
                    <div className="headerDescription">
                        <h5>Proyecto Seleccionado</h5>
                        <BlockContent
                            blocks={postData.encabezado}
                            projectId={sanityClient.clientConfig.projectId}
                            dataset={sanityClient.clientConfig.dataset}
                        />
                        <div className="description">
                            <BlockContent
                                blocks={postData.descripcion}
                                projectId={sanityClient.clientConfig.projectId}
                                dataset={sanityClient.clientConfig.dataset}
                            />
                        </div>
                    </div>
                    <div className="headerDetails">
                        <div className="item">
                            <h6>Agencia</h6>
                            <p>{postData.agencia}</p>
                        </div>
                        <div className="item">
                            <h6>Encargo</h6>
                            <p>{postData.encargo}</p>
                        </div>
                        <div className="item">
                            <h6>Mi Parte en el Proyecto</h6>
                            <p>{postData.rol}</p>
                        </div>
                        <div className="item">
                            <h6>Lenguajes / Frameworks</h6>
                            <p>{postData.lenguaje}</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <BlockContent
                        blocks={postData.contenido}
                        imageOptions={{auto: 'format'}}
                        projectId={sanityClient.clientConfig.projectId}
                        dataset={sanityClient.clientConfig.dataset}
                    />
                </div>
            </div>
        </>
    )
}

export default WorkPage;