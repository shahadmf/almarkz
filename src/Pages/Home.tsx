import React from 'react'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits';
import Pricing from '../components/Pricing';
import Why from '../components/Why';

const Home = () => {
  return (
    <div>
      <Hero />
      <Why />
      <Benefits />
      {/* <Pricing /> */}
    </div>
  );
}

export default Home