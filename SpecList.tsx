import React from 'react';
import { Check } from 'lucide-react';

interface SpecListProps {
  items: string[];
}

const SpecList: React.FC<SpecListProps> = ({ items }) => {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="mr-2 mt-0.5 bg-[#25D366]/10 rounded-full p-0.5">
            <Check size={14} className="text-[#25D366]" />
          </span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default SpecList;