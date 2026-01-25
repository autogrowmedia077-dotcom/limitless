import React from 'react';
import { ArrowDown, Brain, Zap } from 'lucide-react';

interface TheShiftProps {
  scrollProgress?: number;
}

export const TheShift: React.FC<TheShiftProps> = ({ scrollProgress = 0.4 }) => {
  // Calculate dynamic styles based on scroll progress
  // Normalize a value around 0.4 (approx where The Shift section is)
  const shiftFactor = Math.min(Math.max((scrollProgress - 0.25) * 3, 0), 1); // 0 to 1 transition
  
  return (
    <section className="py-24 md:py-32 px-4 text-center relative z-10 overflow-hidden">
      {/* Background connector line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-400/50 to-orange-500/0 -translate-x-1/2 -z-10"></div>

      <div className="max-w-4xl mx-auto relative">
        <div className="flex justify-center mb-10 md:mb-12 relative">
          <div className="relative" style={{ transform: `scale(${1 + shiftFactor * 0.2})`, transition: 'transform 0.5s ease-out' }}>
            {/* Mobile-optimized glows */}
            <div className={`absolute inset-0 bg-blue-500 blur-[40px] md:blur-xl opacity-30 animate-pulse ${shiftFactor > 0.5 ? 'hidden' : 'block'}`}></div>
            <div className={`absolute inset-0 bg-orange-500 blur-[40px] md:blur-xl opacity-30 animate-pulse ${shiftFactor > 0.5 ? 'block' : 'hidden'}`}></div>
            
            <div className="p-4 bg-gradient-to-b from-slate-900 to-slate-800 rounded-full border border-slate-700 shadow-2xl relative z-10 group transition-all duration-500"
                 style={{ borderColor: shiftFactor > 0.5 ? 'rgba(249, 115, 22, 0.5)' : 'rgba(51, 65, 85, 1)' }}>
              <ArrowDown 
                className="transition-colors duration-500" 
                size={32} 
                style={{ color: shiftFactor > 0.5 ? '#fb923c' : '#bfdbfe' }}
              />
            </div>
            
            {/* Orbits - sizes adjusted for mobile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]"
                 style={{ opacity: 1 - shiftFactor }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"></div>
            </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 border border-orange-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"
                  style={{ opacity: shiftFactor }}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-400 rounded-full shadow-[0_0_10px_#fb923c]"></div>
            </div>
          </div>
        </div>
        
        {/* Dynamic Title - Stacked on Mobile */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-8 tracking-tight flex flex-col md:block items-center gap-2">
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-slate-300 transition-all duration-500"
            style={{ 
              filter: `blur(${shiftFactor * 2}px)`,
              opacity: 1 - shiftFactor * 0.5,
              transform: `translateY(${shiftFactor * -10}px)`
            }}
          >Zombie Mode</span> 
          
          <span className="md:mx-4 text-slate-500 font-light hidden md:inline">→</span>
          <ArrowDown className="md:hidden text-slate-600 opacity-50 my-1" size={20} />
          
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-100 to-white drop-shadow-[0_0_15px_rgba(251,146,60,0.4)] transition-all duration-500"
            style={{ 
              filter: `blur(${(1 - shiftFactor) * 2}px)`,
              opacity: 0.5 + shiftFactor * 0.5,
              transform: `translateY(${(1 - shiftFactor) * 10}px)`
            }}
          >Potential Mode</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 my-12 text-left md:text-center px-2">
            <div 
              className="w-full md:flex-1 max-w-sm bg-slate-900/40 p-6 rounded-2xl border border-blue-900/30 backdrop-blur-sm transition-all duration-500"
              style={{ 
                transform: shiftFactor > 0.5 ? 'scale(0.98)' : 'scale(1)',
                opacity: shiftFactor > 0.5 ? 0.5 : 1
              }}
            >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-900/50 rounded-full mb-4 md:mx-auto text-blue-300">
                    <Zap size={20} />
                </div>
                <div>
                  <h3 className="text-blue-100 font-bold mb-1 md:mb-2 text-lg md:text-center">Over-Stimulated</h3>
                  <p className="text-slate-400 text-sm leading-relaxed md:text-center">
                      Short attention span. Constant dopamine hits.
                  </p>
                </div>
            </div>

            <div 
              className="w-full md:flex-1 max-w-sm bg-orange-950/40 p-6 rounded-2xl border border-orange-500/30 backdrop-blur-sm transition-all duration-500"
              style={{ 
                transform: shiftFactor > 0.5 ? 'scale(1.02)' : 'scale(1)',
                borderColor: shiftFactor > 0.5 ? 'rgba(249, 115, 22, 0.6)' : 'rgba(249, 115, 22, 0.3)',
                boxShadow: shiftFactor > 0.5 ? '0 10px 30px -5px rgba(249,115,22,0.2)' : 'none',
                opacity: shiftFactor > 0.5 ? 1 : 0.8
              }}
            >
                 <div className="flex items-center justify-center w-12 h-12 bg-orange-900/50 rounded-full mb-4 md:mx-auto text-orange-300">
                    <Brain size={20} />
                </div>
                <div>
                  <h3 className="text-orange-100 font-bold mb-1 md:mb-2 text-lg md:text-center">Deep Focus</h3>
                  <p className="text-orange-200/70 text-sm leading-relaxed md:text-center">
                      Calm mind. Creative play. Emotional regulation.
                  </p>
                </div>
            </div>
        </div>
        
        <p className="text-lg md:text-2xl text-slate-200 leading-relaxed font-light max-w-2xl mx-auto px-4">
          Bacchon ka brain <span className="font-semibold text-white">plastic hota hai</span> (moldable). 
          Agar aaj sahi stimulation mile, toh wahi focus books aur play mein shift ho sakta hai.
        </p>
        
        <div className="mt-8 md:mt-12 inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/50 rounded-full px-5 py-2 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          <p className="text-orange-200 font-medium text-xs md:text-sm">It takes just 7 days to start the shift.</p>
        </div>
      </div>
    </section>
  );
};