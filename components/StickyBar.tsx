import React from 'react';
import { ShoppingCart } from 'lucide-react';

export const StickyBar: React.FC = () => {
  const scrollToProduct = () => {
    document.getElementById('product-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-slate-900/95 backdrop-blur-md text-white border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg tracking-tight text-orange-400">Limitless<span className="text-white">Kid</span></span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-xs md:text-sm text-gray-300">
            <span className="text-green-400 font-bold animate-pulse">●</span> Limited Batch
          </span>
          <button 
            onClick={scrollToProduct}
            className="bg-orange-500 hover:bg-orange-600 text-white text-xs md:text-sm font-bold py-1.5 px-4 rounded-full transition-all flex items-center gap-2 shadow-[0_0_10px_rgba(249,115,22,0.5)]"
          >
            ₹199 • Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};