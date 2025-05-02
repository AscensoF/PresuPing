import React from 'react';
import { Smartphone, Gift } from 'lucide-react';
import VisualCard from '../ui/VisualCard';
import SpecList from '../ui/SpecList';

const AppStoreVisual: React.FC = () => {
  const specifications = [
    'Lifestyle photo of hand holding smartphone displaying WhatsApp',
    'Animated money envelopes (🎁) showing budget progression (50€→38€→15€)',
    'Soft depth-of-field blur on café table background',
    'Natural daylight, 4K resolution',
    'WhatsApp green (#25D366) and warm yellow accents',
    'Photorealistic style'
  ];

  return (
    <VisualCard id="app-store" title="App Store Hero Image">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 bg-gradient-to-br from-[#25D366]/10 to-[#FFDD59]/10 rounded-2xl overflow-hidden shadow-lg p-6">
          <div className="relative aspect-[2/1] bg-white rounded-xl overflow-hidden shadow-md flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F5] to-[#EFEFEF] opacity-70"></div>
            
            {/* Blurred café table background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 blur-[2px]">
              <div className="w-32 h-32 rounded-full bg-[#A67C52]"></div>
              <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-[#D4B996]"></div>
              <div className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full bg-[#C4A484]"></div>
            </div>
            
            {/* Hand holding smartphone */}
            <div className="relative z-10 transform rotate-[-5deg]">
              <div className="bg-[#FCE2CC] rounded-full w-12 h-48 absolute -left-4 top-16 rotate-[30deg]"></div>
              <div className="relative">
                <div className="bg-[#1E1E1E] w-64 h-[500px] rounded-[36px] p-3 shadow-xl border-[8px] border-[#121212]">
                  <div className="bg-white h-full w-full rounded-[24px] overflow-hidden flex flex-col">
                    {/* WhatsApp header */}
                    <div className="bg-[#075E54] text-white p-2 flex items-center">
                      <div className="w-8 h-8 bg-white rounded-full mr-2"></div>
                      <span className="font-medium">PresuPing Budget</span>
                    </div>
                    
                    {/* Chat content */}
                    <div className="flex-grow bg-[#ECE5DD] p-3 flex flex-col">
                      <div className="ml-auto bg-white rounded-lg p-2 max-w-[70%] mb-2">
                        <p className="text-xs">How's my budget looking?</p>
                      </div>
                      
                      {/* Animated budget envelope */}
                      <div className="mr-auto bg-[#DCF8C6] rounded-lg p-2 max-w-[70%] mb-2 relative">
                        <div className="absolute -top-1 -right-1 animate-pulse">
                          <Gift size={16} className="text-[#25D366]" />
                        </div>
                        <p className="text-xs font-medium">Weekly Budget: 50€</p>
                        <div className="w-full h-1.5 bg-gray-200 rounded-full mt-1">
                          <div className="h-full w-[20%] bg-[#25D366] rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="ml-auto bg-white rounded-lg p-2 max-w-[70%] mb-2">
                        <p className="text-xs">Just bought lunch 🍔</p>
                      </div>
                      
                      <div className="mr-auto bg-[#DCF8C6] rounded-lg p-2 max-w-[70%] mb-2 relative">
                        <div className="absolute -top-1 -right-1 animate-pulse">
                          <Gift size={16} className="text-[#F0C240]" />
                        </div>
                        <p className="text-xs font-medium">Updated: 38€ left</p>
                        <div className="w-full h-1.5 bg-gray-200 rounded-full mt-1">
                          <div className="h-full w-[45%] bg-[#F0C240] rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="ml-auto bg-white rounded-lg p-2 max-w-[70%] mb-2">
                        <p className="text-xs">Cinema night 🎬 + dinner</p>
                      </div>
                      
                      <div className="mr-auto bg-[#DCF8C6] rounded-lg p-2 max-w-[70%] relative">
                        <div className="absolute -top-1 -right-1 animate-pulse">
                          <Gift size={16} className="text-[#F97316]" />
                        </div>
                        <p className="text-xs font-medium">Alert: Only 15€ left!</p>
                        <div className="w-full h-1.5 bg-gray-200 rounded-full mt-1">
                          <div className="h-full w-[80%] bg-[#F97316] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Specifications</h3>
          <SpecList items={specifications} />
          
          <div className="mt-8 p-4 bg-[#FDF6EC] rounded-lg border border-[#F0C240]/30">
            <h4 className="font-semibold text-gray-800 mb-2">Design Notes</h4>
            <p className="text-gray-700">
              The App Store Hero Image should convey the intuitive budgeting experience directly within WhatsApp. It should showcase the visual transition of the budget as it depletes, with color changes from green to orange to red indicating spending progression.
            </p>
          </div>
        </div>
      </div>
    </VisualCard>
  );
};

export default AppStoreVisual;