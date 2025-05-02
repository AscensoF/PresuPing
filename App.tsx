import React from 'react';
import { MessageSquareHeart } from 'lucide-react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MarketingGrid from './components/MarketingGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F8FFF8] to-[#FDF6EC]">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <MarketingGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;