import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import WhyWayLink from './components/WhyWayLink';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 overflow-hidden selection:bg-brand-500 selection:text-white">
      {/* Background Grid Pattern Global */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:40px_40px] pointer-events-none z-0 opacity-50" />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <WhyWayLink />
          <DownloadCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;