import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import JoinSection from './components/JoinSection';
import SecretsSection from './components/SecretsSection';
import GapSection from './components/GapSection';
import LastSecretSection from './components/LastSecretSection';
import StepsSection from './components/StepsSection';
import ProductsSection from './components/ProductsSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <VideoSection />
      <JoinSection />
      <SecretsSection />
      <GapSection />
      <LastSecretSection />
      <StepsSection />
      <ProductsSection />
      <Footer /> 
    </div>
  );
}

export default App;
