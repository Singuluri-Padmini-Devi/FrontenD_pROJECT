'use client';

import { COLLECTIONS } from '@/app/lib/constants';
import { cn } from '@/lib/utils';

interface CollectionSelectorProps {
  selectedCollection: string;
  onSelect: (collection: string) => void;
}

export default function CollectionSelector({ selectedCollection, onSelect }: CollectionSelectorProps) {
  return (
    <div className="flex justify-center space-x-2 p-4">
      {Object.entries(COLLECTIONS).map(([key, name]) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
            selectedCollection === key
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
          )}
        >
          {name}
        </button>
      ))}
    </div>
  );
}