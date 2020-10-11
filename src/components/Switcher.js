import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

// Prov
import { worksProvider } from '../WorksProvider';

// Pages
import Main from '../pages/Main';
import WorkPage from '../pages/Work';
import ProfilePage from '../pages/Profile';

import ScrollToTop from './scrollToTop';

function Switcher() {

    // let location = useLocation();
    let works = worksProvider;

    return (
        <>
            {/* <ScrollToTop /> */}
            <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
            >

                <Route exact path="/">
                    {/* <ScrollToTop /> */}
                    <Main />
                </Route>
                <Route path="/profile">
                    {/* <ScrollToTop /> */}
                    <ProfilePage />
                </Route>
                {works.map((work) => (
                    <Route path={`/work/${work.link}`}>
                        {/* <ScrollToTop /> */}
                        <WorkPage content={work} />
                    </Route>
                ))}
                <Route>
                    {/* <ScrollToTop /> */}
                    <Main />
                </Route>

            </AnimatedSwitch>
        </>
    )

}

export default Switcher;