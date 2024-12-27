'use client';

import { WatchCase } from '@/app/types/watch';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface CaseSelectorProps {
  cases: WatchCase[];
  selectedCase: string;
  onSelect: (caseId: string) => void;
}

export default function CaseSelector({ cases, selectedCase, onSelect }: CaseSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {cases.map((caseOption) => (
        <button
          key={caseOption.id}
          onClick={() => onSelect(caseOption.id)}
          className={cn(
            "relative rounded-xl overflow-hidden aspect-square transform",
            "border-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",
            selectedCase === caseOption.id
              ? "border-blue-500"
              : "border-gray-200 hover:border-gray-300"
          )}
        >
          <Image
            src={caseOption.image}
            alt={caseOption.name}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="text-white text-sm font-medium">{caseOption.name}</p>
            <p className="text-white/80 text-xs">From ${caseOption.price}</p>
          </div>
        </button>
      ))}
    </div>
  );
}