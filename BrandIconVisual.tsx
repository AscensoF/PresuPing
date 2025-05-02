import React from 'react';
import { MessageSquareHeart, Euro } from 'lucide-react';
import VisualCard from '../ui/VisualCard';
import SpecList from '../ui/SpecList';

const BrandIconVisual: React.FC = () => {
  const specifications = [
    'Coin purse-shaped chat bubble design',
    'Animated €-symbol with minimal motion lines',
    'Dual-color scheme: WhatsApp green and white',
    'Scalable from 512px to 32px favicon',
    'Minimal and recognizable design'
  ];

  return (
    <VisualCard id="branding" title="Brand Icon">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 bg-gradient-to-br from-[#25D366]/10 to-[#FFDD59]/10 rounded-2xl overflow-hidden shadow-lg p-6">
          <div className="flex items-center justify-center">
            <div className="space-y-12">
              <div className="flex justify-center gap-12">
                {/* Large icon */}
                <div className="relative group">
                  <div className="w-32 h-32 bg-[#25D366] rounded-2xl shadow-lg flex items-center justify-center transform group-hover:rotate-3 transition-transform">
                    <div className="relative">
                      <MessageSquareHeart className="w-20 h-20 text-white" strokeWidth={2} />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Euro className="w-10 h-10 text-white" strokeWidth={2.5} />
                        {/* Motion lines */}
                        <div className="absolute -right-1 -top-1 w-1 h-1 bg-white rounded-full"></div>
                        <div className="absolute -right-2 -top-2 w-0.5 h-0.5 bg-white rounded-full"></div>
                        <div className="absolute -right-3 -top-3 w-0.5 h-0.5 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-center mt-2 text-gray-600 text-sm">512px</p>
                </div>
                
                {/* Medium icon */}
                <div className="relative group">
                  <div className="w-16 h-16 bg-[#25D366] rounded-xl shadow-lg flex items-center justify-center transform group-hover:rotate-3 transition-transform">
                    <div className="relative">
                      <MessageSquareHeart className="w-10 h-10 text-white" strokeWidth={2} />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Euro className="w-5 h-5 text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                  <p className="text-center mt-2 text-gray-600 text-sm">128px</p>
                </div>
              </div>
              
              <div className="flex justify-center gap-8">
                {/* Small icons */}
                <div className="relative group">
                  <div className="w-12 h-12 bg-[#25D366] rounded-lg shadow-lg flex items-center justify-center transform group-hover:rotate-3 transition-transform">
                    <div className="relative">
                      <MessageSquareHeart className="w-8 h-8 text-white" strokeWidth={2} />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Euro className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                  <p className="text-center mt-2 text-gray-600 text-sm">64px</p>
                </div>
                
                <div className="relative group">
                  <div className="w-8 h-8 bg-[#25D366] rounded-md shadow-lg flex items-center justify-center transform group-hover:rotate-3 transition-transform">
                    <div className="relative">
                      <MessageSquareHeart className="w-5 h-5 text-white" strokeWidth={2} />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Euro className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                  <p className="text-center mt-2 text-gray-600 text-sm">32px</p>
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
              The Brand Icon combines WhatsApp's chat bubble with a coin purse concept, creating an instantly recognizable symbol of budget conversations. The animated €-symbol adds a subtle dynamic element while maintaining scalability across all sizes.
            </p>
            <p className="text-gray-700 mt-2">
              This design maintains brand consistency while offering a unique visual identity that works well as both app icon and favicon.
            </p>
          </div>
        </div>
      </div>
    </VisualCard>
  );
};

export default BrandIconVisual;