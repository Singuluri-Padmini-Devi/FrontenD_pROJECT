'use client';

import { WatchConfiguration } from '@/app/types/watch';
import Image from 'next/image';

interface WatchPreviewProps {
  config: WatchConfiguration;
  previewImage: string;
}

export default function WatchPreview({ config, previewImage }: WatchPreviewProps) {
  return (
    <div className="relative w-full h-[600px] bg-gray-50">
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500">
        <Image
          src={previewImage}
          alt={`Apple Watch ${config.case} ${config.caseColor}`}
          width={400}
          height={400}
          className="object-contain animate-fade-in"
          priority
        />
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          Apple Watch {config.case.charAt(0).toUpperCase() + config.case.slice(1)}
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          {config.size} · {config.caseColor} · {config.bandType}
        </p>
      </div>
    </div>
  );
}