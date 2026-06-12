import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <PainPoints />
      <Solution />
      <Features />
      <Testimonials />
      <Pricing />
      <FooterCTA />
    </div>
  );
}

export default App;
