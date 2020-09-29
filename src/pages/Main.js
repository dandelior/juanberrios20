import React from 'react';
import { PresentationIndex } from './../parts/PresentationIndex';
import { PortfolioGrid } from './../parts/PortfolioGrid';

class Main extends React.Component {
    render() {
        return (
            <>
                <PresentationIndex />
                <PortfolioGrid />
            </>
        )
    }
}

export default Main;