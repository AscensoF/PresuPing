import React from 'react';
import { Gift, ThumbsUp, Droplets, PartyPopper } from 'lucide-react';
import VisualCard from '../ui/VisualCard';
import SpecList from '../ui/SpecList';

const StickerPackVisual: React.FC = () => {
  const specifications = [
    'Envelope mascot in 3 emotions: Confident, Anxious, Celebrating',
    'Bold outlines for clarity',
    'PNG export for messaging platforms',
    'Consistent character design across emotions'
  ];

  return (
    <VisualCard id="stickers" title="Sticker Pack">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 bg-gradient-to-br from-[#25D366]/10 to-[#FFDD59]/10 rounded-2xl overflow-hidden shadow-lg p-6">
          <div className="grid grid-cols-3 gap-6">
            {/* Confident sticker */}
            <div className="group">
              <div className="aspect-square bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center transform group-hover:rotate-3 transition-transform relative">
                <div className="w-32 h-32 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <Gift 
                        className="w-24 h-24 text-[#25D366]" 
                        strokeWidth={2.5} 
                      />
                      <div className="absolute bottom-1 right-1">
                        <ThumbsUp 
                          className="w-10 h-10 text-[#25D366] fill-white" 
                          strokeWidth={2.5} 
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Eyes and expression */}
                  <div className="absolute top-[30%] left-1/2 transform -translate-x-8">
                    <div className="w-3 h-4 rounded-full bg-white border-2 border-black"></div>
                  </div>
                  <div className="absolute top-[30%] left-1/2 transform translate-x-4">
                    <div className="w-3 h-4 rounded-full bg-white border-2 border-black"></div>
                  </div>
                  <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-3 bg-white border-2 border-black rounded-full transform rotate-[30deg]"></div>
                  </div>
                </div>
              </div>
              <p className="text-center mt-3 text-gray-700 font-medium">Confident</p>
              <p className="text-center text-sm text-gray-500">"On budget!"</p>
            </div>
            
            {/* Anxious sticker */}
            <div className="group">
              <div className="aspect-square bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center transform group-hover:rotate-3 transition-transform relative">
                <div className="w-32 h-32 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <Gift 
                        className="w-24 h-24 text-[#F0C240]" 
                        strokeWidth={2.5} 
                      />
                      <div className="absolute top-1 right-1 animate-pulse">
                        <Droplets 
                          className="w-8 h-8 text-[#60A5FA]" 
                          strokeWidth={2.5} 
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Eyes and expression */}
                  <div className="absolute top-[30%] left-1/2 transform -translate-x-8">
                    <div className="w-3 h-4 rounded-full bg-white border-2 border-black">
                      <div className="w-1 h-1 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>
                  <div className="absolute top-[30%] left-1/2 transform translate-x-4">
                    <div className="w-3 h-4 rounded-full bg-white border-2 border-black">
                      <div className="w-1 h-1 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>
                  <div className="absolute top-[48%] left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-2 bg-white border-2 border-black rounded-full"></div>
                  </div>
                </div>
              </div>
              <p className="text-center mt-3 text-gray-700 font-medium">Anxious</p>
              <p className="text-center text-sm text-gray-500">"Running low!"</p>
            </div>
            
            {/* Celebrating sticker */}
            <div className="group">
              <div className="aspect-square bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center transform group-hover:rotate-3 transition-transform relative">
                <div className="w-32 h-32 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <Gift 
                        className="w-24 h-24 text-[#25D366]" 
                        strokeWidth={2.5} 
                      />
                      <div className="absolute -top-2 -right-2">
                        <PartyPopper 
                          className="w-10 h-10 text-[#F97316]" 
                          strokeWidth={2.5} 
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Eyes and expression */}
                  <div className="absolute top-[30%] left-1/2 transform -translate-x-8">
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black">
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[30%] left-1/2 transform translate-x-4">
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black">
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[46%] left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-4 border-2 border-black bg-white rounded-full">
                      <div className="absolute top-0 left-0 w-full h-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center mt-3 text-gray-700 font-medium">Celebrating</p>
              <p className="text-center text-sm text-gray-500">"Saved money!"</p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Specifications</h3>
          <SpecList items={specifications} />
          
          <div className="mt-8 p-4 bg-[#FDF6EC] rounded-lg border border-[#F0C240]/30">
            <h4 className="font-semibold text-gray-800 mb-2">Design Notes</h4>
            <p className="text-gray-700">
              The sticker pack adds a playful, expressive dimension to the PresuPing experience. The envelope mascot personifies the budget, making financial tracking more engaging and emotional.
            </p>
            <p className="text-gray-700 mt-2">
              Each emotion corresponds to a budget state: confident (healthy budget), anxious (running low), and celebrating (financial win). Bold outlines ensure the stickers remain clear even at smaller sizes in messaging apps.
            </p>
            <p className="text-gray-700 mt-2">
              These stickers can be used both by the app to communicate budget status and by users to express their financial feelings to friends.
            </p>
          </div>
        </div>
      </div>
    </VisualCard>
  );
};

export default StickerPackVisual;