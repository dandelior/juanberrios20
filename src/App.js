import React from 'react';
// import logo from './logo.svg';
import { Header } from './parts/Header';
import { Footer } from './parts/Footer';
import { PresentationIndex } from './parts/PresentationIndex';
import { PortfolioGrid } from './parts/PortfolioGrid';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PresentationIndex />
        <PortfolioGrid />
        <Footer />
      </div>
    );
  }
}

export default App;
