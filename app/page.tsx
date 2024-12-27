'use client';

import MainLayout from './components/layouts/MainLayout';
import WatchPreview from './components/watch-studio/WatchPreview';
import CaseSelector from './components/watch-studio/CaseSelector';
import BandSelector from './components/watch-studio/BandSelector';
import SizeSelector from './components/watch-studio/SizeSelector';
import PriceDisplay from './components/watch-studio/PriceDisplay';
import CollectionSelector from './components/watch-studio/CollectionSelector';
import BandCategories from './components/watch-studio/BandCategories';
import { watchCases } from './data/watch-data';
import { useWatchConfiguration } from './hooks/useWatchConfiguration';

export default function Home() {
  const {
    config,
    selectedCase,
    filteredBands,
    totalPrice,
    handleCaseSelect,
    handleBandSelect,
    handleSizeSelect,
    handleCollectionSelect,
    handleBandCategorySelect
  } = useWatchConfiguration();

  return (
    <MainLayout>
      <CollectionSelector
        selectedCollection={config.collection}
        onSelect={handleCollectionSelect}
      />
      
      <h1 className="text-4xl font-bold text-center py-8">
        Apple Watch Studio
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
        <div className="sticky top-0">
          <WatchPreview
            config={config}
            previewImage={selectedCase?.image || ''}
          />
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Choose your case</h2>
              <CaseSelector
                cases={watchCases}
                selectedCase={`${config.case}-${config.caseColor}`}
                onSelect={handleCaseSelect}
              />
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Choose your size</h2>
              <SizeSelector
                selectedSize={config.size}
                onSelect={handleSizeSelect}
              />
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Choose your band</h2>
              <BandCategories
                selectedCategory={config.bandCategory}
                onSelect={handleBandCategorySelect}
              />
              <BandSelector
                bands={filteredBands}
                selectedBand={`${config.bandType}-${config.bandColor}`}
                onSelect={handleBandSelect}
              />
            </section>
          </div>
        </div>
      </div>

      <PriceDisplay totalPrice={totalPrice} />
    </MainLayout>
  );
}