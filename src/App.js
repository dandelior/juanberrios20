import React from 'react';
// import logo from './logo.svg';
import { Header } from './parts/Header';
import { Footer } from './parts/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import { Piio } from 'piio-images-react'
import ScrollToTop from './components/scrollToTop';
import { worksProvider } from './WorksProvider';
// Index
import Main from './pages/Main';
// Work
import WorkPage from './pages/Work';
// Profile
import ProfilePage from './pages/Profile';

class App extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {

    let works = worksProvider;

    return (
      <Router>
          <>
            {/* <Piio domainKey="fgnc4m"></Piio> */}
            <Header />

              <Switch>
                {/* Index */}
                <Route exact path="/">
                  <ScrollToTop />
                  <Main />
                </Route>
                {/* Profile */}
                <Route path="/profile">
                  <ScrollToTop />
                  <ProfilePage />
                </Route>
                {/* A Work */}
                {works.map((work) => (
                  <Route path={`/work/${work.link}`}>
                    <ScrollToTop />
                    <WorkPage content={work} />
                  </Route>
                ))}
                {/* 404 */}
                <Route>
                  <ScrollToTop />
                  <Main />
                </Route>
              </Switch>

            <Footer />
          </>
        </Router>
    );
  }
}

export default App;
