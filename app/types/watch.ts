export type WatchSize = '41mm' | '45mm';
export type WatchCase = 'aluminum' | 'stainless-steel' | 'titanium';
export type WatchColor = 'midnight' | 'starlight' | 'silver' | 'gold' | 'space-black';
export type BandType = 'solo-loop' | 'braided-solo-loop' | 'sport-band' | 'leather-link';
export type Collection = 'SERIES_9' | 'SERIES_SE' | 'ULTRA' | 'HERMES';
export type BandCategory = 'SOLO_LOOP' | 'SPORT' | 'LEATHER' | 'METAL';

export interface WatchConfiguration {
  size: WatchSize;
  case: WatchCase;
  caseColor: WatchColor;
  bandType: BandType;
  bandColor: WatchColor;
  collection: Collection;
  bandCategory: BandCategory;
}

export interface WatchOption {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface WatchCase extends WatchOption {
  case: WatchCase;
  color: WatchColor;
}

export interface WatchBand extends WatchOption {
  type: BandType;
  color: WatchColor;
}