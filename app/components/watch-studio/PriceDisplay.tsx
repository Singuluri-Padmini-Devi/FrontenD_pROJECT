'use client';

interface PriceDisplayProps {
  totalPrice: number;
}

export default function PriceDisplay({ totalPrice }: PriceDisplayProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex justify-between items-center animate-slide-up">
      <div>
        <p className="text-sm text-gray-500">Total</p>
        <p className="text-2xl font-semibold">
          ${totalPrice.toLocaleString()}
        </p>
      </div>
      <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium transition-colors hover:bg-blue-600">
        Add to Bag
      </button>
    </div>
  );
}