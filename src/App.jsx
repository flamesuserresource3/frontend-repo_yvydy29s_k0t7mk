import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Verify from './components/Verify';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Verify />
      </main>
      <Footer />
    </div>
  );
};

export default App;
