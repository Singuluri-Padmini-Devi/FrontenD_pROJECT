import { useState } from 'react';
import { WatchConfiguration, WatchSize } from '../types/watch';
import { watchCases, watchBands } from '../data/watch-data';
import { COLLECTIONS } from '../lib/constants';

const initialConfig: WatchConfiguration = {
  size: '45mm',
  case: 'aluminum',
  caseColor: 'midnight',
  bandType: 'solo-loop',
  bandColor: 'midnight',
  collection: 'SERIES_9',
  bandCategory: 'SOLO_LOOP'
};

export function useWatchConfiguration() {
  const [config, setConfig] = useState<WatchConfiguration>(initialConfig);

  const selectedCase = watchCases.find(c => c.case === config.case && c.color === config.caseColor);
  const selectedBand = watchBands.find(b => b.type === config.bandType && b.color === config.bandColor);
  
  const filteredBands = watchBands.filter(band => {
    const matchesCategory = band.type.includes(config.bandCategory.toLowerCase());
    const availableInCollection = true; // Add collection-specific filtering logic here
    return matchesCategory && availableInCollection;
  });

  const totalPrice = (selectedCase?.price || 0) + (selectedBand?.price || 0);

  const handleCaseSelect = (caseId: string) => {
    const newCase = watchCases.find(c => c.id === caseId);
    if (newCase) {
      setConfig(prev => ({
        ...prev,
        case: newCase.case,
        caseColor: newCase.color
      }));
    }
  };

  const handleBandSelect = (bandId: string) => {
    const newBand = watchBands.find(b => b.id === bandId);
    if (newBand) {
      setConfig(prev => ({
        ...prev,
        bandType: newBand.type,
        bandColor: newBand.color
      }));
    }
  };

  const handleSizeSelect = (size: WatchSize) => {
    setConfig(prev => ({ ...prev, size }));
  };

  const handleCollectionSelect = (collection: string) => {
    setConfig(prev => ({ ...prev, collection }));
  };

  const handleBandCategorySelect = (category: string) => {
    setConfig(prev => ({ ...prev, bandCategory: category }));
  };

  return {
    config,
    selectedCase,
    selectedBand,
    filteredBands,
    totalPrice,
    handleCaseSelect,
    handleBandSelect,
    handleSizeSelect,
    handleCollectionSelect,
    handleBandCategorySelect
  };
}