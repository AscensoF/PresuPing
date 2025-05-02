import React from 'react';
import { ArrowDown, MessageSquareHeart, Euro } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Marketing Visuals for <span className="text-[#25D366]">PresuPing</span>
          </h1>
          <p className="text-xl text-gray-600">
            A collection of marketing assets for the WhatsApp-based budgeting app that helps you track expenses directly in your chats.
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#25D366]/20 shadow-lg">
            <p className="text-gray-700">
              <span className="font-bold">Style Guidelines:</span> WhatsApp green (#25D366) as primary, warm yellows and soft pastels as accents, Helvetica Rounded typography, consistent rounded corners, mobile-first approach.
            </p>
          </div>
          <a 
            href="#app-store"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20C55E] text-white px-6 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
          >
            Explore Visuals <ArrowDown size={18} />
          </a>
        </div>
        <div className="md:w-1/2 relative">
          <div className="aspect-square max-w-[400px] mx-auto bg-white rounded-3xl shadow-2xl p-6 relative overflow-hidden border-8 border-gray-800">
            <div className="absolute top-0 left-0 right-0 h-16 bg-[#25D366] flex items-center px-4">
              <div className="flex items-center gap-2 text-white">
                <MessageSquareHeart size={24} />
                <span className="font-bold">PresuPing</span>
              </div>
            </div>
            <div className="pt-16 h-full flex flex-col">
              <div className="bg-gray-100 rounded-lg p-3 my-2 ml-auto max-w-[70%]">
                <p className="text-sm">What's my budget this week?</p>
              </div>
              <div className="bg-[#DCF8C6] rounded-lg p-3 my-2 mr-auto max-w-[70%]">
                <p className="text-sm font-medium">Your weekly budget: 50€</p>
                <p className="text-sm mt-1">You've spent 12€ so far!</p>
                <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-[24%] bg-[#25D366]"></div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 my-2 ml-auto max-w-[70%]">
                <p className="text-sm">I just bought coffee ☕ for 3.50€</p>
              </div>
              <div className="bg-[#DCF8C6] rounded-lg p-3 my-2 mr-auto max-w-[70%]">
                <p className="text-sm font-medium">Updated!</p>
                <p className="text-sm mt-1">Weekly budget: 46.50€ remaining</p>
                <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-[31%] bg-[#25D366]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-[10%] w-40 h-40 bg-[#25D366]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-[15%] w-60 h-60 bg-yellow-400/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;