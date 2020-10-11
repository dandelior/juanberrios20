import React from 'react';
import { Helmet } from "react-helmet";
import { Work } from './../parts/Work';

import ScrollToTop from '../components/scrollToTop';

class WorkPage extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        let work = this.props.content;

        return (
            <>
                {/* <ScrollToTop /> */}
                <Helmet>
                    <title>{work.title} — Juan Berrios</title>
                </Helmet>
                <Work content={work} />
            </>
        )
    }
}

export default WorkPage;