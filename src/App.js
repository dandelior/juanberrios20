import React from 'react';
// import logo from './logo.svg';
import { Header } from './parts/Header';
import { Footer } from './parts/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
// import ScrollToTop from './components/scrollToTop';
import Switcher from './components/Switcher';

class App extends React.Component {

  render() {

    return (
      <Router>
          <>
            <Header />
            <Switcher />
            <Footer />
          </>
        </Router>
    );
  }
}

export default App;
