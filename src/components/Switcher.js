import React from 'react';
import { Route } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

// Prov
import { worksProvider } from '../WorksProvider';

// Pages
import Main from '../pages/Main';
import WorkPage from '../pages/Work';
import ProfilePage from '../pages/Profile';

// Components
import ScrollToTop from './scrollToTop';

function Switcher() {

    // let location = useLocation();
    let works = worksProvider;

    return (
        <>
            <ScrollToTop />
            <AnimatedSwitch
                atEnter={{ 
                    opacity: 0
                 }}
                atLeave={{ 
                    opacity: 0
                 }}
                atActive={{ 
                    opacity: 1
                 }}
            >

                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/profile">
                    <ProfilePage />
                </Route>
                {works.map((work) => (
                    <Route path={`/work/${work.link}`}>
                        <WorkPage content={work} />
                    </Route>
                ))}
                <Route>
                    <Main />
                </Route>

            </AnimatedSwitch>
        </>
    )

}

export default Switcher;