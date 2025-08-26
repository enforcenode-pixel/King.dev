import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ArtistSlider from './components/ArtistSlider';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ArtistSlider />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default App;
