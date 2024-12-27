'use client';

import { BAND_CATEGORIES } from '@/app/lib/constants';
import { cn } from '@/lib/utils';

interface BandCategoriesProps {
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export default function BandCategories({ selectedCategory, onSelect }: BandCategoriesProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {Object.entries(BAND_CATEGORIES).map(([key, name]) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
          className={cn(
            "px-4 py-2 rounded-full text-sm transition-all duration-200",
            selectedCategory === key
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"
          )}
        >
          {name}
        </button>
      ))}
    </div>
  );
}