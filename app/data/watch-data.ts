import { WatchCase, WatchBand } from '../types/watch';
import { WATCH_IMAGES } from '../lib/constants';

export const watchCases: WatchCase[] = [
  {
    id: 'aluminum-midnight',
    name: 'Aluminum Midnight',
    case: 'aluminum',
    color: 'midnight',
    price: 399,
    image: WATCH_IMAGES.ALUMINUM_MIDNIGHT
  },
  {
    id: 'aluminum-starlight',
    name: 'Aluminum Starlight',
    case: 'aluminum',
    color: 'starlight',
    price: 399,
    image: WATCH_IMAGES.ALUMINUM_STARLIGHT
  },
  {
    id: 'titanium-natural',
    name: 'Titanium Natural',
    case: 'titanium',
    color: 'silver',
    price: 799,
    image: WATCH_IMAGES.TITANIUM_NATURAL
  }
];

export const watchBands: WatchBand[] = [
  {
    id: 'solo-loop-midnight',
    name: 'Solo Loop Midnight',
    type: 'solo-loop',
    color: 'midnight',
    price: 49,
    image: WATCH_IMAGES.BAND_SOLO_LOOP
  },
  {
    id: 'sport-band-starlight',
    name: 'Sport Band Starlight',
    type: 'sport-band',
    color: 'starlight',
    price: 49,
    image: WATCH_IMAGES.BAND_SPORT
  },
  {
    id: 'leather-link-gold',
    name: 'Leather Link Gold',
    type: 'leather-link',
    color: 'gold',
    price: 99,
    image: WATCH_IMAGES.BAND_LEATHER
  }
];