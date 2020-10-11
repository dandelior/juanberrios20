import React from 'react';
import { Helmet } from "react-helmet";
import { Work } from './../parts/Work';

class WorkPage extends React.Component {

    render() {

        let year = new Date().getFullYear();
        let work = this.props.content;

        return (
            <>
                <Helmet>
                    <title>{work.title} — Juan Berrios</title>
                    <meta property="og:title" content={`${work.title} - Juan Berrios`} />
                    <meta name="twitter:title" content={`${work.title} - Juan Berrios`} />
                    <meta itemprop="name" content={`${work.title} - Juan Berrios`} />

                    <meta name="description" content={`${work.description.description[0].replace(/<\/?[^>]+>/ig, " ")}`} />
                    <meta property="og:description" content={`${work.description.description[0].replace(/<\/?[^>]+>/ig, " ")}`} />
                    <meta name="twitter:description" content={`${work.description.description[0].replace(/<\/?[^>]+>/ig, " ")}`} />
                    <meta itemprop="description" content={`${work.description.description[0].replace(/<\/?[^>]+>/ig, " ")}`} />

                    <link rel="canonical" href={`https://juanberrios.com/work/${work.link}`} />
                    <meta property="og:url" content={`https://juanberrios.com/work/${work.link}`} />
                    <meta name="twitter:url" content={`https://juanberrios.com/work/${work.link}`} />

                    <meta property="og:image" content={`https://juanberrios.com/img/works/${work.content.images[0]}`} />
                    <meta property="og:image:width" content="900" />
                    <meta property="og:image:height" content="470" />
                    <meta name="twitter:image" content={`https://juanberrios.com/img/works/${work.content.images[0]}`} />
                    <meta itemprop="image" content={`https://juanberrios.com/img/works/${work.content.images[0]}`} />

                    <meta name="copyright" content={`(c) ${year} Juan Berrios`} />
                </Helmet>
                <Work content={work} />
            </>
        )
    }
}

export default WorkPage;