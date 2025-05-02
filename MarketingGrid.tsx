import React from 'react';
import AppStoreVisual from './visuals/AppStoreVisual';
import BrandIconVisual from './visuals/BrandIconVisual';
import OnboardingVisual from './visuals/OnboardingVisual';
import SocialMediaVisual from './visuals/SocialMediaVisual';
import StickerPackVisual from './visuals/StickerPackVisual';
import DataVisualizationVisual from './visuals/DataVisualizationVisual';

const MarketingGrid: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="space-y-24">
        <AppStoreVisual />
        <BrandIconVisual />
        <OnboardingVisual />
        <SocialMediaVisual />
        <StickerPackVisual />
        <DataVisualizationVisual />
      </div>
    </div>
  );
};

export default MarketingGrid;