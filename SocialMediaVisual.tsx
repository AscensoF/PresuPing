import React from 'react';
import { FileSpreadsheet, MessageSquareHeart } from 'lucide-react';
import VisualCard from '../ui/VisualCard';
import SpecList from '../ui/SpecList';

const SocialMediaVisual: React.FC = () => {
  const specifications = [
    'Split-panel comparison design',
    'Left: Frustrated student with complex spreadsheets',
    'Right: Satisfied student using PresuPing',
    'Background: Soft pastel (#FDF6EC)',
    'Include CTA: "DM \'50\' to start"',
    'Optimized for social media dimensions'
  ];

  return (
    <VisualCard id="social" title="Social Media Visual">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 bg-gradient-to-br from-[#25D366]/10 to-[#FFDD59]/10 rounded-2xl overflow-hidden shadow-lg p-6">
          <div className="aspect-[5/4] bg-[#FDF6EC] rounded-xl overflow-hidden shadow-md relative">
            {/* Split panel design */}
            <div className="absolute inset-0 flex">
              {/* Left panel - Frustrated student */}
              <div className="w-1/2 relative overflow-hidden border-r border-white">
                <div className="absolute inset-0 bg-[#F8F8F8]/80"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                    <FileSpreadsheet className="w-8 h-8 text-red-500" />
                  </div>
                  
                  <div className="relative w-48 h-32 bg-white rounded-md shadow-md overflow-hidden transform -rotate-3">
                    <div className="absolute top-0 left-0 right-0 h-4 bg-gray-200 flex items-center px-2">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    <div className="pt-4 px-2">
                      <div className="grid grid-cols-6 gap-0.5">
                        {Array.from({ length: 30 }).map((_, i) => (
                          <div key={i} className="h-1.5 bg-gray-200 rounded-sm"></div>
                        ))}
                      </div>
                      <div className="mt-2 grid grid-cols-4 gap-1">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div key={i} className="h-3 bg-gray-300 rounded-sm"></div>
                        ))}
                      </div>
                      <div className="mt-2 grid grid-cols-3 gap-1">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div key={i} className="h-2 bg-red-200 rounded-sm"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Frustrated expression */}
                  <div className="mt-4 flex flex-col items-center">
                    <div className="relative w-12 h-6 bg-[#FFD7D7] rounded-full transform rotate-180">
                      <div className="absolute bottom-1 left-2 w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
                      <div className="absolute bottom-1 right-2 w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
                    </div>
                    <div className="text-center mt-2">
                      <p className="font-semibold text-gray-800 text-sm">Complicated</p>
                      <p className="text-xs text-gray-600">Hours of frustration</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right panel - Satisfied student */}
              <div className="w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#25D366]/10"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className="w-16 h-16 bg-[#25D366]/20 rounded-full flex items-center justify-center mb-4">
                    <MessageSquareHeart className="w-8 h-8 text-[#25D366]" />
                  </div>
                  
                  <div className="relative w-32 h-56 bg-white rounded-[24px] shadow-lg border-4 border-gray-800 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-4 bg-gray-800"></div>
                    <div className="absolute inset-2 top-6 rounded-lg bg-[#ECE5DD] flex flex-col p-2">
                      <div className="ml-auto bg-white rounded-md p-1.5 max-w-[70%] mb-1">
                        <p className="text-[6px]">Starting budget?</p>
                      </div>
                      <div className="bg-[#DCF8C6] rounded-md p-1.5 max-w-[70%] mb-1">
                        <p className="text-[6px] font-medium">Weekly: 50€</p>
                      </div>
                      <div className="ml-auto bg-white rounded-md p-1.5 max-w-[70%] mb-1">
                        <p className="text-[6px]">Coffee ☕ 3.50€</p>
                      </div>
                      <div className="bg-[#DCF8C6] rounded-md p-1.5 max-w-[70%]">
                        <p className="text-[6px] font-medium">46.50€ left</p>
                        <div className="h-0.5 bg-gray-200 rounded-full mt-0.5">
                          <div className="h-full w-[10%] bg-[#25D366] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Happy expression */}
                  <div className="mt-4 flex flex-col items-center">
                    <div className="relative w-12 h-6 bg-[#FFECBB] rounded-full">
                      <div className="absolute top-1 left-2 w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
                      <div className="absolute top-1 right-2 w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
                      <div className="absolute top-3 left-3 right-3 h-1 bg-gray-700 rounded-full"></div>
                    </div>
                    <div className="text-center mt-2">
                      <p className="font-semibold text-gray-800 text-sm">Simple</p>
                      <p className="text-xs text-gray-600">Just text and emojis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Banner */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#25D366] text-white py-3 px-6 flex items-center justify-between">
              <p className="font-bold text-lg">DM '50' to @PresuPing to start</p>
              <button className="bg-white text-[#25D366] px-4 py-1 rounded-full text-sm font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Specifications</h3>
          <SpecList items={specifications} />
          
          <div className="mt-8 p-4 bg-[#FDF6EC] rounded-lg border border-[#F0C240]/30">
            <h4 className="font-semibold text-gray-800 mb-2">Design Notes</h4>
            <p className="text-gray-700">
              The social media visual creates a compelling before/after comparison that immediately communicates the app's value proposition. The contrast between complex spreadsheets and simple chat interactions highlights PresuPing's core benefit.
            </p>
            <p className="text-gray-700 mt-2">
              The clear call-to-action "DM '50' to start" provides an immediate, friction-free way to begin using the service without downloading an app - a key advantage of the WhatsApp-based approach.
            </p>
          </div>
        </div>
      </div>
    </VisualCard>
  );
};

export default SocialMediaVisual;