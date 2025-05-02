import React from 'react';
import { MessageSquareHeart, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#25D366]/10 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <MessageSquareHeart className="text-[#25D366] w-6 h-6" />
            <span className="font-bold text-gray-800">PresuPing</span>
            <span className="text-gray-500 text-sm">Marketing Assets © 2025</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="flex items-center gap-1 text-gray-600 hover:text-[#25D366] transition-colors">
              <span>Brand Guidelines</span>
              <ExternalLink size={14} />
            </a>
            <a href="#" className="flex items-center gap-1 text-gray-600 hover:text-[#25D366] transition-colors">
              <span>Download Assets</span>
              <ExternalLink size={14} />
            </a>
            <a href="#" className="flex items-center gap-1 text-gray-600 hover:text-[#25D366] transition-colors">
              <span>Contact</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;