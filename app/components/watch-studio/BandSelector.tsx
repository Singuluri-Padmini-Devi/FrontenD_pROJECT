'use client';

import { WatchBand } from '@/app/types/watch';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRef } from 'react';

interface BandSelectorProps {
  bands: WatchBand[];
  selectedBand: string;
  onSelect: (bandId: string) => void;
}

export default function BandSelector({ bands, selectedBand, onSelect }: BandSelectorProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef}
      className="relative overflow-x-auto pb-4"
    >
      <div className="flex space-x-4 px-4">
        {bands.map((band) => (
          <button
            key={band.id}
            onClick={() => onSelect(band.id)}
            className={cn(
              "relative flex-shrink-0 w-48 rounded-xl overflow-hidden transform",
              "border-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",
              selectedBand === band.id
                ? "border-blue-500"
                : "border-gray-200 hover:border-gray-300"
            )}
          >
            <div className="aspect-square relative">
              <Image
                src={band.image}
                alt={band.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3 bg-white">
              <p className="font-medium text-sm">{band.name}</p>
              <p className="text-gray-500 text-xs mt-1">${band.price}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}