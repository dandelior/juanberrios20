import React from 'react';
import { Header } from './parts/Header';
import { Footer } from './parts/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
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
