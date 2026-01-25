import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Smartphone } from 'lucide-react';
import { ScreenTimeRisk } from '../types';

export const RealityMeter: React.FC = () => {
  const [hours, setHours] = useState<number>(2);

  const getRiskLevel = (h: number): ScreenTimeRisk => {
    if (h < 2) return { 
      label: "Safe Zone", 
      color: "text-green-400", 
      message: "Great! Keep maintaining this balance.",
      description: "Healthy brain development zone."
    };
    if (h <= 4) return { 
      label: "Caution Zone", 
      color: "text-yellow-400", 
      message: "Routine break hoti hai. Focus weak hota hai.",
      description: "Dopamine dependency is starting."
    };
    return { 
      label: "Danger Zone", 
      color: "text-red-500", 
      message: "Tantrums aur aggression chances rise significantly.",
      description: "Digital Zombie mode active."
    };
  };

  const risk = getRiskLevel(hours);

  return (
    <section className="py-20 px-4 z-10 relative">
      <div className="max-w-3xl mx-auto bg-slate-900/80 border border-slate-700 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(59,130,246,0.15)] backdrop-blur-md">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center gap-3">
            <Smartphone className="text-blue-400" />
            Screen-Time Reality Meter
          </h2>
          <p className="text-slate-400 mt-2">Aapke ghar mein daily screen time kitna hai?</p>
        </div>

        <div className="mb-12 px-4">
          <div className="relative h-16 flex items-center justify-center">
             <span className="text-5xl font-bold text-white font-mono">{hours}</span>
             <span className="text-xl text-slate-400 ml-2 mt-4">Hours / Day</span>
          </div>
          
          <input 
            type="range" 
            min="0" 
            max="10" 
            step="0.5"
            value={hours} 
            onChange={(e) => setHours(parseFloat(e.target.value))}
            className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer range-slider mt-6"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
            <span>0 Hrs</span>
            <span>5 Hrs</span>
            <span>10+ Hrs</span>
          </div>
        </div>

        <div className={`text-center transition-all duration-300 transform`}>
          <div className={`inline-block border px-4 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-widest ${risk.color} border-current`}>
            {risk.label}
          </div>
          <h3 className={`text-xl md:text-2xl font-bold mb-2 ${risk.color}`}>
            {risk.message}
          </h3>
          <p className="text-slate-300 text-sm">{risk.description}</p>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-700 text-center">
          <p className="text-green-400 flex items-center justify-center gap-2 font-medium">
            <CheckCircle size={18} />
            Good news: Reset is possible — starting today.
          </p>
        </div>
      </div>
    </section>
  );
};