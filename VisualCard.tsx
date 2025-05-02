import React, { ReactNode } from 'react';

interface VisualCardProps {
  id: string;
  title: string;
  children: ReactNode;
}

const VisualCard: React.FC<VisualCardProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <div className="mt-2 w-16 h-1 bg-[#25D366] rounded-full"></div>
      </div>
      
      {children}
    </section>
  );
};

export default VisualCard;