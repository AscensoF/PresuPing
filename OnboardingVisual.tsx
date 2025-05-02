import React from 'react';
import { Gift, Coffee, Bus, Merge as Hamburger } from 'lucide-react';
import VisualCard from '../ui/VisualCard';
import SpecList from '../ui/SpecList';

const OnboardingVisual: React.FC = () => {
  const specifications = [
    'Panel 1: Animated envelope dropping into smartphone',
    'Panel 2: Emoji expenses (☕🍔🚌) floating into ledger',
    'Panel 3: Dynamic progress bar transitioning green→orange→red',
    'Consistent line weight and rounded corners',
    'Helvetica Rounded for captions',
    'Cohesive minimal style'
  ];

  return (
    <VisualCard id="onboarding" title="Onboarding Illustrations (3-panel series)">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 bg-gradient-to-br from-[#25D366]/10 to-[#FFDD59]/10 rounded-2xl overflow-hidden shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
            {/* Panel 1 */}
            <div className="bg-white rounded-xl p-4 shadow-md flex flex-col group">
              <div className="flex-grow flex items-center justify-center relative overflow-hidden">
                <div className="w-24 h-40 rounded-[24px] border-4 border-gray-800 bg-gray-100 relative">
                  <div className="absolute top-0 left-0 right-0 h-4 bg-gray-800 rounded-t-[18px]"></div>
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <div className="w-16 h-28 bg-[#ECE5DD] rounded-lg flex items-center justify-center">
                      <div className="absolute transform group-hover:-translate-y-12 transition-transform duration-700 ease-in-out">
                        <Gift className="w-10 h-10 text-[#25D366]" />
                      </div>
                      <div className="absolute transform translate-y-24 group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                        <Gift className="w-10 h-10 text-[#25D366]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-gray-800">Start Budgeting</h3>
                <p className="text-sm text-gray-600 mt-1">Begin your journey with a weekly budget envelope</p>
              </div>
            </div>
            
            {/* Panel 2 */}
            <div className="bg-white rounded-xl p-4 shadow-md flex flex-col group">
              <div className="flex-grow flex items-center justify-center relative overflow-hidden">
                <div className="w-32 h-32 relative">
                  <div className="absolute border-2 border-gray-200 rounded-lg w-full h-20 bg-white shadow-sm flex items-center justify-center">
                    <div className="w-[90%] h-0.5 bg-gray-200"></div>
                    <div className="w-[90%] h-0.5 bg-gray-200 absolute top-[60%]"></div>
                  </div>
                  
                  {/* Floating emoji expenses */}
                  <div className="absolute top-0 right-0 
                    transform -translate-x-8 translate-y-2
                    group-hover:translate-x-12 group-hover:translate-y-12 
                    transition-transform duration-1000 ease-in-out">
                    <Coffee className="w-8 h-8 text-[#8B572A]" />
                  </div>
                  
                  <div className="absolute top-1/4 left-0 
                    transform translate-x-0 translate-y-6
                    group-hover:translate-x-12 group-hover:translate-y-12 
                    transition-transform duration-700 ease-in-out">
                    <Hamburger className="w-8 h-8 text-[#F97316]" />
                  </div>
                  
                  <div className="absolute bottom-0 left-1/3 
                    transform translate-x-0 translate-y-0
                    group-hover:translate-x-6 group-hover:translate-y-12 
                    transition-transform duration-1300 ease-in-out">
                    <Bus className="w-8 h-8 text-[#6366F1]" />
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-gray-800">Track Expenses</h3>
                <p className="text-sm text-gray-600 mt-1">Simply send emojis for your purchases</p>
              </div>
            </div>
            
            {/* Panel 3 */}
            <div className="bg-white rounded-xl p-4 shadow-md flex flex-col">
              <div className="flex-grow flex items-center justify-center">
                <div className="w-full space-y-6">
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-[20%] bg-[#25D366] rounded-full transform transition-all duration-700 ease-in-out"></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#25D366] font-semibold">50€</span>
                      <span className="text-gray-400">Spent: 10€</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-[50%] bg-[#F0C240] rounded-full transform transition-all duration-700 ease-in-out"></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#F0C240] font-semibold">25€</span>
                      <span className="text-gray-400">Spent: 25€</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-[#F97316] rounded-full transform transition-all duration-700 ease-in-out"></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#F97316] font-semibold">5€</span>
                      <span className="text-gray-400">Spent: 45€</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-gray-800">Stay On Budget</h3>
                <p className="text-sm text-gray-600 mt-1">Visual alerts as you spend</p>
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
              The onboarding illustrations should guide users through the core features while maintaining a unified visual style. Each panel builds on the previous one to tell a complete story about how PresuPing works.
            </p>
            <p className="text-gray-700 mt-2">
              Animations should be subtle and functional, helping users understand key concepts without overwhelming them. The color transitions in panel 3 provide intuitive feedback about budget status.
            </p>
          </div>
        </div>
      </div>
    </VisualCard>
  );
};

export default OnboardingVisual;