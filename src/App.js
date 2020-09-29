import React from 'react';
// import logo from './logo.svg';
import { Header } from './parts/Header';
import { Footer } from './parts/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop';
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

    return (
        <Router>
          <>
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
                <Route path="/work">
                  <ScrollToTop />
                  <WorkPage />
                </Route>
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
