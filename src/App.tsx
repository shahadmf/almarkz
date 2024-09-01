import React from 'react';

import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Why from './components/Why';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Why />
      <Benefits />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
