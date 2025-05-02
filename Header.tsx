import React from 'react';
import { MessageSquareHeart, Euro } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#25D366]/20 px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <MessageSquareHeart 
              className="text-[#25D366] w-8 h-8" 
              strokeWidth={2.5} 
            />
            <Euro 
              className="absolute text-white w-4 h-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
              strokeWidth={3} 
            />
          </div>
          <span className="font-bold text-xl text-gray-800">PresuPing</span>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#app-store" className="text-gray-700 hover:text-[#25D366] transition-colors">App Store</a></li>
            <li><a href="#branding" className="text-gray-700 hover:text-[#25D366] transition-colors">Branding</a></li>
            <li><a href="#onboarding" className="text-gray-700 hover:text-[#25D366] transition-colors">Onboarding</a></li>
            <li><a href="#social" className="text-gray-700 hover:text-[#25D366] transition-colors">Social</a></li>
            <li><a href="#stickers" className="text-gray-700 hover:text-[#25D366] transition-colors">Stickers</a></li>
            <li><a href="#data" className="text-gray-700 hover:text-[#25D366] transition-colors">Data</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;