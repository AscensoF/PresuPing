import React from 'react';
import { Coffee, ShoppingBag, Bus, Utensils, Ticket, Home } from 'lucide-react';
import VisualCard from '../ui/VisualCard';
import SpecList from '../ui/SpecList';

const DataVisualizationVisual: React.FC = () => {
  const specifications = [
    'Floating pie chart over WhatsApp interface',
    'PresuPing green and grayscale palette',
    'Large, mobile-optimized typography',
    'Focus on clarity and readability',
    'Spending category breakdown'
  ];

  // Data for pie chart
  const categories = [
    { name: 'Coffee', icon: Coffee, color: '#25D366', percentage: 25 },
    { name: 'Shopping', icon: ShoppingBag, color: '#1E9651', percentage: 20 },
    { name: 'Transport', icon: Bus, color: '#187C43', percentage: 15 },
    { name: 'Dining', icon: Utensils, color: '#136835', percentage: 15 },
    { name: 'Entertainment', icon: Ticket, color: '#105029', percentage: 15 },
    { name: 'Other', icon: Home, color: '#0D4021', percentage: 10 }
  ];

  // Calculate stroke dasharray and stroke dashoffset for each segment
  const calculatePieSegment = (percentage, startPercentage = 0) => {
    const circumference = 2 * Math.PI * 40; // r = 40
    const offset = circumference * (1 - startPercentage / 100);
    const length = circumference * percentage / 100;
    return { 
      strokeDasharray: `${length} ${circumference - length}`,
      strokeDashoffset: offset
    };
  };

  let accumulatedPercentage = 0;
  const segments = categories.map(category => {
    const segment = calculatePieSegment(category.percentage, accumulatedPercentage);
    accumulatedPercentage += category.percentage;
    return {
      ...category,
      ...segment
    };
  });

  return (
    <VisualCard id="data" title="Data Visualization">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 bg-gradient-to-br from-[#25D366]/10 to-[#FFDD59]/10 rounded-2xl overflow-hidden shadow-lg p-6">
          <div className="relative bg-[#F5F5F5] rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            {/* WhatsApp-like interface */}
            <div className="absolute inset-0">
              <div className="h-12 bg-[#075E54] flex items-center px-4">
                <div className="h-8 w-8 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <p className="text-white font-medium">PresuPing Analytics</p>
                  <p className="text-xs text-white/70">Weekly Report</p>
                </div>
              </div>
              <div className="bg-[#ECE5DD] h-full pt-12 px-4">
                <div className="bg-[#DCF8C6] rounded-lg p-3 my-2 mr-auto max-w-[70%]">
                  <p className="text-sm font-medium">Monthly Breakdown</p>
                  <p className="text-xs mt-1">Here's how you spent your budget this month.</p>
                </div>
                
                {/* Other chat messages could go here */}
              </div>
            </div>
            
            {/* Floating data visualization */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 
                          bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl
                          border border-[#25D366]/20 w-[90%] max-w-[500px]">
              <div className="flex flex-col md:flex-row items-center">
                {/* Pie chart */}
                <div className="relative w-32 h-32 mx-auto md:mx-0">
                  <svg width="100%" height="100%" viewBox="0 0 100 100">
                    {segments.map((segment, index) => (
                      <circle
                        key={index}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={segment.color}
                        strokeWidth="20"
                        strokeDasharray={segment.strokeDasharray}
                        strokeDashoffset={segment.strokeDashoffset}
                        transform="rotate(-90 50 50)"
                      />
                    ))}
                    <circle
                      cx="50"
                      cy="50"
                      r="30"
                      fill="white"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Total</p>
                      <p className="text-xl font-bold text-gray-800">243€</p>
                    </div>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="md:ml-6 mt-4 md:mt-0 grid grid-cols-2 gap-x-6 gap-y-2 flex-1">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{backgroundColor: category.color}}></div>
                      <div className="flex items-center gap-1">
                        <category.icon className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-800">{category.name}</span>
                      </div>
                      <span className="ml-auto text-sm font-medium">{category.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium text-gray-800 text-center md:text-left">Top Spending Categories</h4>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <Coffee className="w-5 h-5 text-[#25D366] mr-2" />
                    <span className="text-gray-800">Coffee</span>
                    <div className="ml-auto font-medium">60.75€</div>
                  </div>
                  <div className="flex items-center">
                    <ShoppingBag className="w-5 h-5 text-[#1E9651] mr-2" />
                    <span className="text-gray-800">Shopping</span>
                    <div className="ml-auto font-medium">48.60€</div>
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
              The data visualization presents spending information in a clean, easily digestible format that appears to float over the WhatsApp interface. This design maintains the app's chat-based nature while providing valuable insights.
            </p>
            <p className="text-gray-700 mt-2">
              The pie chart uses variations of the PresuPing green to maintain brand consistency while providing enough contrast between categories. Each spending type is paired with an icon for immediate recognition.
            </p>
            <p className="text-gray-700 mt-2">
              Large typography and simplified data presentation ensure the visualization works well on mobile screens and can be understood at a glance.
            </p>
          </div>
        </div>
      </div>
    </VisualCard>
  );
};

export default DataVisualizationVisual;