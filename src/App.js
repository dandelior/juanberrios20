import React from 'react';
// import logo from './logo.svg';
import { Header } from './parts/Header';
import { Footer } from './parts/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Index
import { PresentationIndex } from './parts/PresentationIndex';
import { PortfolioGrid } from './parts/PortfolioGrid';
// Work
import { Work } from './parts/Work';
// Profile
import { Profile } from './parts/Profile';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Router>
          <Switch>
            <Route exact path="/">
              <PresentationIndex />
              <PortfolioGrid />
            </Route>
            <Route path="/profile">
              {/* Perfil */}
              <Profile />
            </Route>
            <Route path="/work">
              {/* Work */}
              <Work />
            </Route>
            <Route>
              {/* 404 */}
            </Route>
          </Switch>
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
