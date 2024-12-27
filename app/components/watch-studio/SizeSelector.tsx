'use client';

import { WatchSize } from '@/app/types/watch';
import { cn } from '@/lib/utils';

interface SizeSelectorProps {
  selectedSize: WatchSize;
  onSelect: (size: WatchSize) => void;
}

export default function SizeSelector({ selectedSize, onSelect }: SizeSelectorProps) {
  const sizes: WatchSize[] = ['41mm', '45mm'];

  return (
    <div className="flex justify-center space-x-4 p-4">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSelect(size)}
          className={cn(
            "px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200",
            selectedSize === size
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
          )}
        >
          {size}
        </button>
      ))}
    </div>
  );
}