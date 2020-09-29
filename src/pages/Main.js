import React from 'react';
import { Helmet } from "react-helmet";
import { PresentationIndex } from './../parts/PresentationIndex';
import { PortfolioGrid } from './../parts/PortfolioGrid';

class Main extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Juan Berrios — Diseñador & Desarrolador Web</title>
                </Helmet>
                <PresentationIndex />
                <PortfolioGrid />
            </>
        )
    }
}

export default Main;