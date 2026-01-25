import React, { useState, useEffect } from 'react';
import { StickyBar } from './components/StickyBar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { RealityMeter } from './components/RealityMeter';
import { TheShift } from './components/TheShift';
import { ProductSection } from './components/ProductSection';
import { HowItWorks } from './components/HowItWorks';
import { CostOfWaiting } from './components/CostOfWaiting';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Brain, Zap, Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      
      const progress = maxScroll > 0 ? currentScrollY / maxScroll : 0;
      
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
      setScrollY(currentScrollY);
    };

    // Initial calculation
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen transition-colors duration-700 ease-in-out font-sans text-slate-900 overflow-x-hidden">
      {/* Dynamic Background System */}
      <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden bg-slate-950">
        
        {/* Layer 1: Zombie Mode (Deep Blue/Dark) - Dominant at top */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 transition-opacity duration-1000 ease-out"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 2) }}
        >
          {/* Cold Parallax Blobs - Optimized for Mobile */}
          <div 
            className="absolute top-0 left-[-20%] md:left-[-10%] w-[100vw] h-[100vw] md:w-[600px] md:h-[600px] bg-blue-600/20 rounded-full blur-[60px] md:blur-[100px] pointer-events-none will-change-transform"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          ></div>
          <div 
            className="absolute top-[20%] right-[-20%] md:right-[-10%] w-[90vw] h-[90vw] md:w-[500px] md:h-[500px] bg-indigo-500/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none will-change-transform"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          ></div>
        </div>

        {/* Layer 2: Transition Zone (Purple/Red Haze) - Middle scroll */}
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-900/30 to-transparent transition-opacity duration-700"
          style={{ 
            opacity: scrollProgress > 0.1 && scrollProgress < 0.6
              ? Math.sin(((scrollProgress - 0.1) / 0.5) * Math.PI) 
              : 0 
          }}
        ></div>

        {/* Layer 3: Potential Mode (Warm Orange/Cream) - Dominant at bottom */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-orange-50 via-amber-50 to-orange-100 transition-opacity duration-1000 ease-in"
          style={{ opacity: Math.max(0, (scrollProgress - 0.3) * 2) }}
        >
          {/* Warm Parallax Blobs - Optimized for Mobile */}
           <div 
            className="absolute top-[30%] left-[-20%] w-[120vw] h-[120vw] md:w-[800px] md:h-[800px] bg-orange-400/30 rounded-full blur-[80px] md:blur-[100px] pointer-events-none will-change-transform"
            style={{ transform: `translateY(${(scrollY - 1000) * 0.1}px)` }}
          ></div>
           <div 
            className="absolute bottom-0 right-0 w-[100vw] h-[100vw] md:w-[600px] md:h-[600px] bg-yellow-400/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none will-change-transform"
            style={{ transform: `translateY(${(scrollY - 2000) * 0.05}px)` }}
          ></div>
        </div>
      </div>

      {/* Side Progress Indicator (Floating) - Hidden on mobile, visible lg */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4 transition-opacity duration-500 opacity-80 mix-blend-difference text-white">
        <div className={`transition-all duration-500 ${scrollProgress < 0.4 ? 'scale-110 text-blue-300' : 'scale-75 text-slate-500'}`}>
          <Moon size={24} className={scrollProgress < 0.4 ? "drop-shadow-[0_0_10px_rgba(147,197,253,0.8)]" : ""} />
        </div>
        
        {/* Bar container */}
        <div className="h-40 w-1.5 bg-white/20 rounded-full relative overflow-hidden backdrop-blur-sm">
          <div 
            className="absolute top-0 left-0 w-full rounded-full transition-all duration-100 bg-gradient-to-b from-blue-500 to-orange-500"
            style={{ height: `${scrollProgress * 100}%` }}
          ></div>
        </div>

        <div className={`transition-all duration-500 ${scrollProgress > 0.4 ? 'scale-110 text-orange-400' : 'scale-75 text-slate-500'}`}>
          <Sun size={24} className={scrollProgress > 0.4 ? "animate-spin-slow drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]" : ""} />
        </div>
      </div>

      {/* Top Progress Bar - Visible on all screens */}
      <div className="fixed top-0 left-0 h-1 w-full z-[60]" style={{ transform: `scaleX(${scrollProgress})`, transformOrigin: '0 50%', background: 'linear-gradient(90deg, #3b82f6, #f97316)' }}></div>

      <StickyBar />
      
      <main className="relative">
        <div className="relative z-10">
          <Hero />
          <ProblemSection />
          <RealityMeter />
          <TheShift scrollProgress={scrollProgress} />
        </div>
        
        {/* The Product Section acts as the "Ground" rising up to meet the user */}
        <div className="relative z-20 -mt-10 pt-10">
          <ProductSection />
          <HowItWorks />
          <CostOfWaiting />
          <SocialProof />
          <div className="bg-white/60 backdrop-blur-md rounded-t-[3rem] mt-12 pt-12 border-t border-white/50 shadow-inner">
            <FAQ />
            <FinalCTA />
          </div>
        </div>
      </main>
      
      <footer className="bg-orange-950 text-orange-200/60 py-8 text-center text-sm relative z-30">
        <p className="font-medium tracking-wide">© 2024 Limitless Kid</p>
        <p className="text-xs mt-2 opacity-70">Reclaiming childhood, one day at a time.</p>
      </footer>
    </div>
  );
};

export default App;