import React from 'react';
import { ArrowRight, AlertTriangle } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToProblem = () => {
    document.getElementById('problem-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProduct = () => {
    document.getElementById('product-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-20 min-h-[90vh] flex flex-col md:flex-row overflow-hidden">
      
      {/* Left Side: Zombie Mode (Visual) */}
      <div className="relative w-full md:w-1/2 bg-slate-900 flex flex-col justify-center px-6 py-12 md:p-12 z-10 border-r border-slate-700/50">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <img 
            src="https://picsum.photos/800/1200?grayscale" 
            alt="Child looking at screen" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-left max-w-lg mx-auto md:mr-0">
           <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-xs font-medium mb-6 backdrop-blur-sm">
             <AlertTriangle size={14} /> Screen habit deep ho rahi hai
           </div>
           
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-400 leading-tight mb-6">
             Phone ko control karo, <span className="text-white block mt-2">varna phone ghar ko control karega.</span>
           </h1>
           
           <p className="text-slate-300 text-lg mb-8 leading-relaxed">
             Aapka child "Digital Zombie" ban raha hai? <br/>
             <span className="text-blue-200">Reclaim their developing brain today.</span>
           </p>

           <div className="flex flex-col sm:flex-row gap-4">
             <button 
                onClick={scrollToProduct}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 text-lg"
             >
               Buy Now - ₹199
               <ArrowRight size={20} />
             </button>
             <button 
                onClick={scrollToProblem}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium py-4 px-8 rounded-lg border border-slate-600 transition-all"
             >
               See How It Works
             </button>
           </div>
           
           <p className="mt-6 text-slate-400 text-xs flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-green-500"></span>
             Parent-tested system • Easy daily steps • No lectures
           </p>
        </div>
      </div>

      {/* Right Side: Potential Mode (Visual) - Hidden on mobile initially or stacked */}
      <div className="relative hidden md:block w-1/2 bg-amber-50">
        <div className="absolute inset-0">
           <img 
            src="https://picsum.photos/800/1200" 
            alt="Child playing outdoors" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:to-slate-900/80"></div>
        </div>
        
        <div className="absolute bottom-12 right-12 text-right text-white max-w-sm">
           <h3 className="text-2xl font-bold mb-2 text-orange-100 drop-shadow-md">Unlock Potential</h3>
           <p className="text-sm text-orange-50/90 drop-shadow-md">
             Real play. Real focus.<br/>Real childhood.
           </p>
        </div>
      </div>
    </section>
  );
};